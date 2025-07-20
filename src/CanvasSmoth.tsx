import React, { useRef, useEffect, useState } from "react";
import { LazyBrush } from "lazy-brush";
import { getStroke } from "perfect-freehand";
import { DEMO_ID } from "./config";
import { db } from "./DB";

const scale = window.devicePixelRatio;

const canvasSize = 800;

type HistoryItem = [event: string, x?: number, y?: number];

type Props = {
  onHistoryChange: (event: any) => void;
  initHistory: HistoryItem[];
  lineWidth?: number;
  color?: string;
};

const lazy = new LazyBrush({
  radius: 3,
  enabled: true,
  initialPoint: { x: 0, y: 0 },
});

export function CanvasSmoth({
  initHistory,
  lineWidth = 3,
  color = "#000",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecutionRef = useRef<number>(0);

  const [points, setPoints] = React.useState<any[]>([]);
  console.log(points);

  const [history, setHistory] = useState<HistoryItem[]>(initHistory);

  useEffect(() => {
    let rawLine: [number, number][] = [];
    let lineCnt = 0;
    let allPoints: any[] = [];

    initHistory.forEach((ev) => {
      const [event, x, y] = ev;
      if (event === "start") {
        // ctx.moveTo(x, y);
        rawLine = [[x, y]];
      } else if (event === "move") {
        rawLine.push([x, y]);
        // ctx.lineTo(x, y);
      } else if (event === "end") {
        allPoints.push(
          rawLine.map(([x, y], i, all) => {
            // return it;
            // return [+x.toFixed(2), +y.toFixed(2), (i + 1) / all.length];
            return [+x.toFixed(2), +y.toFixed(2)];
          }),
        );
      }
    });

    setPoints(allPoints);
  }, []);

  const options = {
    size: 5,
    simulatePressure: !true,
    smoothing: 0.9, // влияет только на границу между черниками и холстом, 0.01 - более квадратная
    thinning: 0.2, // контраст в толщине линии (0 постоянная толщина, 1 - 0-100%)
    streamline: 0.2, // насколько близко повторять оригинальную линию (0 - максимально близко)
    easing: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    start: { taper: 0, cap: true },
    end: { taper: 0, cap: true },
  };

  console.log(points);

  return (
    <svg
      style={{
        touchAction: "none",
        border: "1px solid #ccc",
        cursor: "crosshair",
        width: canvasSize + "px",
        height: canvasSize + "px",
      }}
    >
      {points.map((p) => {
        const stroke = getStroke(p, options);
        const pathData = getSvgPathFromStroke(stroke);

        return <path d={pathData} />;
      })}
    </svg>
  );
}

function getSvgPathFromStroke(stroke) {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"],
  );

  d.push("Z");
  return d.map(fix2).join(" ");
}

function fix2(n: number) {
  // if (typeof n === "number") return +n.toFixed(2);
  return n;
}
