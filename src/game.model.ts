import { createEvent, createStore, sample } from "effector";
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

export const $currentLine = createStore<CurrentLine>({
  points: [],
  color: "#000000",
  size: 8,
  isBucket: false,
});
// $currentLine.watch(console.log);

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);

export const $renderMode = createStore<"normal" | "debug" | "old">("normal");

export const currentLineChanged = createEvent<Partial<CurrentLine>>();
export const renderModeChanged = createEvent<"normal" | "debug" | "old">();

export const undoClicked = createEvent<any>();
export const addLine = createEvent<CurrentLine>();
export const addBucket = createEvent<{
  x: number;
  y: number;
  color: string;
}>();

export const canvasAndChatHistoryLoaded = createEvent<{
  history: CanvasAndChatHistory[];
  word: string;
  currentLine: CurrentLine;
}>();

export const historyUpdated = createEvent<{
  history: CanvasAndChatHistory[];
}>();

$currentCanvas.on(canvasAndChatHistoryLoaded, (_, { history }) => history);

$currentLine
  .on(canvasAndChatHistoryLoaded, (s, { currentLine }) => {
    return currentLine;
  })
  .on(currentLineChanged, (s, v) => {
    return { ...s, ...v };
  })
  .on(addLine, (s) => {
    return { ...s, points: [] };
  });

$renderMode.on(renderModeChanged, (_, mode) => mode);

export const $svgPaths = $currentCanvas.map((lines) => {
  const paths: { d: string; color: string }[] = [];
  console.log(lines);

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

db.subscribeQuery({ party: { $: { where: { id: DEMO_ID } } } }, (resp) => {
  if (resp.error) console.error(resp.error);
  if (resp.data) {
    // canvasAndChatHistoryLoaded(resp.data.party[0].name);
  }
});

db.subscribeQuery(
  {
    roomEvent: {
      $: {
        where: { party: DEMO_ID },
        order: { serverCreatedAt: "asc" },
      },
    },
  },
  (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) {
      console.log(
        "roomEvents:",
        resp.data.roomEvent.map((a) => a.it),
      );
      // historyUpdated(resp.data.roomEvent.map((a) => a.it));
    }
  },
);

$currentLine.watch((currentLine) => {
  db.transact(db.tx.curretLine[lookup("party", DEMO_ID)].update(currentLine));
});

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

export function resetDEMO() {
  db.transact(db.tx.party[DEMO_ID].delete())
    .then(() => {
      return db.transact([
        db.tx.party[DEMO_ID].create({
          name: "demo party",
        }),
        db.tx.curretLine[lookup("party", DEMO_ID)].update({
          dots: [],
          width: 8,
          color: "#34495e",
        }),
      ]);
    })
    .then(() => {
      window.location.reload();
    });
}

// штучка
// [[181,174],[183,174],[186,174],[191,173],[195,173],[200,171],[205,170],[210,168],[214,167],[218,166],[221,166],[226,165],[230,164],[237,163],[245,161],[253,160],[260,160],[267,159],[271,159],[275,159],[277,159],[278,159],[278,159],[279,159],[279,159],[279,158],[279,158]]

// не штучка
// [[375,189],[375,187],[375,180],[376,172],[377,163],[378,155],[378,148],[378,143],[378,139],[378,135],[378,131],[378,128],[378,127],[378,126],[378,125],[378,124],[378,124],[378,124],[378,123],[378,122],[378,121],[378,121],[378,120],[378,120],[378,120],[378,120]]
