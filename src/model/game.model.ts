import {
  combine,
  createEvent,
  createStore,
  restore,
  sample,
  Store,
} from "effector";
import {
  CanvasAndChatHistory,
  Party,
  CurrentLine,
  Player,
  GuessEvent,
  NewWord,
  ChoosingWord,
  LineEvent,
} from "../types.ts";
import getStroke from "perfect-freehand";
import {
  delay,
  eventsToGameState,
  getSvgPathFromStroke,
  isRevealed,
  liveQuery,
  optimizeLine,
  randomFrom,
  URL_ROOM_NAME,
} from "../utils.ts";
import { smoothConf } from "../config.ts";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";
import { getUsername } from "../code-worlds.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";
import { $words } from "./words.model.ts";

const setLocalId = createEvent<string>();
export const $localId = restore(setLocalId, "");

db.getLocalId("guest").then((a) => setLocalId(a));
getPlayer();

const setParty = createEvent<Party>();
export const $party = restore(setParty, {
  gameState: { drawing: "" },
  name: "",
  id: "",
});

const setRoomId = createEvent<string>();
export const $roomId = restore(setRoomId, URL_ROOM_NAME);

const setPlayer = createEvent<Player>();
export const $player = restore(setPlayer, {
  id: "",
  localId: "",
  name: "",
  avatar: "",
});

export const $allRoomEvents = createStore<CanvasAndChatHistory[]>([]);
export const $allChatEvents = $allRoomEvents.map((events) => {
  return (
    events
      //
      .filter(
        (it) =>
          it.type === "guess" ||
          it.type === "new-word" ||
          it.type === "choosing-word",
      )
  );
});

export const $compiledGameStateAndPaints = combine($allRoomEvents, (events) => {
  return eventsToGameState(
    events,
    ["foo"],
    { lang: "RU", rounds: 1000, suggestions: 3, canvasSize: 600 },
    "foo|bar|baz",
  );
});

export const $imDrawing = combine(
  $compiledGameStateAndPaints,
  $localId,
  ([{ state }], localId) => {
    return state.state === "drawing" && state.playerId === localId
      ? state.word
      : "";
  },
);

export const $iRevealed = combine(
  $compiledGameStateAndPaints,
  $localId,
  ([{ state }], localId) => {
    return state.state === "drawing" &&
      state.revealed.find((it) => it.playerId === localId)
      ? state.word
      : "";
  },
);

export const $clue = combine(
  $compiledGameStateAndPaints,
  $localId,
  ([{ state }], localId) => {
    if (state.state === "drawing") {
      return state.word.replace(/\S/g, "_");
    }

    return null;
  },
);

export const $imChoosingWord = combine(
  $compiledGameStateAndPaints,
  $localId,
  ([{ state }], localId) => {
    if (state.state === "choosing-word") {
      return state.words.split("|");
    }

    return null;
  },
);

// todo USE IT for EverybodyRevealed and other stuf
export const $imServer = $imDrawing;

export const { currentLineChanged, $currentLine, addLine } = createCurrentLine(
  $roomId,
  $imDrawing,
);

export const $renderMode = createStore<"normal" | "polyline" | "tldraw">(
  "tldraw",
);
export const $debugMode = createStore(false);

export const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
export const $smoothConf = restore(setSmoothConf, smoothConf);

export const renderModeChanged = createEvent<
  "normal" | "polyline" | "tldraw"
>();
export const debugModeToggled = createEvent<boolean>();
export const makeWeDraw = createEvent<any>();
export const noDraw = createEvent<any>();
export const chooseWordClicked = createEvent<any>();
export const newWordSelected = createEvent<string>();

export const undoClicked = createEvent<any>();
export const guessSubmitted = createEvent<{ guess: string }>();
export const clearCanvasClicked = createEvent<any>();
export const addBucket = createEvent<{
  x: number;
  y: number;
  color: string;
}>();

export const historyUpdated = createEvent<{
  history: CanvasAndChatHistory[];
}>();

