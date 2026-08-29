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

// ponytail: растёт вместе с числом сыгранных ходов, чистится только рестартом.
// Хватает надолго; если станет проблемой — чистить при уходе комнаты из in-progress.
const endedTurns = new Set<string>();

db.subscribeQuery(query, (resp) => {
  if (resp.type === "error") {
    console.error("subscribeQuery:", resp.error);
    return;
  }
  activeParties = resp.data.party as ActiveParty[];
  checkAll();
});

setInterval(checkAll, 1000);

function checkAll() {
  for (const party of activeParties) {
    const { gameState, gameParams, staticPlayerIds } = party;
    if (gameState.state !== "drawing") continue;
    if (endedTurns.has(gameState.drawingId)) continue;

    const allGuessed =
      Object.keys(gameState.guessed).length >= staticPlayerIds.length - 1;
    const timedOut =
      Date.now() - gameState.startedAt >= gameParams.drawTime * 1000;
    if (!allGuessed && !timedOut) continue;

    endedTurns.add(gameState.drawingId);
    endTurn(party, !allGuessed).catch((err) => {
      endedTurns.delete(gameState.drawingId);
      console.error("endTurn:", party.id, err);
    });
  }
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

  if (!next) {
    // круг закончился
    gameProgress.push([]);
    if (gameProgress.length < gameParams.rounds) next = newPlayers[0];
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
        words: pickWords(gameParams.wordSuggestions),
      },
      gameProgress,
    }),
    db.tx.roomEvent[id()]!.create(ended).link({ party: party.id }),
  ]);
}

function pickWords(count: number) {
  const picked = new Set<string>();
  while (picked.size < Math.min(count, words.length)) {
    picked.add(words[Math.floor(Math.random() * words.length)]!);
  }
  return [...picked];
}

console.log("scribble server: watching in-progress parties");
