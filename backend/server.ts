import { id, init } from "@instantdb/admin";
import schema from "../instant.schema.ts";
import {
  GAME_STATUS,
  type DrawingEndedEvent,
  type GameFinishedEvent,
  type GameProgress,
  type NewWord,
  type Party,
} from "../src/types.ts";
import {
  calculateTotalScores,
  chooseWordTime,
  generateClues,
  newRandomWords,
  nextTurn,
} from "../src/utils.ts";
import { notify } from "./notify.ts";

const db = init({
  appId: process.env.INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
  schema,
});

// prepare тоже watched: брошенное лобби некому закрыть, кроме нас
const query = {
  party: {
    $: {
      where: { status: { $in: [GAME_STATUS.prepare, GAME_STATUS.inProgress] } },
    },
    newPlayers: {},
  },
};

type ActiveParty = {
  id: string;
  name: string;
  status: Party["status"];
  gameState: Party["gameState"];
  gameProgress: GameProgress;
  gameParams: Party["gameParams"];
  staticPlayerIds: string[];
  newPlayers: { id: string; name?: string }[];
};

let activeParties: ActiveParty[] = [];

// Комнаты, про старт которых уже сообщили. Держится по текущему снапшоту, так
// что комната, ушедшая из in-progress, при новой игре сообщит о себе снова.
const startedParties = new Set<string>();
// В первом снапшоте после рестарта лежат уже идущие игры, а не новые.
let firstSnapshot = true;

// ponytail: обе мапы растут вместе с числом сыгранных ходов, чистятся только
// рестартом. Хватает надолго; если станет проблемой — чистить при уходе комнаты
// из in-progress.
const endedTurns = new Set<string>();
// gameState.startedAt пишет браузер рисующего, и его часы могут сколь угодно
// расходиться с нашими. Раньше это гасилось тем, что тот же клиент и засекал,
// и завершал ход. Теперь решение за сервером, поэтому и время меряем своё.
// Своё время сервер тут же и записывает обратно в startedAt (см. checkParty),
// иначе клиентский таймер показывал бы одно, а ход заканчивался по другому.
// ponytail: при рестарте сервера идущий ход получит свежий отсчёт заново.
const turnSeenAt = new Map<string, number>();
// То же для выбора слова, только ключ — сама комната: у choosing-word своего
// id нет, а одновременно комната выбирает только одно слово. Отпечаток ловит
// смену хода (игрок и набор слов меняются каждый раз).
const chooseSeenAt = new Map<string, { fp: string; at: number }>();
// Брошенное лобби: хост создал комнату и закрыл вкладку. Признак жизни — любое
// изменение комнаты: кто вошёл или вышел, правка параметров, переименование
// игрока или смена человечка (всё приходит тем же запросом).
const lobbySeen = new Map<string, { fp: string; at: number }>();
const LOBBY_IDLE_MS = 2 * 60 * 60 * 1000;

db.subscribeQuery(query, (resp) => {
  if (resp.type === "error") {
    console.error("subscribeQuery:", resp.error);
    // подписка мертва — сами не воскреснем, пусть перезапустит docker
    if (resp.isClosed) {
      // exit сразу оборвал бы отправку, поэтому ждём её (там свой таймаут)
      notify(
        `💀 scribble: подписка на InstantDB закрылась (${resp.error.message}), сервер перезапускается. Пока он лежит, ходы в играх не переключаются.`,
      ).finally(() => process.exit(1));
    }
    return;
  }
  activeParties = resp.data.party as ActiveParty[];
  notifyStarted();
  checkAll();
});

setInterval(checkAll, 1000);

function notifyStarted() {
  const started = activeParties.filter(
    (p) => p.status === GAME_STATUS.inProgress,
  );
  const active = new Set(started.map((p) => p.id));
  for (const partyId of startedParties) {
    if (!active.has(partyId)) startedParties.delete(partyId);
  }

  for (const party of started) {
    if (startedParties.has(party.id)) continue;
    startedParties.add(party.id);
    if (firstSnapshot) continue;

    notify(
      `🎮 Игра началась: ${party.name}\n` +
        `Игроков: ${party.staticPlayerIds.length}, кругов: ${party.gameParams.rounds}`,
    );
  }

  firstSnapshot = false;
}

