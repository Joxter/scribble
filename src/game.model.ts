import { createEvent, createStore, sample } from "effector";
import { CanvasAndChatHistory } from "./types";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, historyToLines } from "./utils";
import { DEMO_ID, smoothConf } from "./config";
import { db } from "./DB";

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

export const $renderMode = createStore<"normal" | "debug">("normal");

export const currentLineChanged = createEvent<Partial<CurrentLine>>();
export const renderModeChanged = createEvent<"normal" | "debug">();

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

$currentCanvas.on(canvasAndChatHistoryLoaded, (_, { history }) => history);

$currentLine
  .on(canvasAndChatHistoryLoaded, (s, { currentLine }) => {
    console.log("currentLine", currentLine);
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
  // console.log(resp);
  if (resp.error) {
    console.error(resp.error);
  }
  if (resp.data) {
    // console.log(resp.data.party[0].canvas);
    canvasAndChatHistoryLoaded(resp.data.party[0].canvas);
  }
});

const addLineeee = sample({
  source: [$currentCanvas, $currentLine] as const,
  clock: addLine,
  fn: (a, b) => [a, b] as const,
});

addLineeee.watch(([[currentCanvas, currentLine], newLine]) => {
  db.transact(
    db.tx.party[DEMO_ID].update({
      canvas: {
        currentLine: { ...currentLine },
        word: "fake word",
        history: [
          ...currentCanvas,
          {
            type: "line",
            dots: newLine.points,
            color: newLine.color,
            width: newLine.size,
          },
        ],
      },
    }),
  );
});

const addBucketttt = sample({
  source: [$currentCanvas, $currentLine] as const,
  clock: addBucket,
  fn: (a, b) => [a, b] as const,
});

addBucketttt.watch(([[currentCanvas, currentLine], newBucket]) => {
  console.log([
    ...currentCanvas,
    {
      type: "bucket",
      x: newBucket.x,
      y: newBucket.y,
      color: newBucket.color,
    },
  ]);
  db.transact(
    db.tx.party[DEMO_ID].update({
      canvas: {
        currentLine: { ...currentLine },
        word: "fake word",
        history: [
          ...currentCanvas,
          {
            type: "bucket",
            x: newBucket.x,
            y: newBucket.y,
            color: newBucket.color,
          },
        ],
      },
    }),
  );
});

const undoClickedddd = sample({
  source: [$currentCanvas, $currentLine] as const,
  clock: undoClicked,
  fn: (a, b) => [a, b] as const,
});

undoClickedddd.watch(([[currentCanvas, currentLine], newLine]) => {
  db.transact(
    db.tx.party[DEMO_ID].update({
      canvas: {
        currentLine: { ...currentLine },
        word: "fake word",
        history: [...currentCanvas, { type: "undo" }],
      },
    }),
  );
});

export function resetDEMO() {
  db.transact(
    db.tx.party[DEMO_ID].update({
      canvas: {
        history: [
          // {
          //   type: "line",
          //   dots: [
          //     // [123, 84],
          //     // [128, 81],
          //     // [130, 79],
          //     // [138, 75],
          //     // [145, 71],
          //     // [149, 70],
          //     // [155, 68],
          //     // [160, 67],
          //     // [166, 66],
          //     // [176, 66],
          //     // [180, 68],
          //     // [184, 70],
          //     // [188, 73],
          //   ],
          //   color: "#34495e",
          //   width: 8,
          //   isBucket: false,
          // },
        ],
        word: "fake word",
        currentLine: {
          points: [],
          color: "#34495e",
          size: 8,
          isBucket: false,
        },
      },
    }),
  ).then(() => {
    window.location.reload();
  });
}

// штучка
// [[181,174],[183,174],[186,174],[191,173],[195,173],[200,171],[205,170],[210,168],[214,167],[218,166],[221,166],[226,165],[230,164],[237,163],[245,161],[253,160],[260,160],[267,159],[271,159],[275,159],[277,159],[278,159],[278,159],[279,159],[279,159],[279,158],[279,158]]

// не штучка
// [[375,189],[375,187],[375,180],[376,172],[377,163],[378,155],[378,148],[378,143],[378,139],[378,135],[378,131],[378,128],[378,127],[378,126],[378,125],[378,124],[378,124],[378,124],[378,123],[378,122],[378,121],[378,121],[378,120],[378,120],[378,120],[378,120]]
