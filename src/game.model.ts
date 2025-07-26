import { createEvent, createStore } from "effector";
import { CanvasAndChatHistory } from "./types";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, historyToLines } from "./utils";
import { DEMO_ID } from "./config";
import { db } from "./DB";

const easingFunctions = { linear: (t: number) => t };

export const $currentLine = createStore<{
  points: [x: number, y: number][];
  color: string;
  size: number;
}>({ points: [], color: "#000000", size: 8 });

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);

export const currentLineChanged = createEvent<{
  points?: [x: number, y: number][];
  color?: string;
  size?: number;
}>();

export const canvasAndChatHistoryLoaded = createEvent<CanvasAndChatHistory[]>();

$currentCanvas.on(canvasAndChatHistoryLoaded, (_, v) => v);

$currentLine.on(currentLineChanged, (s, v) => {
  return { ...s, ...v };
});

export const $svgPaths = $currentCanvas.map((lines) => {
  const paths: { d: string; color: string }[] = [];

  lines.forEach((it, i) => {
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

// const throttleRef = useRef<NodeJS.Timeout | null>(null);
// const lastCallRef = useRef<NodeJS.Timeout | null>(null);
// const lastExecutionRef = useRef<number>(0);
// useEffect(() => {
//   return;

//   const now = Date.now();
//   const timeSinceLastExecution = now - lastExecutionRef.current;

//   const executeTransact = () => {
//     db.transact(
//       db.tx.party[DEMO_ID].update({
//         canvas: history,
//       }),
//     );
//     lastExecutionRef.current = Date.now();
//   };

//   if (timeSinceLastExecution >= 300) {
//     executeTransact();
//   } else {
//     if (throttleRef.current) {
//       clearTimeout(throttleRef.current);
//     }

//     throttleRef.current = setTimeout(
//       executeTransact,
//       300 - timeSinceLastExecution,
//     );
//   }

//   if (lastCallRef.current) {
//     clearTimeout(lastCallRef.current);
//   }

//   lastCallRef.current = setTimeout(executeTransact, 300);

//   return () => {
//     if (throttleRef.current) {
//       clearTimeout(throttleRef.current);
//     }
//     if (lastCallRef.current) {
//       clearTimeout(lastCallRef.current);
//     }
//   };
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
        {
          type: "line",
          dots: [
            [123, 84],
            [128, 81],
            [130, 79],
            [138, 75],
            [145, 71],
            [149, 70],
            [155, 68],
            [160, 67],
            [166, 66],
            [176, 66],
            [180, 68],
            [184, 70],
            [188, 73],
            [191, 77],
            [194, 80],
            [197, 84],
            [199, 88],
            [201, 91],
            [203, 94],
            [205, 96],
            [207, 98],
            [210, 100],
            [212, 101],
            [215, 102],
            [217, 104],
            [219, 105],
            [221, 105],
            [222, 106],
            [224, 105],
          ],
          color: "#000000",
          width: 8,
        },
      ],
    }),
  ).then(() => {
    window.location.reload();
  });
}
