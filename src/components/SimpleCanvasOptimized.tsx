import React, { useState, useCallback, useRef, useEffect } from "react";
import { Fps } from "./Fps.tsx";
import { getStrokeOutlineTracks } from "../freehand/getStrokeOutlinePoints.ts";
import { getStrokePoints } from "../freehand/getStrokePoints.ts";
import { setStrokePointRadii } from "../freehand/setStrokePointRadii.ts";
import { Vec } from "../freehand/Vec.ts";

const canvasSize = 600;

type Point = [number, number];
type Line = {
  dots: Point[];
  color: string;
  width: number;
};

// Direct Canvas stroke rendering (bypassing SVG)
function drawStroke(ctx: CanvasRenderingContext2D, points: Vec[], options: { size: number }) {
  if (points.length === 0) return;
  
  if (points.length === 1) {
    // Single point - draw circle
    ctx.beginPath();
    ctx.arc(points[0].x, points[0].y, options.size / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  // Get stroke outline using the freehand library
  const strokePoints = getStrokePoints(points, options);
  setStrokePointRadii(strokePoints, options);
  const { left, right } = getStrokeOutlineTracks(strokePoints, options);

  if (left.length === 0 || right.length === 0) return;

  // Draw the stroke outline
  ctx.beginPath();
  
  // Start at first left point
  ctx.moveTo(left[0].x, left[0].y);
  
  // Draw left side
  for (let i = 1; i < left.length; i++) {
    const prev = left[i - 1];
    const curr = left[i];
    const mid = { x: (prev.x + curr.x) / 2, y: (prev.y + curr.y) / 2 };
    ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
  }
  
  // End cap (semi-circle)
  const lastPoint = strokePoints[strokePoints.length - 1];
  const lastRadius = lastPoint.radius;
  const direction = lastPoint.vector.clone().per().neg();
  ctx.arc(
    lastPoint.point.x,
    lastPoint.point.y,
    lastRadius,
    Math.atan2(-direction.y, -direction.x),
    Math.atan2(direction.y, direction.x)
  );
  
  // Draw right side (reversed)
  right.reverse();
  for (let i = 1; i < right.length; i++) {
    const prev = right[i - 1];
    const curr = right[i];
    const mid = { x: (prev.x + curr.x) / 2, y: (prev.y + curr.y) / 2 };
    ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
  }
  
  // Start cap (semi-circle)
  const firstPoint = strokePoints[0];
  const firstRadius = firstPoint.radius;
  const startDirection = firstPoint.vector.clone().per();
  ctx.arc(
    firstPoint.point.x,
    firstPoint.point.y,
    firstRadius,
    Math.atan2(-startDirection.y, -startDirection.x),
    Math.atan2(startDirection.y, startDirection.x)
  );
  
  ctx.closePath();
  ctx.fill();
}

// Cache for performance
let cachedCanvasEl: HTMLCanvasElement | null = null;
let cachedRect: DOMRect | null = null;
let rectCacheTime = 0;
const RECT_CACHE_DURATION = 100;

function getCoordinates(e: React.MouseEvent | React.TouchEvent) {
  if (!cachedCanvasEl) {
    cachedCanvasEl = document.querySelector("#optimized-canvas") as HTMLCanvasElement;
  }
  
  const now = Date.now();
  if (!cachedRect || now - rectCacheTime > RECT_CACHE_DURATION) {
    cachedRect = cachedCanvasEl.getBoundingClientRect();
    rectCacheTime = now;
  }

  const k = canvasSize / cachedRect.width;

  if ("touches" in e) {
    const touch = e.touches[0] || e.changedTouches[0];
    return {
      x: (touch.clientX - cachedRect.left) * k,
      y: (touch.clientY - cachedRect.top) * k,
    };
  } else {
    return {
      x: (e.clientX - cachedRect.left) * k,
      y: (e.clientY - cachedRect.top) * k,
    };
  }
}

export function SimpleCanvasOptimized() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  
  // Throttling
  const lastDrawTime = useRef(0);
  const DRAW_THROTTLE_MS = 8;

  // Redraw entire canvas when lines change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = "#f6eee2";
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Draw existing lines
    lines.forEach((line) => {
      ctx.fillStyle = line.color;
      drawStroke(
        ctx,
        line.dots.map(([x, y]) => new Vec(x, y)),
        { size: line.width }
      );
    });

    // Draw current line being drawn
    if (currentLine.length >= 2) {
      ctx.fillStyle = "#000000";
      drawStroke(
        ctx,
        currentLine.map(([x, y]) => new Vec(x, y)),
        { size: 8 }
      );
    }
  }, [lines, currentLine]);

  const startDrawing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    setCurrentLine([[x, y]]);
    setIsDrawing(true);
    cachedRect = null;
  }, []);

  const draw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    
    const now = Date.now();
    if (now - lastDrawTime.current < DRAW_THROTTLE_MS) return;
    lastDrawTime.current = now;
    
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    setCurrentLine((prev) => [...prev, [x, y]]);
  }, [isDrawing]);

  const stopDrawing = useCallback((e?: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();

    if (currentLine.length > 1) {
      setLines((prev) => [
        ...prev,
        {
          dots: currentLine,
          color: "#000000",
          width: 8,
        },
      ]);
    }
    setCurrentLine([]);
    setIsDrawing(false);
  }, [isDrawing, currentLine]);

  const clearCanvas = useCallback(() => {
    setLines([]);
    setCurrentLine([]);
    setIsDrawing(false);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Fps />
      <h2>Optimized Canvas Version</h2>
      <p>Direct stroke rendering (no SVG)</p>

      <button
        onClick={clearCanvas}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Clear Canvas
      </button>

      <div
        style={{
          margin: "0 auto",
          maxWidth: "500px",
          maxHeight: "100%",
          height: "auto",
          aspectRatio: "1 / 1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <canvas
          ref={canvasRef}
          id="optimized-canvas"
          width={canvasSize}
          height={canvasSize}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
          style={{
            touchAction: "none",
            border: "2px dashed #ccc",
            cursor: "crosshair",
            aspectRatio: "1 / 1",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}