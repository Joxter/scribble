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

  console.log("------ lines");
  console.log(lines);

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

$svgPaths.watch(console.log);

// const { isLoading, error, data } =
db.subscribeQuery({ party: { $: { where: { id: DEMO_ID } } } }, (resp) => {
  if (resp.error) {
    console.error(resp.error);
  }
  if (resp.data) {
    console.log("---- canvasAndChatHistoryLoaded", resp.data.party[0].canvas);
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
  db.transact(db.tx.party[DEMO_ID].update({ canvas: [] })).then(() => {
    window.location.reload();
  });
}
