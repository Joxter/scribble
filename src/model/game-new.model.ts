import { db } from "../DB.ts";
import { combine, createEvent, createStore, restore, sample } from "effector";
import {
  GAME_STATUS,
  Party,
  AllChatMessages,
  GameStateDrawing,
  GameProgress,
  Player,
} from "../types.ts";
import { calcRevealed, liveQuery } from "../utils.ts";
import { getPlayer, mergeLogi, newParty } from "./utils.ts";
import { createCurrentLine } from "./drawing.model.ts";
import {
  selectWord,
  transitionToNextPlayer,
  sendMessage,
  saveCanvas,
  firstLoadForCanvas,
  gameFinished,
} from "../db-things.ts";

db.getLocalId("guest").then((a) => setLocalId(a));
getPlayer();

const setLocalId = createEvent<string>();
export const $localId = restore(setLocalId, "");
$localId.watch((v) => console.log("$localId", v));

const setPlayer = createEvent<Player>();
export const $player = restore(setPlayer, {
  id: "",
  localId: "",
  name: "",
  avatar: "",
});

export const newPartyLoaded = createEvent<Party>();

export const $newParty = createStore<Party>(newParty());
$newParty.on(newPartyLoaded, (_, party) => party);

export const $allChatEvents = createStore<AllChatMessages[]>([]);
$allChatEvents.on(newPartyLoaded, (_, party) => party.roomEvents);

export const messageSent = createEvent<{ guess: string }>();
export const newWordSelected = createEvent<string>();

export const log = createEvent<any>();
export const $logi = createStore<any[]>([]);
$logi.on(log, (s, l) => [...s, l]);
export const $logiSmol = $logi.map(mergeLogi);

export const $drawing = combine($localId, $newParty, (loadId, p) => {
  if (p.status === GAME_STATUS.inProgress && p.gameState.state === "drawing") {
    const s = p.gameState;

    return {
      drawing: true,
      iam: loadId === s.playerId,
      who: s.playerId,
      word: s.word,
    };
  }

  return { drawing: false };
});

const $roomId = $newParty.map((p) => {
  return p.id;
});

export const $clue = createStore<string | null>(null);

export const $currentPlayers = $newParty.map((p) => {
  return Object.fromEntries(p.players.map((it) => [it.id, it]));
});

export const $partyPaintingIds = $newParty.map((p) => {
  return p.gameProgress.flatMap((round) =>
    round.flatMap((res) => res.paintingId),
  );
});

export const $guessed = $newParty.map((p) => {
  return p.gameState.state === "drawing" ? p.gameState.guessed : {};
});

const $imDrawing = $drawing.map((t) => {
  return t.drawing && t.iam;
});

export const $isServer = $imDrawing;

export const {
  lineParamsChanged,
  $currentLineParams,
  lineStarted,
  lineExtended,
  somebodyDrawing,
  undoClicked,
  saveCanvasToPaining,
  $svgCanvasPaths,
  $currentDrawing,
  initLoad,
  newRound,
  $polylinePaths,
} = createCurrentLine();

export const $currentDrawingId = $newParty.map((p) => {
  if (p.gameState.state === "drawing") {
    return p.gameState.drawingId;
  } else {
    return null;
  }
});

sample({
  clock: $currentDrawingId,
  target: newRound,
});

export const $choosingWord = combine($localId, $newParty, (localId, p) => {
  if (p.status !== GAME_STATUS.inProgress) return { choose: false };

  if (p.gameState.state === "choosing-word") {
    if (localId === p.gameState.playerId) {
      return {
        choose: true,
        iam: true,
        who: p.gameState.playerId,
        words: p.gameState.words,
      };
    }
    return {
      choose: true,
      iam: false,
      who: p.gameState.playerId,
      words: [],
    };
  }

  return { choose: false };
});

