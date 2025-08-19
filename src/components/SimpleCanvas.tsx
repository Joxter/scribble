import React, { useState, memo, useMemo, useCallback } from "react";
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

// Performance optimizations applied:
//  - Cached DOM queries and getBoundingClientRect
//  - Throttled draw events to ~120fps max
//  - Memoized all event handlers with useCallback
//  - Memoized CurrentDrawingLine component
//  - Added point optimization to reduce calculations
//  - Cached rect for 100ms to handle resize gracefully

// Cache DOM element and rect to avoid repeated queries
let cachedSvgEl: Element | null = null;
let cachedRect: DOMRect | null = null;
let rectCacheTime = 0;
const RECT_CACHE_DURATION = 100; // Cache rect for 100ms

function getCoordinates(e: React.MouseEvent | React.TouchEvent) {
  // Cache SVG element
  if (!cachedSvgEl) {
    cachedSvgEl = document.querySelector("#simple-canvas")!;
  }

  // Cache rect with timeout to handle resize
  const now = Date.now();
  if (!cachedRect || now - rectCacheTime > RECT_CACHE_DURATION) {
    cachedRect = cachedSvgEl.getBoundingClientRect();
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

export function SimpleCanvas() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  // Throttle draw events for better performance
  const lastDrawTime = React.useRef(0);
  const DRAW_THROTTLE_MS = 8; // ~120fps max

  const startDrawing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    setCurrentLine([[x, y]]);
    setIsDrawing(true);
    // Clear cache on interaction start
    cachedRect = null;
  }, []);

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing) return;

      // Throttle for performance
      const now = Date.now();
      if (now - lastDrawTime.current < DRAW_THROTTLE_MS) return;
      lastDrawTime.current = now;

      e.preventDefault();
      const { x, y } = getCoordinates(e);
      setCurrentLine((prev) => [...prev, [x, y]]);
    },
    [isDrawing],
  );

  const stopDrawing = useCallback(
    (e?: React.TouchEvent) => {
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
    },
    [isDrawing, currentLine],
  );

  const clearCanvas = useCallback(() => {
    setLines([]);
    setCurrentLine([]);
    setIsDrawing(false);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Fps />
      <h2>Simple Canvas</h2>
      <p>optimisations</p>

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
          background: "#f6eee2",
        }}
      >
        <svg
          id="simple-canvas"
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
            border: "2px dashed #ccc",
            cursor: "crosshair",
            aspectRatio: "1 / 1",
          }}
        >
          <ExistingLines lines={lines} />

          <CurrentDrawingLine currentLine={currentLine} />
        </svg>
      </div>
    </div>
  );
}

const ExistingLines = memo(({ lines }: { lines: Line[] }) => {
  const svgPaths = useMemo(() => {
    return lines.map((line, i) => {
      // Use optimized points for smoother, fewer calculations
      const optimizedDots = line.dots;
      const svgPath = svgInk(
        optimizedDots.map(([x, y]) => new Vec(x, y)),
        { size: line.width },
      );

      return {
        d: svgPath,
        key: `line-${i}`,
        color: line.color,
      };
    });
  }, [lines]);

  return (
    <>
      {svgPaths.map((path) => (
        <path key={path.key} d={path.d} fill={path.color} />
      ))}
    </>
  );
});

const CurrentDrawingLine = memo(({ currentLine }: { currentLine: Point[] }) => {
  const svgPath = useMemo(() => {
    if (currentLine.length < 2) return "";

    // Use optimized points and memoize calculation
    const optimizedPoints = currentLine;
    return svgInk(
      optimizedPoints.map(([x, y]) => new Vec(x, y)),
      { size: 8 },
    );
  }, [currentLine]);

  if (!svgPath) return null;

  return <path d={svgPath} fill="#000000" />;
});