sample({
  source: [$localId, $party] as const,
  clock: makeWeDraw,
  fn: ([id, party]) => {
    return {
      ...party,
      gameState: {
        ...party.gameState,
        drawing: id,
      },
    };
  },
  target: $party,
});

$allRoomEvents.on(historyUpdated, (_, { history }) => history);

$renderMode.on(renderModeChanged, (_, mode) => mode);
$debugMode.on(debugModeToggled, (_, enabled) => enabled);

function findLastEvent(
  arr: CanvasAndChatHistory[],
  cb: (it: CanvasAndChatHistory) => boolean | undefined,
): CanvasAndChatHistory | null {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return null;
}

function findLastEventIndex(
  arr: CanvasAndChatHistory[],
  cb: (it: CanvasAndChatHistory) => boolean | undefined,
): { i: number } | null {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return { i };
    }
  }
  return null;
}

const $canvasLines = $allRoomEvents.map((events) => {
  const last = findLastEventIndex(events, (it) => it.type === "new-word");
  if (!last) return [];

  const lines: LineEvent[] = [];

  events.slice(last.i).forEach((it) => {
    if (it.type === "line") {
      lines.push(it);
    } else if (it.type === "undo") {
      lines.pop();
    }
  });

  return lines;
});

export const $svgCanvasPaths = combine(
  $canvasLines,
  $renderMode,
  $smoothConf,
  (lines, renderMode, currentSmoothConf) => {
    const paths: { d: string; color: string }[] = [];

    lines.forEach((it) => {
      const aaa = svgInk(
        optimizeLine(it.dots).map((it) => new Vec(it[0], it[1])),
        { size: it.width },
      );

      const bbb = getSvgPathFromStroke(
        getStroke(optimizeLine(it.dots), {
          ...currentSmoothConf,
          size: it.width,
        }),
      );

      paths.push({
        d: renderMode === "tldraw" ? aaa : bbb,
        color: it.color,
      });
    });

    return paths;
  },
);

export const $svgCurrentLine = combine(
  $currentLine,
  $renderMode,
  $smoothConf,
  (currentLine, renderMode, currentSmoothConf) => {
    if (currentLine.dots.length === 0) return null;

    const aaa = svgInk(
      optimizeLine(currentLine.dots).map((it) => new Vec(it[0], it[1])),
      { size: currentLine.width },
    );

    const bbb = getSvgPathFromStroke(
      getStroke(optimizeLine(currentLine.dots), {
        ...currentSmoothConf,
        size: currentLine.width,
      }),
    );

    return {
      d: renderMode === "tldraw" ? aaa : bbb,
      color: currentLine.color,
    };
  },
);

export const $rawPath = $canvasLines;

export const $polylinePaths = combine($canvasLines, (lines) => {
  const polylines: Array<{
    points: string;
    color: string;
    strokeWidth: number;
  }> = [];

  lines.forEach((it, i) => {
    const optimizedDots = optimizeLine(it.dots);
    const points = optimizedDots.map(([x, y]) => `${x},${y}`).join(" ");
    polylines.push({
      points,
      color: it.color,
      strokeWidth: it.width,
    });
  });

  return polylines;
});

liveQuery($roomId, (roomId) => {
  if (!roomId) return () => {};

  return db.subscribeQuery(
    { party: { $: { where: { id: roomId } }, players2: {} } },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data?.party[0]) {
        setParty(resp.data.party[0] as Party);
      } else {
        console.error(`No room with "${roomId}" id`);
      }
    },
  );
});

liveQuery($roomId, (roomId) => {
  if (!roomId) return () => {};

  return db.subscribeQuery(
    {
      roomEvent: {
        $: { where: { party: roomId }, order: { serverCreatedAt: "asc" } },
      },
    },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data) {
        console.log(resp.data.roomEvent);
        historyUpdated({ history: resp.data.roomEvent.map((a) => a.it) });
      }
    },
  );
});

