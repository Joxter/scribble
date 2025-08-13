import { combine, createEvent, createStore, restore, sample } from "effector";
import { CanvasAndChatHistory, Party } from "./types";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, historyToLines, optimizeLine } from "./utils";
import { DEMO_ID, smoothConf } from "./config";
import { db } from "./DB";
import { id, lookup } from "@instantdb/core";
import { getUsername } from "./code-worlds";

type CurrentLine = {
  points: [x: number, y: number][];
  color: string;
  size: number;
  isBucket: boolean;
};

const setLocalId = createEvent<string>();
export const $localId = restore(setLocalId, "");
db.getLocalId("guest").then((a) => setLocalId(a));

const $currentLineID = createStore("");

const setParty = createEvent<Party>();
export const $party = restore(setParty, emptyParty());

export const $currentLine = createStore<CurrentLine>({
  points: [],
  color: "#000000",
  size: 8,
  isBucket: false,
});

// Add current user
combine([$localId, $party]).watch(([localId, party]) => {
  if (localId && party.name && party.players) {
    const ps = party.players.map((it) => it.id);

    if (!ps.includes(localId)) {
      db.transact(
        db.tx.party[DEMO_ID].update({
          ...party,
          players: [...party.players, { id: localId, name: getUsername() }],
        }),
      );
    }
  }
});

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);
export const $imDrawing = combine($party, $localId, (party, localId) => {
  return party.gameState.drawing === localId;
});
export const $artistName = $party.map((party) => {
  const drawingPlayer = party.players.find(
    (player) => player.id === party.gameState.drawing,
  );
  return drawingPlayer ? drawingPlayer.name : "";
});
export const $myName = combine($party, $localId, (party, localId) => {
  const myPlayer = party.players.find((player) => player.id === localId);
  return myPlayer ? myPlayer.name : "";
});

export const $renderMode = createStore<"normal" | "old">("normal");
export const $debugMode = createStore(false);

export const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
export const $smoothConf = restore(setSmoothConf, smoothConf);

export const currentLineChanged = createEvent<Partial<CurrentLine>>();
export const setCurrentLineID = createEvent<string>();
export const renderModeChanged = createEvent<"normal" | "old">();
export const debugModeToggled = createEvent<boolean>();
export const makeWeDraw = createEvent<any>();

export const undoClicked = createEvent<any>();
export const clearCanvasClicked = createEvent<any>();
export const addLine = createEvent<CurrentLine>();
export const addBucket = createEvent<{
  x: number;
  y: number;
  color: string;
}>();

// export const canvasAndChatHistoryLoaded = createEvent<{
//   history: CanvasAndChatHistory[];
//   word: string;
//   currentLine: CurrentLine;
// }>();

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

$currentCanvas.on(historyUpdated, (currentHistory, { history }) => {
  return history;
});

// $currentCanvas.watch((v) => {
//   console.log("$currentCanvas", v);
// });

$currentLineID.on(setCurrentLineID, (_, id) => id);

$currentLine
  // .on(canvasAndChatHistoryLoaded, (s, { currentLine }) => {
  //   return currentLine;
  // })
  .on(currentLineChanged, (s, v) => {
    return { ...s, ...v };
  })
  .on(addLine, (s) => {
    return { ...s, points: [] };
  });

$renderMode.on(renderModeChanged, (_, mode) => mode);
$debugMode.on(debugModeToggled, (_, enabled) => enabled);

export const $svgPaths = combine(
  $currentCanvas,
  $smoothConf,
  (lines, currentSmoothConf) => {
    const paths: { d: string; color: string }[] = [];

    lines.forEach((it, i) => {
      if (it.type === "line") {
        const stroke = getStroke(optimizeLine(it.dots), {
          ...currentSmoothConf,
          size: it.width,
        });

        paths.push({ d: getSvgPathFromStroke(stroke), color: it.color });
      } else if (it.type === "bucket") {
        // todo: calculate area by current "paths" and generate proper "d"
      } else if (it.type === "undo") {
        paths.pop();
      }
    });

    return paths;
  },
);

