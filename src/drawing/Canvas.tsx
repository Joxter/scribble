import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { useUnit } from "effector-react";
import { canvasSize, toFixed } from "../utils";
import {
  $currentDrawing,
  $drawing,
  $polylinePaths,
  $renderMode,
  $svgCanvasPaths,
  lineExtended,
  lineStarted,
} from "../model/game-new.model.ts";
import { $debugMode } from "../model/game.model.ts";

const PIXEL_RATIO = window.devicePixelRatio || 1;

type Point = [number, number];
type CanvasEvent = React.MouseEvent | React.TouchEvent;

function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")!;

  canvas.width = canvasSize * PIXEL_RATIO;
  canvas.height = canvasSize * PIXEL_RATIO;
  ctx.scale(PIXEL_RATIO, PIXEL_RATIO);

  return ctx;
}

function getEventCoordinates(e: CanvasEvent, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const scale = canvasSize / rect.width;

  const clientX =
    "touches" in e ? (e.touches[0] || e.changedTouches[0]).clientX : e.clientX;
  const clientY =
    "touches" in e ? (e.touches[0] || e.changedTouches[0]).clientY : e.clientY;

  return {
    x: toFixed((clientX - rect.left) * scale),
    y: toFixed((clientY - rect.top) * scale),
  };
}

function renderPolylines(ctx: CanvasRenderingContext2D, polylinePaths: any[]) {
  polylinePaths.forEach((line) => {
    const points = line.points.split(" ").map((point: string) => {
      const [x, y] = point.split(",").map(Number);
      return [x, y] as Point;
    });

    if (points.length >= 2) {
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.stroke();
    }
  });
}

// Styles
const containerStyle = {
  margin: "0 auto",
  maxWidth: "500px",
  maxHeight: "100%",
  height: "auto",
  aspectRatio: "1 / 1" as const,
  position: "relative" as const,
  background: "#f6eee2",
  borderRadius: "8px",
  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
};

const canvasLayerStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  touchAction: "none" as const,
  borderRadius: "8px",
  cursor: "crosshair" as const,
};

export function Canvas() {
  const canvasLinesRef = useRef<HTMLCanvasElement>(null);

  const renderMode = useUnit($renderMode);
  const debugMode = useUnit($debugMode);
  const polylinePaths = useUnit($polylinePaths);
  const svgCanvasPaths = useUnit($svgCanvasPaths);

  useEffect(() => {
    const canvas = canvasLinesRef.current!;
    const ctx = setupCanvas(canvas);
    // console.log("all lines");

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    if (renderMode === "polyline") {
      renderPolylines(ctx, polylinePaths);
    } else {
      svgCanvasPaths.forEach((line) => {
        ctx.fillStyle = line.color;
        ctx.fill(new Path2D(line.d));
      });
    }
  }, [polylinePaths, svgCanvasPaths, renderMode]);

  return (
    <div style={containerStyle}>
      <canvas ref={canvasLinesRef} style={canvasLayerStyle} />
      <CurrentLine />
      {debugMode && <DebugOverlay />}
    </div>
  );
}

const CurrentLine = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawing = useUnit($drawing);
  const imDrawing = drawing.iam || false;

  const svgCurrentLine = useUnit($svgCanvasPaths).at(-1);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = setupCanvas(canvas);

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    if (svgCurrentLine) {
      ctx.fillStyle = svgCurrentLine.color;
      ctx.fill(new Path2D(svgCurrentLine.d));
    }
  }, [svgCurrentLine]);

  const startDrawing = useCallback(
    (e: CanvasEvent) => {
      if (!imDrawing) return;
      e.preventDefault();
      const { x, y } = getEventCoordinates(e, canvasRef.current!);
      lineStarted([x, y]);
      setIsDrawing(true);
    },
    [imDrawing],
  );

  const draw = useCallback(
    (e: CanvasEvent) => {
      if (!imDrawing || !isDrawing) return;
      e.preventDefault();
      const { x, y } = getEventCoordinates(e, canvasRef.current!);
      lineExtended([x, y]);
    },
    [imDrawing, isDrawing],
  );

  const stopDrawing = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!imDrawing || !isDrawing) return;
      e.preventDefault();

      setIsDrawing(false);
    },
    [imDrawing, isDrawing],
  );

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
      style={canvasLayerStyle}
    />
  );
});

const DebugOverlay = memo(() => {
  const linesRaw = useUnit($currentDrawing);

  const debugOverlayStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none" as const,
  };

  return (
    <svg style={debugOverlayStyle} viewBox={`0 0 ${canvasSize} ${canvasSize}`}>
      {linesRaw.map((line, i) => (
        <g key={`debug-${i}`}>
          <polyline
            points={line.dots.map(([x, y]) => `${x},${y}`).join(" ")}
            stroke="white"
            strokeWidth={2}
            strokeDasharray="2,5"
            fill="none"
          />
          {line.dots.map(([x, y], pointIndex) => (
            <circle
              key={`${i}-${pointIndex}`}
              cx={x}
              cy={y}
              r={1}
              fill={`hsl(0, 70%, ${(pointIndex % 5) * 10 + 30}%)`}
            />
          ))}
        </g>
      ))}
    </svg>
  );
});
