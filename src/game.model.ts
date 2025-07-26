import { createEvent, createStore } from "effector";
import { CanvasAndChatHistory } from "./types";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, historyToLines } from "./utils";
import { DEMO_ID } from "./config";
import { db } from "./DB";

const easingFunctions = { linear: (t: number) => t };

export const $currentLine = createStore<{
  points: [x: number, y: number, timestamp: number][];
  color: string;
  size: number;
}>({
  points: [],
  color: "#000000",
  size: 8,
});

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);

export const sizeChanged = createEvent<number>();
export const colorChanged = createEvent<string>();
export const canvasAndChatHistoryLoaded = createEvent<CanvasAndChatHistory[]>();

$currentCanvas.on(canvasAndChatHistoryLoaded, (_, v) => v);

$currentLine
  .on(sizeChanged, (s, v) => {
    return { ...s, size: v };
  })
  .on(colorChanged, (s, v) => {
    return { ...s, color: v };
  });

export const $svgPaths = $currentCanvas.map((lines) => {
  const paths: { d: string; color: string }[] = [];

  historyToLines(lines as any)
    .map((it) => {
      return {
        type: "line",
        dots: it.map((a) => [a[0], a[1]]),
        color: it[0][2],
        width: it[0][3],
      };
    })
    .forEach((it, i) => {
      if (it.type === "line") {
        const stroke = getStroke(it.dots, {
          size: it.width,
          simulatePressure: false,
          smoothing: 1,
          thinning: 0.1,
          streamline: 0,
          easing: easingFunctions.linear,
        });

        paths.push({
          d: getSvgPathFromStroke(stroke),
          color: it.color,
        });
      }
    });

  return paths;
});

db.subscribeQuery({ party: { $: { where: { id: DEMO_ID } } } }, (resp) => {
  if (resp.error) {
    console.error(resp.error);
  }
  if (resp.data) {
    canvasAndChatHistoryLoaded(resp.data.party[0].canvas);
  }
});

//             initHistory={data.party[0].canvas}

// useEffect(() => {
//   setPoints(historyToLines(history));
// }, [history]);

// current canvas
// db.transact(
//   db.tx.party[DEMO_ID].update({
//     canvas: history,
//   }),
// );

export function resetDEMO() {
  db.transact(
    db.tx.party[DEMO_ID].update({
      canvas: [
        ["start", 123, 84, "#000000", 8],
        ["move", 123, 84, "#000000", 8],
        ["move", 128, 81, "#000000", 8],
        ["move", 130, 79, "#000000", 8],
        ["move", 138, 75, "#000000", 8],
        ["move", 145, 71, "#000000", 8],
        ["move", 149, 70, "#000000", 8],
        ["move", 155, 68, "#000000", 8],
        ["move", 160, 67, "#000000", 8],
        ["move", 166, 66, "#000000", 8],
        ["move", 176, 66, "#000000", 8],
        ["move", 180, 68, "#000000", 8],
        ["move", 184, 70, "#000000", 8],
        ["move", 188, 73, "#000000", 8],
        ["move", 191, 77, "#000000", 8],
        ["move", 194, 80, "#000000", 8],
        ["move", 197, 84, "#000000", 8],
        ["move", 199, 88, "#000000", 8],
        ["move", 201, 91, "#000000", 8],
        ["move", 203, 94, "#000000", 8],
        ["move", 205, 96, "#000000", 8],
        ["move", 207, 98, "#000000", 8],
        ["move", 210, 100, "#000000", 8],
        ["move", 212, 101, "#000000", 8],
        ["move", 215, 102, "#000000", 8],
        ["move", 217, 104, "#000000", 8],
        ["move", 219, 105, "#000000", 8],
        ["move", 221, 105, "#000000", 8],
        ["move", 222, 106, "#000000", 8],
        ["move", 224, 105, "#000000", 8],
        ["end", 224, 105, "#000000", 8],
      ],
    }),
  ).then(() => {
    window.location.reload();
  });
}