undoClicked.watch(() => {
  db.transact(
    db.tx.roomEvent[id()]
      .create({ it: { type: "undo" } })
      .link({ party: $roomId.getState() }),
  );
});

sample({
  source: [$localId, $roomId, $compiledGameStateAndPaints] as const,
  clock: guessSubmitted,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, roomId, [gameState]], { guess }]) => {
  const event: Omit<GuessEvent, "id"> = {
    type: "guess",
    text: guess,
    player: localId,
    // @ts-ignore
    isRevealed: isRevealed(gameState.state.word, guess),
  };

  db.transact(
    db.tx.roomEvent[id()].create({ it: event }).link({ party: roomId }),
  );
});

sample({
  source: [$localId, $roomId, $words] as const,
  clock: chooseWordClicked,
}).watch(([localId, roomId, words]) => {
  const event: Omit<ChoosingWord, "id"> = {
    type: "choosing-word",
    playerId: localId,
    words: [
      randomFrom(words).word,
      randomFrom(words).word,
      randomFrom(words).word,
      randomFrom(words).word,
      randomFrom(words).word,
    ].join("|"),
  };

  db.transact(
    db.tx.roomEvent[id()].create({ it: event }).link({ party: roomId }),
  );
});

// sample({
//   source: [$imServer, $roomId, $words, $localId] as const,
//   clock: $compiledGameStateAndPaints,
//   fn: (a, b) => [a, b] as const,
// }).watch(([[imServer, roomId, words, localId], [gameState]]) => {
//   if (imServer && gameState.state.state === "drawing") {
//     if (gameState.state.revealed.length >= gameState.playerIds.length) {
//       const myId = gameState.playerIds.findIndex((it) => it === localId);
//       const nextInd = gameState.playerIds[myId + 1] ? myId + 1 : 0;
//       const nextPlayerId = gameState.playerIds[nextInd];
//
//       const event: Omit<ChoosingWord, "id"> = {
//         type: "choosing-word",
//         playerId: nextPlayerId,
//         words: [
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//         ].join("|"),
//       };
//
//       db.transact(
//         db.tx.roomEvent[id()].create({ it: event }).link({ party: roomId }),
//       );
//     }
//   }
// });

sample({
  source: [$localId, $roomId] as const,
  clock: newWordSelected,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, roomId], word]) => {
  const event: Omit<NewWord, "id"> = {
    type: "new-word",
    playerId: localId,
    word,
    // todo create paint add `paintId` here
  };

  db.transact(
    db.tx.roomEvent[id()].create({ it: event }).link({ party: roomId }),
  );
});

clearCanvasClicked.watch(async () => {
  const { roomEvent } = await db
    .queryOnce({ roomEvent: { $: { where: { party: $roomId.getState() } } } })
    .then((it) => it.data);

  console.log("DELETE");
  console.log(roomEvent);

  if (roomEvent.length > 0) {
    db.transact(roomEvent.map((event) => db.tx.roomEvent[event.id].delete()));
  }
});

sample({ source: $party, clock: makeWeDraw }).watch((party) => {
  db.transact(
    db.tx.party[party.id].update({
      gameState: {
        ...party.gameState,
        drawing: party.gameState.drawing,
      },
    }),
  );
});

sample({ source: $party, clock: noDraw }).watch((party) => {
  db.transact(
    db.tx.party[party.id].update({
      gameState: {
        ...party.gameState,
        drawing: "",
      },
    }),
  );
});

export async function createNewParty(name: string) {
  const partyId = id();

  await db.transact([
    db.tx.party[partyId].create({
      name,
      players: [],
      gameState: { drawing: "" },
    }),
    db.tx.curretLine[partyId]
      .create({
        dots: [],
        width: 8,
        color: "#34495e",
      })
      .link({ party: partyId }),
  ]);
}

export async function editPlayerName(name: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([
    db.tx.players[localId].update({ name, localId, avatar: "" }),
  ]);
}

export async function joinParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([db.tx.players[localId].link({ parties: partyId })]);
}