export const $rawPath = combine($currentCanvas, (lines) => {
  const rawLines: Array<[number, number, any][]> = [];

  lines.forEach((it, i) => {
    if (it.type === "line") {
      rawLines.push(optimizeLine(it.dots));
    } else if (it.type === "bucket") {
      // todo: calculate area by current "paths" and generate proper "d"
    } else if (it.type === "undo") {
      rawLines.pop();
    }
  });

  return rawLines;
});

db.subscribeQuery(
  {
    party: {
      $: { where: { id: DEMO_ID } },
      currentLine: {},
    },
  },
  (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) {
      const party = resp.data.party[0];

      if (party?.currentLine) {
        // console.log(party);
        setParty({
          name: party.name,
          players: party.players || [],
          gameState: party.gameState || {},
        });
        setCurrentLineID(party.currentLine.id);

        if ($imDrawing.getState()) {
          // currentLineChanged({
          // points: party.currentLine.dots,
          // size: party.currentLine.width,
          // color: party.currentLine.color,
          // });
        } else {
          currentLineChanged({
            points: party.currentLine.dots,
            size: party.currentLine.width,
            color: party.currentLine.color,
          });
        }
      } else {
        console.log("no party or currentLine", party);
      }
    }
  },
);

db.subscribeQuery(
  {
    roomEvent: {
      $: { where: { party: DEMO_ID }, order: { serverCreatedAt: "asc" } },
    },
  },
  (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) {
      // if (!$imDrawing.getState()) {
      historyUpdated({ history: resp.data.roomEvent.map((a) => a.it) });
      // }
    }
  },
);

combine([$currentLine, $imDrawing, $currentLineID]).watch(
  ([currentLine, imDrawing, lineId]) => {
    // console.log([lineId], currentLine);
    if (imDrawing && lineId) {
      // console.log("db.transact", currentLine);

      db.transact(
        db.tx.curretLine[lineId].update({
          width: currentLine.size,
          dots: currentLine.points,
          color: currentLine.color,
        }),
      );
    }
  },
);

addLine.watch((newLine) => {
  db.transact(
    db.tx.roomEvent[id()]
      .create({
        it: {
          type: "line",
          dots: newLine.points,
          color: newLine.color,
          width: newLine.size,
        },
        // timestamp: new Date(),
      })
      .link({ party: DEMO_ID }),
  );
});

undoClicked.watch(() => {
  db.transact(
    db.tx.roomEvent[id()]
      .create({
        it: { type: "undo" },
        // timestamp: new Date()
      })
      .link({ party: DEMO_ID }),
  );
});

clearCanvasClicked.watch(async () => {
  const { roomEvent } = await db
    .queryOnce({
      roomEvent: {
        $: { where: { party: DEMO_ID } },
      },
    })
    .then((it) => it.data);

  console.log("DELETE");
  console.log(roomEvent);

  if (roomEvent.length > 0) {
    db.transact(roomEvent.map((event) => db.tx.roomEvent[event.id].delete()));
  }
});

sample({ source: $party, clock: makeWeDraw }).watch((party) => {
  db.transact(db.tx.party[DEMO_ID].update(party));
});

export async function resetDEMO() {
  console.log("------- RESET All -------");

  let allParties = await db
    .queryOnce({ party: {} })
    .then((it) => it.data.party);
  console.log(`allParties.len`, allParties.length);

  let curretLines = await db
    .queryOnce({ curretLine: {} })
    .then((it) => it.data.curretLine);
  console.log(`curretLines.len`, curretLines.length);

  db.transact([
    ...allParties.map((it) => db.tx.party[it.id].delete()),
    ...curretLines.map((it) => db.tx.curretLine[it.id].delete()),
  ])
    .then(() => {
      console.log(`DELETED`);
      return db.transact([db.tx.party[DEMO_ID].create(emptyParty())]);
    })
    .then(() => {
      console.log(`Created party`, DEMO_ID);
      return db.transact([
        db.tx.curretLine[id()]
          .create({
            dots: [],
            width: 8,
            color: "#34495e",
          })
          .link({ party: DEMO_ID }),
      ]);
    })
    .then(() => {
      console.log("OK, will reload in 3 sec");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
}

function emptyParty(): Party {
  return {
    name: "Алиска",
    players: [],
    gameState: { drawing: "" },
  };
}
