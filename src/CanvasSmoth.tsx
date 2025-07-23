import React, { useRef, useEffect, useState } from "react";
import { LazyBrush } from "lazy-brush";
import { getStroke } from "perfect-freehand";
import { DEMO_ID } from "./config";
import { db } from "./DB";
import { ColorSelector } from "./drawing/ColorSelector";

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
};

const lazy = new LazyBrush({
  radius: 3,
  enabled: true,
  initialPoint: { x: 0, y: 0 },
});

const easingFunctions = {
  cubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t: number) => t * t * t * t,
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInSine: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t: number) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInCirc: (t: number) => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t: number) => Math.sqrt(1 - (t - 1) * (t - 1)),
  easeInBack: (t: number) => 2.7 * t * t * t - 1.7 * t * t,
  easeOutBack: (t: number) =>
    1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2),
  elastic: (t: number) =>
    t === 0 || t === 1
      ? t
      : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI),
  bounce: (t: number) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  wave: (t: number) => 0.5 + 0.5 * Math.sin(6 * Math.PI * t),
  zigzag: (t: number) => Math.abs(((t * 8) % 2) - 1),
  step: (t: number) => Math.floor(t * 5) / 4,
  wobble: (t: number) => t + 0.3 * Math.sin(8 * Math.PI * t) * (1 - t),
  spiral: (t: number) =>
    t + 0.2 * Math.sin(16 * Math.PI * t) * Math.cos(12 * Math.PI * t),
  chaos: (t: number) =>
    t + 0.4 * (Math.random() - 0.5) * (1 - Math.abs(2 * t - 1)),
  heartbeat: (t: number) => {
    const beat = Math.sin(t * Math.PI * 12);
    return t + 0.3 * beat * Math.exp(-t * 5);
  },
  tornado: (t: number) => t * (1 + 0.5 * Math.sin(t * t * 20 * Math.PI)),
  drunk: (t: number) =>
    t + 0.2 * Math.sin(t * 15) * Math.cos(t * 23) * Math.sin(t * 7),
};

export function CanvasSmoth({ initHistory }: Props) {
  const svgRef = useRef<any>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecutionRef = useRef<number>(0);

  const [points, setPoints] = React.useState<any[]>([]);

  const [history, setHistory] = useState<HistoryItem[]>(initHistory);

  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(20);
  const [smoothing, setSmoothing] = useState(0.9);
  const [thinning, setThinning] = useState(0.1);
  const [streamline, setStreamline] = useState(0.0);
  const [simulatePressure, setSimulatePressure] = useState(false);
  const [easingType, setEasingType] =
    useState<keyof typeof easingFunctions>("cubic");

  useEffect(() => {
    // return;

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
    let rawLine: [number, number][] = [];
    let allPoints: any[] = [];

    history.forEach((ev, i, all) => {
      const [event, x, y, color, width] = ev;
      if (event === "start") {
        rawLine = [[x, y, color, width]];
      } else if (event === "move") {
        rawLine.push([x, y, color, width]);
      }

      if (event === "end" || i === all.length - 1) {
        allPoints.push(
          rawLine.map(([x, y, color, width], i, all) => {
            return [+x.toFixed(2), +y.toFixed(2), color, width];
          }),
        );
      }
    });

    setPoints(allPoints);
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
    if (e) e.preventDefault();
    const coords = getCoordinates(e);
    if (!coords) return;
    const { x, y } = coords;

    const newHistory = [...history, ["end", x, y, color, size]];
    setHistory(newHistory);

    setIsDrawing(false);
  };

  const options: DrawingOptions = {
    size,
    simulatePressure,
    smoothing,
    thinning,
    streamline,
    easing: easingFunctions[easingType],
    start: { taper: 0, cap: true },
    end: { taper: 0, cap: true },
  };

  console.log(history, points);

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
        <ColorSelector value={color} onChange={setColor} />

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
        <div style={{ display: "flex" }}>
          <label htmlFor="easingType" style={{ width: "150px" }}>
            Easing:
          </label>
          <select
            id="easingType"
            value={easingType}
            onChange={(e) =>
              setEasingType(e.target.value as keyof typeof easingFunctions)
            }
            style={{ marginLeft: "8px", padding: "2px 4px" }}
          >
            {Object.keys(easingFunctions).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>
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
        {points.map((p, i) => {
          const stroke = getStroke(p, {
            ...options,
            size: p[0][3] || 10,
          });
          const pathData = getSvgPathFromStroke(stroke);

          return <path key={i} d={pathData} fill={p[0][2] || "#000"} />;
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