export async function leaveParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([
    db.tx.players[localId].unlink({ parties: partyId }),
  ]);
}

export async function getPlayer(limit = 3) {
  if (limit < 0) throw new Error(`Can't get user`);

  const localId = await db.getLocalId("guest");

  const player = await db
    .queryOnce({ players: { $: { where: { id: localId } } } })
    .then((it) => it.data.players[0]);

  if (player) return player;

  const randomName = getUsername();
  await editPlayerName(randomName);

  return getPlayer(limit - 1);
}

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

export async function deleteAllPartiesAndLines() {
  let allParties = await db
    .queryOnce({ party: {} })
    .then((it) => it.data.party);
  console.log(`allParties.len`, allParties.length);

  let currentLines = await db
    .queryOnce({ curretLine: {} })
    .then((it) => it.data.curretLine);
  console.log(`curretLines.len`, currentLines.length);

  return db.transact([
    ...allParties.map((it) => db.tx.party[it.id].delete()),
    ...currentLines.map((it) => db.tx.curretLine[it.id].delete()),
  ]);
}

export async function resetDEMO() {
  throw new Error("Not implemented");
  console.log("------- RESET All -------");

  return deleteAllPartiesAndLines()
    .then(() => {
      console.log(`DELETED`);
      return db.transact([
        db.tx.party[$roomId.getState()].create({
          name: "Алиска",
          players: [],
          gameState: { drawing: "" },
        }),
      ]);
    })
    .then(() => {
      console.log(`Created party`, $roomId.getState());
      return db.transact([
        db.tx.curretLine[id()]
          .create({
            dots: [],
            width: 8,
            color: "#34495e",
          })
          .link({ party: "DEMO_ID" }),
      ]);
    })
    .then(() => {
      console.log("OK, will reload in 3 sec");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
}

function createCurrentLine(
  $roomId: Store<string>,
  $imDrawing: Store<unknown | false>,
) {
  const $currentLineID = createStore("");

  const $currentLine = createStore<CurrentLine>({
    dots: [],
    color: "#34495e",
    width: 8,
  });

  const currentLineChanged = createEvent<Partial<CurrentLine>>();
  const setCurrentLineID = createEvent<string>();
  const addLine = createEvent<CurrentLine>();

  $currentLineID.on(setCurrentLineID, (_, id) => id);

  $currentLine
    .on(currentLineChanged, (s, v) => {
      return { ...s, ...v };
    })
    .on(addLine, (s) => {
      return { ...s, dots: [] };
    });

  // let promiseLine = promiseInLine();

  let loading = false;
  combine([$currentLine, $imDrawing, $currentLineID]).watch(
    ([currentLine, imDrawing, lineId]) => {
      if (imDrawing && lineId) {
        if (loading) {
          return;
        }

        loading = true;
        db.transact(
          db.tx.curretLine[lineId].update({
            width: currentLine.width,
            dots: currentLine.dots,
            color: currentLine.color,
          }),
        )
          // .then(() => {
          //   return delay(1000);
          // })
          .finally(() => {
            loading = false;
          });
      }
    },
  );

  liveQuery($roomId, (roomId) => {
    if (!roomId) return () => {};

    return db.subscribeQuery(
      { party: { $: { where: { id: roomId } }, currentLine: {} } },
      (resp) => {
        if (resp.error) console.error(resp.error);
        if (resp.data) {
          const party = resp.data.party[0];
          if (party?.currentLine) {
            setCurrentLineID(party.currentLine.id);
            if (!$imDrawing.getState()) {
              currentLineChanged(party.currentLine);
            }
          }
        }
      },
    );
  });

  addLine.watch((newLine) => {
    db.transact(
      db.tx.roomEvent[id()]
        .create({
          it: {
            type: "line",
            dots: newLine.dots,
            color: newLine.color,
            width: newLine.width,
          },
        })
        .link({ party: $roomId.getState() }),
    );
  });

  return { $currentLine, currentLineChanged, addLine };
}
