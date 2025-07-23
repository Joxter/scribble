import React, { useRef, useEffect, useState } from "react";
import { LazyBrush } from "lazy-brush";
import { getStroke } from "perfect-freehand";
import { DEMO_ID } from "./config";
import { db } from "./DB";
import { cSpline, historyToLinesNumbers, toPairs } from "./utils";

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

export function Canvas({ initHistory, lineWidth = 3, color = "#000" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecutionRef = useRef<number>(0);

  const smoth = historyToLinesNumbers(initHistory).map((line) => {
    return toPairs(
      Array.from(
        cSpline(line.flat(), {
          tension: 0.5,
          // tension: 0.0,
          numOfSeg: 10,
          close: false,
        }),
      ),
    );
  });

  // const smoth = historyToLinesNumbers(initHistory).map((line) => {
  //   const stroke = getStroke(line, {
  //     size: 10,
  //     smoothing: 0.5,
  //     // ...options,
  //     // size: p[0]?.[3] || 10,
  //   });
  //   return stroke;
  // });

  const [history, setHistory] = useState<HistoryItem[]>(initHistory);

  useEffect(() => {
    return;

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

  // const renderMode = "old";
  const renderMode = "new";

  useEffect(() => {
    if (renderMode !== "new") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = Math.floor(canvasSize * scale);
    canvas.height = Math.floor(canvasSize * scale);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.beginPath();

    smoth.forEach((line) => {
      ctx.moveTo(line[0][0], line[0][1]);
      line.forEach(([x, y]) => {
        ctx.lineTo(x, y);
      });
    });

    ctx.stroke();
  }, []);

  useEffect(() => {
    if (renderMode !== "old") return;
    console.log("MOUNT", initHistory);
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = Math.floor(canvasSize * scale);
    canvas.height = Math.floor(canvasSize * scale);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(scale, scale);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.beginPath();

    initHistory.forEach((ev) => {
      const [event, x, y] = ev;
      if (event === "start") {
        ctx.moveTo(x, y);
      } else if (event === "move") {
        ctx.lineTo(x, y);
      } else if (event === "end") {
        // nothing
      } else {
        console.log("Unknown event", ev);
      }
    });
    ctx.stroke();
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const { x, y } = coords;

    ctx.beginPath();
    ctx.moveTo(x, y);

    const newHistory = [...history, ["start", x, y], ["move", x, y]];
    setHistory(newHistory);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coords = getCoordinates(e);
    if (!coords) return;

    const { x, y } = coords;

    ctx.lineTo(x, y);
    ctx.stroke();
    const newHistory = [...history, ["move", x, y]];
    setHistory(newHistory);
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (e) e.preventDefault();
    const newHistory = [...history, ["end"]];
    setHistory(newHistory);

    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        border: "1px solid #ccc",
        cursor: "crosshair",
        width: "100%",
        aspectRatio: "1",
        touchAction: "none",
      }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
    />
  );
}
