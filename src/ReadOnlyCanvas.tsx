import React, { useRef, useEffect } from "react";
import { canvasSize } from "./utils";
import { LineEvent } from "./types";

const PIXEL_RATIO = window.devicePixelRatio || 1;

type Point = [number, number];

function setupCanvas(canvas: HTMLCanvasElement, size: number = canvasSize) {
  const ctx = canvas.getContext("2d")!;

  canvas.width = size * PIXEL_RATIO;
  canvas.height = size * PIXEL_RATIO;
  ctx.scale(PIXEL_RATIO, PIXEL_RATIO);

  return ctx;
}

function renderPolylines(ctx: CanvasRenderingContext2D, lines: LineEvent[]) {
  lines.forEach((line) => {
    if (line.type === "line" && line.dots.length >= 2) {
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(line.dots[0][0], line.dots[0][1]);
      for (let i = 1; i < line.dots.length; i++) {
        ctx.lineTo(line.dots[i][0], line.dots[i][1]);
      }
      ctx.stroke();
    }
  });
}

interface ReadOnlyCanvasProps {
  canvas: (LineEvent | { type: "undo" })[];
  size?: number;
  className?: string;
}

export function ReadOnlyCanvas({ canvas, size = 200, className }: ReadOnlyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = setupCanvas(canvasRef.current, size);
    ctx.clearRect(0, 0, size, size);

    const lines = canvas.filter((item): item is LineEvent => item.type === "line");
    renderPolylines(ctx, lines);
  }, [canvas, size]);

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: "relative" as const,
    background: "#f6eee2",
    borderRadius: "4px",
    boxShadow: `0 2px 8px rgba(0, 0, 0, 0.1)`,
  };

  const canvasStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle} className={className}>
      <canvas ref={canvasRef} style={canvasStyle} />
    </div>
  );
}