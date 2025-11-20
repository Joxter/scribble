import { db } from "../DB.ts";
import { combine, createEvent, createStore, sample } from "effector";
import {
  GAME_STATUS,
  UserMessageEvent,
  Party,
  DrawingEndedEvent,
  AllChatMessages,
} from "../types.ts";
import { calcRevealed, liveQuery, newRandomWords } from "../utils.ts";
import { $localId } from "./game.model.ts";
import { newParty } from "./utils.ts";
import { id } from "@instantdb/core";
import { createCurrentLine } from "./drawing.model.ts";

export const $renderMode = createStore<"normal" | "polyline" | "tldraw">(
  "tldraw",
);

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

export const $currentPlayers = $newParty.map((p) => {
  return Object.fromEntries(p.players.map((it) => [it.id, it]));
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
  $smoothConf,
  setSmoothConf,
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
  const drawingId = id();

  db.transact([
    db.tx.roomEvent[id()]
      .create({
        type: "new-selected-word",
        payload: { playerId: localId, word },
      })
      .link({ party: party.id }),
    db.tx.paintings[drawingId].create({
      canvas: [],
      playerId: localId,
      word,
    }),
    db.tx.party[party.id].update({
      gameState: {
        state: "drawing",
        playerId: localId,
        word: word,
        drawingId: drawingId,
        guessed: {},
      },
    }),
  ]);
});

// when every guessed
combine($guessed, $newParty, $isServer).watch(([guessed, party, isServer]) => {
  const { players, gameState } = party;
  if (isServer && gameState.state === "drawing") {
    if (Object.keys(guessed).length === players.length - 1) {
      const artist = gameState.playerId;
      const nextPlayerI = players.findIndex((p) => p.id === artist) + 1;
      const nextPlayerId = players[nextPlayerI]
        ? players[nextPlayerI].id
        : players[0].id;

      const event: Omit<DrawingEndedEvent, "id"> = {
        type: "drawing-ended",
        payload: {
          reason: "all-revealed",
          revealed: gameState.guessed,
          nextPlayerId: nextPlayerId,
        },
      };

      db.transact([
        db.tx.party[party.id].update({
          status: GAME_STATUS.inProgress,
          staticPlayerIds: players.map((p) => p.id),
          gameState: {
            state: "choosing-word",
            playerId: nextPlayerId,
            words: newRandomWords(3),
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
  const gameState = party.gameState;
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
              guessed: { [localId]: Date.now() },
            },
          }),
        ]
      : []),
  ]);
});

const a = sample({
  source: [$currentDrawing, $newParty] as const,
  clock: saveCanvasToPaining,
});
a.watch(([canvas, { gameState }]) => {
  log("canvas");
  if (gameState.state === "drawing") {
    db.transact(
      db.tx.paintings[gameState.drawingId].update({
        canvas: canvas,
      }),
    );
  }
});

function firstLoadForCanvas(localId: string) {
  db.queryOnce({
    party: {
      $: {
        where: {
          or: [
            {
              and: [{ status: GAME_STATUS.prepare }, { "players.id": localId }],
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
    },
  }).then(({ data }) => {
    const innerState = data.party?.[0].gameState;

    if (innerState?.state === "drawing") {
      innerState.drawingId;

      db.queryOnce({
        paintings: {
          $: { where: { id: innerState.drawingId } },
        },
      }).then(({ data }) => {
        if (data.paintings[0]) {
          initLoad(data.paintings[0].canvas);
        }
      });
    }
  });
}
