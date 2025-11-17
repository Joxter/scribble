import { db } from "../DB.ts";
import { combine, createEvent, createStore, sample } from "effector";
import {
  GAME_STATUS,
  UserMessageEvent,
  Party,
  NewWord,
  DrawingEndedEvent,
} from "../types.ts";
import {
  calcRevealed,
  compareWords,
  liveQuery,
  newRandomWords,
} from "../utils.ts";
import { $localId } from "./game.model.ts";
import { newParty } from "./utils.ts";
import { i, id } from "@instantdb/core";
import { createCurrentLine } from "./drawing.model.ts";

export const $renderMode = createStore<"normal" | "polyline" | "tldraw">(
  "tldraw",
);

export async function getMyParty() {
  const localId = await db.getLocalId("guest");

  const { players } = await db
    .queryOnce({
      players: {
        $: { where: { id: localId } },
        parties: { $: { where: { status: "prepare" } } },
      },
    })
    .then((it) => it.data);

  return players[0]?.parties?.[0] || null;
}

export const newPartyLoaded = createEvent<Party>();

export const $newParty = createStore<Party>(newParty());
$newParty.on(newPartyLoaded, (_, party) => party);

export const $allChatEvents = createStore<Party["roomEvents"]>([]);
$allChatEvents.on(newPartyLoaded, (_, party) => party.roomEvents);

export const messageSent = createEvent<{ guess: string }>();
export const newWordSelected = createEvent<string>();

export const log = createEvent<any>();
export const $logi = createStore<any[]>([]);
$logi.on(log, (s, l) => [...s, l]);
export const $logiSmol = $logi.map((logs) => {
  if (logs.length === 0) return [];

  const merged: string[] = [];
  let currentLog: any = null;
  let count = 0;

  for (const log of logs) {
    if (typeof log === "string" && log === currentLog) {
      count++;
    } else {
      if (currentLog !== null) {
        merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
      }
      currentLog = log;
      count = 1;
    }
  }

  // Don't forget the last entry
  if (currentLog !== null) {
    merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
  }

  return merged;
});

export const $drawing = combine($localId, $newParty, (loadId, p) => {
  if (
    p.status === GAME_STATUS.inProgress &&
    p.gameState.innerState.state === "drawing"
  ) {
    const s = p.gameState.innerState;

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

export const $currentPlayers = $newParty.map((p) => {
  return Object.fromEntries(p.players.map((it) => [it.id, it]));
});

export const $guessed = $newParty.map((p) => {
  return p.gameState.innerState.state === "drawing"
    ? p.gameState.innerState.guessed
    : {};
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
  $svgCanvasPaths,
  $currentDrawing,
  $polylinePaths,
} = createCurrentLine();

export const $choosingWord = combine($localId, $newParty, (localId, p) => {
  if (p.status !== GAME_STATUS.inProgress) return { choose: false };

  if (p.gameState.innerState.state === "choosing-word") {
    if (localId === p.gameState.innerState.playerId) {
      return {
        choose: true,
        iam: true,
        who: p.gameState.innerState.playerId,
        words: p.gameState.innerState.words,
      };
    }
    return {
      choose: true,
      iam: false,
      who: p.gameState.innerState.playerId,
      words: [],
    };
  }

  return { choose: false };
});

liveQuery($newParty, (party) => {
  if (!party.id) return () => [];

  log(`join.. ${party.id}`);
  const room = db.joinRoom("party", party.id);
  log(`joined`);

  const uns = $currentDrawing.watch((currentDrawing) => {
    if ($imDrawing.getState()) {
      log(`publishTopic`);
      console.log("publishTopic");
      room.publishTopic("currentCanvas", { currentDrawing });
    }
  });

  const unsubscribeTopic = room.subscribeTopic("currentCanvas", (ev) => {
    // console.log("currentCanvas", ev);
    log(`currentCanvas`);
    if (!$imDrawing.getState()) {
      console.log("somebodyDrawing", ev.currentDrawing);
      somebodyDrawing(ev.currentDrawing);
    }
  });

  return () => {
    uns();
    unsubscribeTopic();
    room.leaveRoom();
  };
});

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  return db.subscribeQuery(
    {
      party: {
        $: {
          where: {
            or: [
              {
                and: [
                  { status: GAME_STATUS.prepare },
                  { "players.id": localId },
                ],
              },
              {
                and: [
                  { status: GAME_STATUS.inProgress },
                  { "players.id": localId },
                ],
              },
            ],
          },
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
  const event: Omit<NewWord, "id"> = {
    type: "new-selected-word",
    payload: { playerId: localId, word },
  };

  const drawingId = id();

  db.transact([
    db.tx.roomEvent[id()]
      //
      .create(event)
      .link({ party: party.id }),
    db.tx.paintings[drawingId].create({
      canvas: [],
      playerId: localId,
      word,
    }),
    db.tx.party[party.id].update({
      gameState: {
        ...party.gameState,
        innerState: {
          state: "drawing",
          playerId: localId,
          word: word,
          drawingId: drawingId,
        },
      },
    }),
  ]);
});

// when every guessed
combine($guessed, $newParty, $isServer).watch(([guessed, party, isServer]) => {
  const { players, gameState } = party;
  if (isServer && gameState.innerState.state === "drawing") {
    if (Object.keys(guessed).length === players.length - 1) {
      const artist = gameState.innerState.playerId;
      const nextPlayerI = players.findIndex((p) => p.id === artist) + 1;
      const nextPlayerId = players[nextPlayerI]
        ? players[nextPlayerI].id
        : players[0].id;

      const event: Omit<DrawingEndedEvent, "id"> = {
        type: "drawing-ended",
        payload: {
          reason: "all-revealed",
          revealed: gameState.innerState.guessed,
          nextPlayerId: nextPlayerId,
        },
      };

      db.transact([
        db.tx.party[party.id].update({
          status: GAME_STATUS.inProgress,
          gameState: {
            players: players,
            innerState: {
              state: "choosing-word",
              playerId: nextPlayerId,
              words: newRandomWords(3),
            },
          },
        }),
        db.tx.roomEvent[id()].create(event).link({ party: party.id }),
      ]);
    }
  }
});

sample({
  source: [$localId, $newParty] as const,
  clock: messageSent,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], { guess }]) => {
  const gameState = party.gameState.innerState;
  const secretWord = gameState.state === "drawing" ? gameState.word : null;
  const isRevealed = secretWord ? calcRevealed(secretWord, guess) : "none";

  const event: Omit<UserMessageEvent, "id"> = {
    type: "user-message",
    payload: {
      text: guess,
      playerId: localId,
      isRevealed,
    },
  };

  db.transact([
    db.tx.roomEvent[id()].create(event).link({ party: party.id }),
    ...(isRevealed === "revealed"
      ? [
          db.tx.party[party.id].merge({
            gameState: {
              innerState: { guessed: { [localId]: Date.now() } },
            },
          }),
        ]
      : []),
  ]);
});