liveQuery($newParty, (party) => {
  if (!party.id) return () => [];

  log(`joinRoom ${party.id}`);
  const room = db.joinRoom("party", party.id);
  log(`joined`);

  const uns = $currentDrawing.watch((currentDrawing) => {
    if ($imDrawing.getState()) {
      log(`publishTopic`);
      room.publishTopic("currentCanvas", { currentDrawing });
    }
  });

  const unsubscribeTopic = room.subscribeTopic("currentCanvas", (ev) => {
    log(`currentCanvas`);
    if (!$imDrawing.getState()) {
      somebodyDrawing(ev.currentDrawing);
    }
  });

  return () => {
    log(`unsubscribe`);
    uns();
    unsubscribeTopic();
    room.leaveRoom();
  };
});

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  firstLoadForCanvas(localId);

  return db.subscribeQuery(
    {
      party: {
        $: {
          where: { "players.id": localId },
          order: {
            serverCreatedAt: "desc",
          },
          limit: 1,
        },
        players: {},
        roomEvents: {},
      },
    },
    (resp) => {
      if (resp.data) {
        const party = resp.data.party?.[0];

        if (party) {
          newPartyLoaded(party as Party);
          console.log(party.gameState);
          return;
        }
      }
      console.warn("Something went wrong");
      console.log(resp);
    },
  );
});

sample({
  source: [$localId, $newParty] as const,
  clock: newWordSelected,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], word]) => {
  selectWord(localId, party.id, word);
});

// when every guessed
combine($guessed, $newParty, $isServer).watch(([guessed, party, isServer]) => {
  const { players, staticPlayerIds, gameState, gameProgress, gameParams } =
    party;

  if (isServer && gameState.state === "drawing") {
    // ВСЕ УГАДАЛИ

    if (Object.keys(guessed).length === staticPlayerIds.length - 1) {
      const artist = gameState.playerId;
      const nextPlayerI = players.findIndex((p) => p.id === artist) + 1;

      if (gameProgress.length === 0) {
        gameProgress.push([]);
      }

      gameProgress.at(-1)!.push({
        paintingId: gameState.drawingId,
        whoDrawId: gameState.playerId,
        scores: gameState.guessed,
      });

      if (players[nextPlayerI]) {
        // продолжается текущий круг
        nextPlayerChoosingWord(
          players[nextPlayerI].id,
          gameState,
          party.id,
          gameProgress,
        );
      } else {
        // начинаем следующий круг

        gameProgress.push([]);
        log(
          `gameProgress.length < gameParams.rounds (${gameProgress.length}, ${gameParams.rounds})`,
        );
        if (gameProgress.length < gameParams.rounds) {
          log(`nextPlayerChoosingWord: ${players[0].id}`);
          // если ещё есть место для раундов
          nextPlayerChoosingWord(
            players[0].id,
            gameState,
            party.id,
            gameProgress,
          );
        } else {
          log("game finished!");
          gameFinished(party.id, gameProgress);
        }
      }
    }
  }
});

function nextPlayerChoosingWord(
  nextPlayerId: string,
  gameState: GameStateDrawing,
  partyId: string,
  newGameProgress: GameProgress,
) {
  transitionToNextPlayer(nextPlayerId, gameState, partyId, newGameProgress);
}

sample({
  source: [$localId, $newParty] as const,
  clock: messageSent,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], { guess }]) => {
  const gameState = party.gameState;
  const secretWord = gameState.state === "drawing" ? gameState.word : null;
  const isRevealed = secretWord ? calcRevealed(secretWord, guess) : "none";

  sendMessage(localId, party.id, guess, isRevealed);
});

// сохранить рисунок в базу
const a = sample({
  source: [$currentDrawing, $newParty] as const,
  clock: saveCanvasToPaining,
});
a.watch(([canvas, { gameState }]) => {
  log("canvas");
  if (gameState.state === "drawing") {
    saveCanvas(gameState.drawingId, canvas);
  }
});

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  return db.subscribeQuery(
    { players: { $: { where: { id: localId } } } },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data) {
        const player = resp.data.players[0];
        setPlayer(player);
      }
    },
  );
});
