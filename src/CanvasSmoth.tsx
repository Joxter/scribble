import React, { useRef, useEffect, useState } from "react";
import { LazyBrush } from "lazy-brush";
import { getStroke } from "perfect-freehand";
import { DEMO_ID } from "./config";
import { db } from "./DB";

const scale = window.devicePixelRatio;

const canvasSize = 800;

type HistoryItem = [event: string, x?: number, y?: number];

type DrawingOptions = {
  size: number;
  simulatePressure: boolean;
  smoothing: number;
  thinning: number;
  streamline: number;
  easing: (t: number) => number;
  start: { taper: number; cap: boolean };
  end: { taper: number; cap: boolean };
};

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

  const [history, setHistory] = useState<HistoryItem[]>(initHistory);

  const [size, setSize] = useState(20);
  const [smoothing, setSmoothing] = useState(0.9);
  const [thinning, setThinning] = useState(0.1);
  const [streamline, setStreamline] = useState(0.1);
  const [simulatePressure, setSimulatePressure] = useState(false);

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

  const options: DrawingOptions = {
    size,
    simulatePressure,
    smoothing,
    thinning,
    streamline,
    easing: (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    start: { taper: 0, cap: true },
    end: { taper: 0, cap: true },
  };

  console.log(points);

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex" }}>
          <label htmlFor="size" style={{ width: "150px" }}>
            Size: {size}
          </label>
          <input
            id="size"
            type="range"
            min="1"
            max="50"
            step="1"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="smoothing" style={{ width: "150px" }}>
            Smoothing: {smoothing.toFixed(2)}
          </label>
          <input
            id="smoothing"
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={smoothing}
            onChange={(e) => setSmoothing(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="thinning" style={{ width: "150px" }}>
            Thinning: {thinning.toFixed(2)}
          </label>
          <input
            id="thinning"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={thinning}
            onChange={(e) => setThinning(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="streamline" style={{ width: "150px" }}>
            Streamline: {streamline.toFixed(2)}
          </label>
          <input
            id="streamline"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={streamline}
            onChange={(e) => setStreamline(Number(e.target.value))}
            style={{ marginLeft: "8px" }}
          />
        </div>
        <div>
          <label htmlFor="simulatePressure">
            <input
              id="simulatePressure"
              type="checkbox"
              checked={simulatePressure}
              onChange={(e) => setSimulatePressure(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            Simulate Pressure
          </label>
        </div>
      </div>
      <svg
        // width={canvasSize + "px"}
        // height={canvasSize + "px"}
        viewBox={`0 0 ${canvasSize} ${canvasSize}`}
        style={{
          touchAction: "none",
          border: "1px solid #ccc",
          cursor: "crosshair",
          width: "100%",
          aspectRatio: "1",
          // height: "500px",
        }}
      >
        {points.map((p, index) => {
          const stroke = getStroke(p, options);
          const pathData = getSvgPathFromStroke(stroke);

          return <path key={index} d={pathData} />;
        })}
      </svg>
    </div>
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
