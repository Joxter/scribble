import React, { useRef, useEffect, useState } from "react";
import { LazyBrush } from "lazy-brush";
import { getStroke } from "perfect-freehand";
import { DEMO_ID } from "./config";
import { db } from "./DB";
import { canvasSize, historyToLines } from "./utils";

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
  initHistory: HistoryItem[];
  color: string;
  size: number;
};

const lazy = new LazyBrush({
  radius: 3,
  enabled: true,
  initialPoint: { x: 0, y: 0 },
});

const easingFunctions = {
  linear: (t: number) => t,
};

let cnt = 0;

export function CanvasSmoth({ initHistory, color, size }: Props) {
  const svgRef = useRef<any>(null);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecutionRef = useRef<number>(0);

  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = React.useState<any[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>(initHistory);

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastExecution = now - lastExecutionRef.current;

    const executeTransact = () => {
      db.transact(
        db.tx.party[DEMO_ID].update({
          canvas: history,
        }),
      );
      lastExecutionRef.current = Date.now();
    };

    if (timeSinceLastExecution >= 300) {
      executeTransact();
    } else {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }

      throttleRef.current = setTimeout(
        executeTransact,
        300 - timeSinceLastExecution,
      );
    }

    if (lastCallRef.current) {
      clearTimeout(lastCallRef.current);
    }

    lastCallRef.current = setTimeout(executeTransact, 300);

    return () => {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
      if (lastCallRef.current) {
        clearTimeout(lastCallRef.current);
      }
    };
  }, [history]);

  useEffect(() => {
    setPoints(historyToLines(history));
  }, [history]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = svgRef.current;
    if (!canvas) return null;

    const k = canvasSize / canvas.getBoundingClientRect().width;

    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return {
        x: (touch.clientX - rect.left) * k,
        y: (touch.clientY - rect.top) * k,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * k,
        y: (e.clientY - rect.top) * k,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();

    const coords = getCoordinates(e);
    if (!coords) return;

    const { x, y } = coords;

    const newHistory = [
      ...history,
      ["start", x, y, color, size],
      ["move", x, y, color, size],
    ];
    setHistory(newHistory);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const coords = getCoordinates(e);
    if (!coords) return;
    const { x, y } = coords;

    const newHistory = [...history, ["move", x, y, color, size]];
    setHistory(newHistory);
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();
    const coords = getCoordinates(e);
    if (!coords) return;
    const { x, y } = coords;

    const newHistory = [...history, ["end", x, y, color, size]];
    setHistory(newHistory);

    setIsDrawing(false);
  };

  return (
    <div>
      <p>cnt: {cnt++}</p>
      <svg
        ref={svgRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
        viewBox={`0 0 ${canvasSize} ${canvasSize}`}
        style={{
          touchAction: "none",
          border: "1px solid #ccc",
          cursor: "crosshair",
          width: "100%",
          aspectRatio: "1",
        }}
      >
        {false && (
          <>
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </>
        )}
        {points.map((p, i) => {
          const stroke = getStroke(p, {
            size: p[0]?.[3] || 10,
            simulatePressure: false,
            smoothing: 1,
            thinning: 0.1,
            streamline: 0,
            easing: easingFunctions.linear,
          });

          const pathData = getSvgPathFromStroke(stroke);

          return <path key={i} d={pathData} fill={p[0]?.[2] || "#000"} />;
        })}
      </svg>
    </div>
  );
}

function getSvgPathFromStroke(stroke: number[][]) {
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
  if (typeof n === "number") return +n.toFixed(1);
  return n;
}
