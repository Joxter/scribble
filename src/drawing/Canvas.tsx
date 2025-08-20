import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { useUnit } from "effector-react";
import { canvasSize } from "../utils";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";
import { StrokeOptions } from "../freehand/types.ts";
import {
  $currentLine,
  $debugMode,
  $imDrawing,
  $polylinePaths,
  $rawPath,
  $renderMode,
  lineStarted,
  lineExtended,
  $svgCanvasPaths,
  $svgCurrentLine,
  addLine,
} from "../model/game.model.ts";

const pixelRatio = window.devicePixelRatio || 1;

const strokeOptions: StrokeOptions = {
  thinning: 0.3,
};

// Setup canvas for high-DPI rendering
const setupCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  canvas.width = canvasSize * pixelRatio;
  canvas.height = canvasSize * pixelRatio;

  ctx.scale(pixelRatio, pixelRatio);

  return ctx;
};

type Point = [number, number];
type Line = {
  dots: Point[];
  color: string;
  width: number;
};

export function Canvas() {
  const canvasLinesRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const imDrawing = useUnit($imDrawing);
  const currentLine = useUnit($currentLine);
  const svgCurrentLine = useUnit($svgCurrentLine);
  const debugMode = useUnit($debugMode);
  const polylinePaths = useUnit($polylinePaths);
  const svgCanvasPaths = useUnit($svgCanvasPaths);
  const renderMode = useUnit($renderMode);

  const getCoordinates = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      const scale = canvasSize / rect.width;

      const clientX =
        "touches" in e
          ? (e.touches[0] || e.changedTouches[0]).clientX
          : e.clientX;
      const clientY =
        "touches" in e
          ? (e.touches[0] || e.changedTouches[0]).clientY
          : e.clientY;

      return {
        x: (clientX - rect.left) * scale,
        y: (clientY - rect.top) * scale,
      };
    },
    [],
  );

  // Render completed lines to background canvas
  useEffect(() => {
    const canvas = canvasLinesRef.current;
    if (!canvas) return;

    const ctx = setupCanvas(canvas);
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    if (renderMode === "polyline") {
      polylinePaths.forEach((line) => {
        const points = line.points.split(" ").map((point) => {
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
    } else {
      svgCanvasPaths.forEach((line) => {
        ctx.fillStyle = line.color;
        ctx.fill(new Path2D(line.d));
      });
    }
  }, [polylinePaths, svgCanvasPaths, renderMode]);

  // Render current line to top canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = setupCanvas(canvas);
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    if (svgCurrentLine) {
      ctx.fillStyle = svgCurrentLine.color;
      ctx.fill(new Path2D(svgCurrentLine.d));
    }
  }, [svgCurrentLine]);

  const startDrawing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!imDrawing) return;
      e.preventDefault();
      const { x, y } = getCoordinates(e);
      lineStarted([x, y]);
      setIsDrawing(true);
    },
    [imDrawing, getCoordinates],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!imDrawing) return;
      if (!isDrawing) return;
      e.preventDefault();

      const { x, y } = getCoordinates(e);
      lineExtended([x, y]);
    },
    [imDrawing, isDrawing, getCoordinates],
  );

  const stopDrawing = useCallback(
    (e?: React.TouchEvent) => {
      if (!imDrawing) return;
      if (!isDrawing) return;
      if (e) e.preventDefault();

      const { x, y } = getCoordinates(e as any);

      addLine({
        dots: [...currentLine.dots, [x, y]],
        color: currentLine.color,
        width: currentLine.width,
      });
      setIsDrawing(false);
    },
    [imDrawing, isDrawing, currentLine, getCoordinates],
  );

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "500px",
        maxHeight: "100%",
        height: "auto",
        aspectRatio: "1 / 1",
        position: "relative",
        background: "#f6eee2",
        // border: "2px dashed #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasLinesRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
        }}
      />
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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
          cursor: "crosshair",
        }}
      />
      {debugMode && <DebugOverlay />}
    </div>
  );
}

const DebugOverlay = memo(() => {
  const linesRaw = useUnit($rawPath);

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      viewBox={`0 0 ${canvasSize} ${canvasSize}`}
    >
      {linesRaw.map((line, i) => {
        return (
          <g key={"debug" + i}>
            <polyline
              points={line.dots.map(([x, y]) => `${x},${y}`).join(" ") || ""}
              stroke={"white"}
              strokeWidth={2}
              strokeDasharray="2,5"
              fill="none"
            />
            {line.dots.map(([x, y], pointIndex) => {
              return (
                <circle
                  key={`${i}-${pointIndex}`}
                  cx={x}
                  cy={y}
                  r={1}
                  fill={`hsl(0, 70%, ${(pointIndex % 5) * 10 + 30}%)`}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
});
