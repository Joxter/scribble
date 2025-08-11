import { combine, createEvent, createStore, sample } from "effector";
import { CanvasAndChatHistory } from "./types";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, historyToLines } from "./utils";
import { DEMO_ID, smoothConf } from "./config";
import { db } from "./DB";
import { id, lookup } from "@instantdb/core";

type CurrentLine = {
  points: [x: number, y: number][];
  color: string;
  size: number;
  isBucket: boolean;
};

const $currentLineID = createStore("");
export const $currentLine = createStore<CurrentLine>({
  points: [],
  color: "#000000",
  size: 8,
  isBucket: false,
});
// $currentLine.watch(console.log);

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);
export const $imDrawing = createStore(true);

export const $renderMode = createStore<"normal" | "old">("normal");
export const $debugMode = createStore(false);

export const currentLineChanged = createEvent<Partial<CurrentLine>>();
export const setCurrentLineID = createEvent<string>();
export const renderModeChanged = createEvent<"normal" | "old">();
export const debugModeToggled = createEvent<boolean>();

export const undoClicked = createEvent<any>();
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

$currentCanvas.on(historyUpdated, (currentHistory, { history }) => {
  return currentHistory.length < history.length ? history : currentHistory;
});

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

export const $svgPaths = $currentCanvas.map((lines) => {
  const paths: { d: string; color: string }[] = [];

  lines.forEach((it, i) => {
    if (it.type === "line") {
      const stroke = getStroke(it.dots, {
        ...smoothConf,
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
      if (resp.data.party[0]?.currentLine) {
        console.log("setCurrentLineID", resp.data.party[0]);

        setCurrentLineID(resp.data.party[0].currentLine.id);

        currentLineChanged({
          size: resp.data.party[0].currentLine.width,
          color: resp.data.party[0].currentLine.color,
        });
      } else {
        console.log("no party or currentLine", resp.data.party[0]);
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
      // console.log(
      //   "roomEvents:",
      //   resp.data.roomEvent.map((a) => a.it),
      // );
      historyUpdated({ history: resp.data.roomEvent.map((a) => a.it) });
    }
  },
);

// db.subscribeQuery(
//   {
//     curretLine: {
//       party: { $: { where: { party: DEMO_ID } } },
//     },
//   },
//   (resp) => {
//     if (resp.error) console.error(resp.error);
//     if (resp.data) {
//       console.log("curretLine:", resp.data.curretLine[0]);
//       currentLineChanged(resp.data.curretLine[0]);
//     }
//   },
// );

combine([$currentLine, $imDrawing, $currentLineID]).watch(
  ([currentLine, imDrawing, lineId]) => {
    // console.log([lineId], currentLine);
    if (lineId) {
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
      return db.transact([
        db.tx.party[DEMO_ID].create({
          name: "demo party",
        }),
      ]);
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
      window.location.reload();
    });
}