function checkAll() {
  for (const party of activeParties) {
    // кривая запись в одной комнате не должна ронять таймеры всех остальных
    try {
      if (party.status === GAME_STATUS.prepare) checkIdleLobby(party);
      else checkParty(party);
    } catch (err) {
      console.error("checkParty:", party.id, err);
    }
  }

  forgetGoneParties();
}

// Комната ушла из запроса (началась игра, финал, закрыли) — её записи в
// памяти больше не нужны. Без этой уборки мапы росли до рестарта.
function forgetGoneParties() {
  const active = new Set(activeParties.map((p) => p.id));
  for (const partyId of chooseSeenAt.keys()) {
    if (!active.has(partyId)) chooseSeenAt.delete(partyId);
  }
  for (const partyId of lobbySeen.keys()) {
    if (!active.has(partyId)) lobbySeen.delete(partyId);
  }
}

function checkIdleLobby(party: ActiveParty) {
  const fp = JSON.stringify([party.gameParams, party.newPlayers]);
  const seen = lobbySeen.get(party.id);

  if (!seen || seen.fp !== fp) {
    lobbySeen.set(party.id, { fp, at: Date.now() });
    return;
  }
  if (Date.now() - seen.at < LOBBY_IDLE_MS) return;

  // забываем сразу: следующий тик заведёт отсчёт заново, так что повторной
  // записи не будет, а если транзакция не пройдёт — попробуем ещё через два часа
  lobbySeen.delete(party.id);
  console.log(`party ${party.id}: lobby closed by inactivity`);
  db.transact(
    db.tx.party[party.id]!.update({ status: GAME_STATUS.finished }),
  ).catch((err) => console.error("closeIdleLobby:", party.id, err));
}

function checkParty(party: ActiveParty) {
  const { gameState, gameParams, newPlayers } = party;
  if (gameState.state === "choosing-word") return checkChoosingWord(party);
  if (gameState.state !== "drawing") return;
  if (endedTurns.has(gameState.drawingId)) return;

  let seenAt = turnSeenAt.get(gameState.drawingId);
  if (seenAt === undefined) {
    seenAt = Date.now();
    turnSeenAt.set(gameState.drawingId, seenAt);
    // Клиенты рисуют таймер и открывают подсказки от startedAt, а его пишет
    // браузер рисующего своими часами — то есть не тем временем, по которому
    // ход реально закончится. Переписываем на своё: одна запись на ход, зато
    // отсчёт на экране совпадает с нашим, в том числе после рестарта сервера,
    // когда ход начинает отсчёт заново.
    db.transact(
      db.tx.party[party.id]!.merge({ gameState: { startedAt: seenAt } }),
    ).catch((err) => console.error("startedAt:", party.id, err));
  }

  // Считаем по живому составу комнаты, как и nextTurn в endTurn:
  // staticPlayerIds — снимок на старте игры, и после ухода игрока порог
  // становился недостижимым — ход дожигал таймер, хотя все уже отгадали.
  // В одиночной комнате отгадывать некому, такой ход живёт только по таймеру.
  const allGuessed =
    newPlayers.length > 1 &&
    Object.keys(gameState.guessed).length >= newPlayers.length - 1;
  const timedOut = Date.now() - seenAt >= (gameParams.drawTime ?? 60) * 1000;
  if (!allGuessed && !timedOut) return;

  endedTurns.add(gameState.drawingId);
  endTurn(party, !allGuessed).catch((err) => {
    endedTurns.delete(gameState.drawingId);
    console.error("endTurn:", party.id, err);
  });
}

