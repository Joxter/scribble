import React, { useRef, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { canvasSize, cSpline, historyToLinesNumbers, toPairs } from "../utils";
import {
  $currentCanvas,
  $currentLine,
  $renderMode,
  addLine,
  currentLineChanged,
} from "../game.model";

const scale = window.devicePixelRatio;

type HistoryItem = [event: string, x?: number, y?: number];

type Props = {};

export function Canvas({}: Props = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Get current state from Effector stores
  const currentCanvas = useUnit($currentCanvas);
  const currentLine = useUnit($currentLine);
  const renderMode = useUnit($renderMode);

  const { color, size: lineWidth } = currentLine;

  // Convert current canvas data to old format for rendering
  const convertedHistory: HistoryItem[] = [];
  currentCanvas.forEach((item) => {
    if (item.type === "line") {
      item.dots.forEach((dot, index) => {
        if (index === 0) {
          convertedHistory.push(["start", dot[0], dot[1]]);
        }
        convertedHistory.push(["move", dot[0], dot[1]]);
      });
      convertedHistory.push(["end"]);
    }
  });

  const smoth = historyToLinesNumbers(convertedHistory).map((line) => {
    return toPairs(
      Array.from(
        cSpline(line.flat(), {
          tension: 0.5,
          numOfSeg: 10,
          close: false,
        }),
      ),
    );
  });

  // Use render mode from global state
  const canvasRenderMode = renderMode === "debug" ? "old" : "new";

  useEffect(() => {
    if (canvasRenderMode !== "new") return;
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
  }, [currentCanvas, canvasRenderMode, color, lineWidth]);

  useEffect(() => {
    if (canvasRenderMode !== "old") return;
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

    convertedHistory.forEach((ev) => {
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
  }, [currentCanvas, canvasRenderMode, color, lineWidth]);

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

    // Update current line in global state
    currentLineChanged({
      points: [[x, y]],
    });
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

    // Update current line in global state
    currentLineChanged({
      points: [...currentLine.points, [x, y]],
    });
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();

    const coords = e ? getCoordinates(e) : null;
    const finalPoints = coords
      ? [...currentLine.points, [coords.x, coords.y]]
      : currentLine.points;

    // Add line to global state
    addLine({
      points: finalPoints,
      color: currentLine.color,
      size: currentLine.size,
      isBucket: false,
    });

    setIsDrawing(false);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "500px",
        maxHeight: "100%",
        height: "auto",
        aspectRatio: "1 / 1",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#faf9f5",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          border: "2px dashed #ccc",
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
    </div>
  );
}
