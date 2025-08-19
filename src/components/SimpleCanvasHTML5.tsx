import React, { useState, useCallback, useRef, useEffect } from "react";
import { Fps } from "./Fps.tsx";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";

const canvasSize = 600;

type Point = [number, number];
type Line = {
  dots: Point[];
  color: string;
  width: number;
};

// SVG path parser for Canvas 2D context
function drawSVGPath(ctx: CanvasRenderingContext2D, pathData: string) {
  const path = new Path2D(pathData);
  ctx.fill(path);
}

// Cache for better performance
let cachedCanvasEl: HTMLCanvasElement | null = null;
let cachedRect: DOMRect | null = null;
let rectCacheTime = 0;
const RECT_CACHE_DURATION = 100;

function getCoordinates(e: React.MouseEvent | React.TouchEvent) {
  if (!cachedCanvasEl) {
    cachedCanvasEl = document.querySelector("#html5-canvas") as HTMLCanvasElement;
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

export function SimpleCanvasHTML5() {
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
      const svgPath = svgInk(
        line.dots.map(([x, y]) => new Vec(x, y)),
        { size: line.width }
      );
      
      ctx.fillStyle = line.color;
      drawSVGPath(ctx, svgPath);
    });

    // Draw current line being drawn
    if (currentLine.length >= 2) {
      const svgPath = svgInk(
        currentLine.map(([x, y]) => new Vec(x, y)),
        { size: 8 }
      );
      
      ctx.fillStyle = "#000000";
      drawSVGPath(ctx, svgPath);
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
      <h2>HTML5 Canvas Version</h2>
      <p>Using Canvas 2D + svgInk via Path2D</p>

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
          id="html5-canvas"
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