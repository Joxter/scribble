import React, { useRef, useEffect } from "react";
import { canvasSize } from "../utils.ts";
import { CanvasLine } from "../types.ts";

const PIXEL_RATIO = window.devicePixelRatio || 1;

function setupCanvas(canvas: HTMLCanvasElement, size: number = canvasSize) {
  const ctx = canvas.getContext("2d")!;

  canvas.width = size * PIXEL_RATIO;
  canvas.height = size * PIXEL_RATIO;
  ctx.scale(PIXEL_RATIO, PIXEL_RATIO);

  return ctx;
}

function renderCanvas(
  ctx: CanvasRenderingContext2D,
  lines: CanvasLine[],
  displaySize: number,
) {
  const scale = displaySize / canvasSize;
  ctx.scale(scale, scale);

  lines.forEach((line) => {
    if (line.dots.length === 1) {
      ctx.fillStyle = line.color;
      ctx.beginPath();
      ctx.arc(line.dots[0][0], line.dots[0][1], line.width / 2, 0, 2 * Math.PI);
      ctx.fill();
    } else {
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

type Props = {
  canvas: CanvasLine[];
  // внутреннее разрешение отрисовки; при fill не совпадает с экранным размером
  size?: number;
  // растянуть по ширине контейнера, оставаясь квадратом
  fill?: boolean;
  className?: string;
};

export function ReadOnlyCanvas({
  canvas,
  size = 200,
  fill,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = setupCanvas(canvasRef.current, size);

    ctx.clearRect(0, 0, size, size);
    renderCanvas(ctx, canvas, size);
  }, [canvas, size]);

  const containerStyle = {
    width: fill ? "100%" : `${size}px`,
    height: fill ? "auto" : `${size}px`,
    aspectRatio: fill ? ("1" as const) : undefined,
    position: "relative" as const,
    background: "#f6eee2",
    borderRadius: "9px",
    boxShadow: "inset 0 0 0 1px #e8dfcb",
  };

  const canvasStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "9px",
  };

  return (
    <div style={containerStyle} className={className}>
      <canvas ref={canvasRef} style={canvasStyle} />
    </div>
  );
}
