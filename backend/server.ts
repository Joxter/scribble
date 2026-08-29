import { id, init } from "@instantdb/admin";
import schema from "../instant.schema.ts";
import {
  GAME_STATUS,
  type DrawingEndedEvent,
  type GameFinishedEvent,
  type GameProgress,
  type Party,
} from "../src/types.ts";
import { words } from "../dictionaries/ru-300-chatgpt.ts";

const db = init({
  appId: process.env.INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
  schema,
});

const query = {
  party: {
    $: { where: { status: GAME_STATUS.inProgress } },
    newPlayers: {},
  },
} as const;

type ActiveParty = {
  id: string;
  gameState: Party["gameState"];
  gameProgress: GameProgress;
  gameParams: Party["gameParams"];
  staticPlayerIds: string[];
  newPlayers: { id: string }[];
};

let activeParties: ActiveParty[] = [];

// ponytail: обе мапы растут вместе с числом сыгранных ходов, чистятся только
// рестартом. Хватает надолго; если станет проблемой — чистить при уходе комнаты
// из in-progress.
const endedTurns = new Set<string>();
// gameState.startedAt пишет браузер рисующего, и его часы могут сколь угодно
// расходиться с нашими. Раньше это гасилось тем, что тот же клиент и засекал,
// и завершал ход. Теперь решение за сервером, поэтому и время меряем своё.
// ponytail: при рестарте сервера идущий ход получит свежий отсчёт заново.
const turnSeenAt = new Map<string, number>();

db.subscribeQuery(query, (resp) => {
  if (resp.type === "error") {
    console.error("subscribeQuery:", resp.error);
    // подписка мертва — сами не воскреснем, пусть перезапустит docker
    if (resp.isClosed) process.exit(1);
    return;
  }
  activeParties = resp.data.party as ActiveParty[];
  checkAll();
});

setInterval(checkAll, 1000);

function checkAll() {
  for (const party of activeParties) {
    // кривая запись в одной комнате не должна ронять таймеры всех остальных
    try {
      checkParty(party);
    } catch (err) {
      console.error("checkParty:", party.id, err);
    }
  }
}

function checkParty(party: ActiveParty) {
  const { gameState, gameParams, staticPlayerIds } = party;
  if (gameState.state !== "drawing") return;
  if (endedTurns.has(gameState.drawingId)) return;

  let seenAt = turnSeenAt.get(gameState.drawingId);
  if (seenAt === undefined) {
    seenAt = Date.now();
    turnSeenAt.set(gameState.drawingId, seenAt);
  }

  // в одиночной комнате отгадывать некому, такой ход живёт только по таймеру
  const allGuessed =
    staticPlayerIds.length > 1 &&
    Object.keys(gameState.guessed).length >= staticPlayerIds.length - 1;
  const timedOut = Date.now() - seenAt >= (gameParams.drawTime ?? 60) * 1000;
  if (!allGuessed && !timedOut) return;

  endedTurns.add(gameState.drawingId);
  endTurn(party, !allGuessed).catch((err) => {
    endedTurns.delete(gameState.drawingId);
    console.error("endTurn:", party.id, err);
  });
}

async function endTurn(party: ActiveParty, byTimeout: boolean) {
  const { gameState, gameParams, newPlayers } = party;
  if (gameState.state !== "drawing") return;

  // снапшот подписки переиспользуется, копируем перед мутацией
  const gameProgress: GameProgress = structuredClone(party.gameProgress);
  if (gameProgress.length === 0) gameProgress.push([]);
  gameProgress.at(-1)!.push({
    paintingId: gameState.drawingId,
    whoDrawId: gameState.playerId,
    scores: gameState.guessed,
  });

  const nextI = newPlayers.findIndex((p) => p.id === gameState.playerId) + 1;
  let next: { id: string } | undefined = newPlayers[nextI];

  // круг закончился. gameProgress стартует как [[]], то есть его длина — это
  // номер текущего круга; новый заводим, только если он реально будет сыгран
  if (!next && gameProgress.length < gameParams.rounds) {
    gameProgress.push([]);
    next = newPlayers[0];
  }

  if (!next) {
    const finished: Omit<GameFinishedEvent, "id"> = {
      type: "game-finished",
      payload: { reason: "no-more-rounds" },
    };
    console.log(`party ${party.id}: game finished`);
    await db.transact([
      db.tx.party[party.id]!.update({
        gameState: { state: "game-finished" },
        status: GAME_STATUS.finished,
        gameProgress,
      }),
      db.tx.roomEvent[id()]!.create(finished).link({ party: party.id }),
    ]);
    return;
  }

  const ended: Omit<DrawingEndedEvent, "id"> = {
    type: "drawing-ended",
    payload: {
      reason: byTimeout ? "timeout" : "all-revealed",
      revealed: gameState.guessed,
      nextPlayerId: next.id,
    },
  };
  console.log(
    `party ${party.id}: turn ended (${ended.payload.reason}), next ${next.id}`,
  );
  await db.transact([
    db.tx.party[party.id]!.update({
      gameState: {
        state: "choosing-word",
        playerId: next.id,
        words: pickWords(gameParams.wordSuggestions ?? 3),
      },
      gameProgress,
    }),
    db.tx.roomEvent[id()]!.create(ended).link({ party: party.id }),
  ]);
}

// Дубль newRandomWords из src/utils.ts. Не переиспользуем: тот модуль тянет
// ./freehand/Vec без расширения и в ноде не грузится (см. README/Deploy).
// В словаре есть дубликаты, поэтому уникальных слов меньше, чем words.length
const uniqWords = [...new Set(words)];

function pickWords(count: number) {
  const pool = [...uniqWords];
  const picked: string[] = [];
  while (picked.length < Math.min(count, uniqWords.length)) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]!);
  }
  return picked;
}

console.log("scribble server: watching in-progress parties");