// Единственный способ подвесить партию навсегда: игрок закрыл вкладку на
// выборе слова, и ход не начинался — значит и таймер хода не тикал. По
// истечении выбираем первое слово за него.
function checkChoosingWord(party: ActiveParty) {
  const { gameState } = party;
  if (gameState.state !== "choosing-word") return;

  const fp = JSON.stringify([gameState.playerId, gameState.words]);
  let seen = chooseSeenAt.get(party.id);

  if (!seen || seen.fp !== fp) {
    seen = { fp, at: Date.now() };
    chooseSeenAt.set(party.id, seen);
    // клиент рисует обратный отсчёт от startedAt, а истечёт он по нашим часам
    db.transact(
      db.tx.party[party.id]!.merge({ gameState: { startedAt: seen.at } }),
    ).catch((err) => console.error("choose startedAt:", party.id, err));
    return;
  }

  if (Date.now() - seen.at < chooseWordTime * 1000) return;

  // следующий тик увидит уже "drawing" и заведёт таймер хода; если запись не
  // пройдёт — отпечаток тот же, значит попробуем снова через минуту
  chooseSeenAt.delete(party.id);
  console.log(`party ${party.id}: word chosen by timeout`);
  selectWord(party, gameState.playerId, gameState.words[0]!).catch((err) =>
    console.error("selectWord:", party.id, err),
  );
}

// Двойник клиентского selectWord из src/db-things.ts: там браузерный db,
// здесь админский, поэтому транзакцию приходится держать в двух местах.
// Меняешь одну — меняй вторую.
async function selectWord(party: ActiveParty, playerId: string, word: string) {
  if (!word) return;

  const drawingId = id();
  const selected: Omit<NewWord, "id"> = {
    type: "new-selected-word",
    payload: { playerId, word },
  };

  await db.transact([
    db.tx.roomEvent[id()]!.create(selected).link({ party: party.id }),
    db.tx.paintings[drawingId]!.create({
      canvas: [],
      playerId,
      word,
    }).link({ party: party.id }),
    db.tx.party[party.id]!.update({
      gameState: {
        state: "drawing",
        playerId,
        word,
        allClues: generateClues(word, party.gameParams.drawTime),
        drawingId,
        guessed: {},
        startedAt: Date.now(),
      },
    }),
  ]);
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

  const next = nextTurn(
    newPlayers.map((p) => p.id),
    gameState.playerId,
    gameProgress.length,
    gameParams.rounds,
  );
  if (next?.newRound) gameProgress.push([]);

  if (!next) {
    const finished: Omit<GameFinishedEvent, "id"> = {
      type: "game-finished",
      payload: { reason: "no-more-rounds" },
    };
    console.log(`party ${party.id}: game finished`);
    notify(
      `🏁 Игра закончена: ${party.name}\n` +
        `Кругов сыграно: ${gameProgress.length}\n` +
        `Счёт: ${scoreLine(gameProgress, newPlayers)}`,
    );
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
      nextPlayerId: next.playerId,
    },
  };
  console.log(
    `party ${party.id}: turn ended (${ended.payload.reason}), next ${next.playerId}`,
  );
  await db.transact([
    db.tx.party[party.id]!.update({
      gameState: {
        state: "choosing-word",
        playerId: next.playerId,
        words: newRandomWords(gameParams.wordSuggestions ?? 3),
      },
      gameProgress,
    }),
    db.tx.roomEvent[id()]!.create(ended).link({ party: party.id }),
  ]);
}

function scoreLine(
  gameProgress: GameProgress,
  players: ActiveParty["newPlayers"],
) {
  const totals = calculateTotalScores(gameProgress);
  const byScore = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  if (byScore.length === 0) return "никто ничего не отгадал";

  return byScore
    .map(([playerId, points]) => {
      const player = players.find((p) => p.id === playerId);
      return `${player?.name ?? playerId.slice(0, 8)} ${points}`;
    })
    .join(", ");
}

console.log("scribble server: watching in-progress parties");
notify("▲ scribble: сервер запустился");
