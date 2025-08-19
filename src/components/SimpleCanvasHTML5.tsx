import React, { useState, useRef, useEffect, useCallback } from "react";
import { Fps } from "./Fps.tsx";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";

const CANVAS_SIZE = 600;

type Point = [number, number];
type Line = {
  dots: Point[];
  color: string;
  width: number;
};

export function SimpleCanvasHTML5() {
  const canvasLinesRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  const getCoordinates = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();
      const scale = CANVAS_SIZE / rect.width;

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

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    lines.forEach((line) => {
      const svgPath = svgInk(
        line.dots.map(([x, y]) => new Vec(x, y)),
        { size: line.width },
      );

      ctx.fillStyle = line.color;
      ctx.fill(new Path2D(svgPath));
    });
  }, [lines]);

  // Render current line to top canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    if (currentLine.length >= 2) {
      const svgPath = svgInk(
        currentLine.map(([x, y]) => new Vec(x, y)),
        { size: 8 },
      );

      ctx.fillStyle = "#000000";
      ctx.fill(new Path2D(svgPath));
    }
  }, [currentLine]);

  const startDrawing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const { x, y } = getCoordinates(e);
      setCurrentLine([[x, y]]);
      setIsDrawing(true);
    },
    [getCoordinates],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();

      const { x, y } = getCoordinates(e);
      setCurrentLine((prev) => [...prev, [x, y]]);
    },
    [isDrawing, getCoordinates],
  );

  const stopDrawing = useCallback(
    (e?: React.TouchEvent) => {
      if (!isDrawing) return;
      if (e) e.preventDefault();

      if (currentLine.length > 1) {
        setLines((prev) => [
          ...prev,
          { dots: currentLine, color: "#000000", width: 8 },
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
    <div className="canvas-container">
      <Fps />
      <h2>HTML5 Canvas Version</h2>
      <p>Dual-canvas optimized rendering</p>

      <button onClick={clearCanvas} className="clear-button">
        Clear Canvas
      </button>

      <div className="canvas-wrapper">
        <canvas
          ref={canvasLinesRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="canvas-layer"
        />
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
          className="canvas-layer canvas-interactive"
        />
      </div>

      <style>{`
        .canvas-container {
          padding: 20px;
          text-align: center;
        }

        .clear-button {
          margin-bottom: 20px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(238, 90, 90, 0.3);
        }

        .clear-button:hover {
          background: linear-gradient(135deg, #ee5a5a, #dd4b4b);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(238, 90, 90, 0.4);
        }

        .clear-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(238, 90, 90, 0.3);
        }

        .canvas-wrapper {
          margin: 0 auto;
          max-width: 500px;
          aspect-ratio: 1 / 1;
          position: relative;
          background: #f6eee2;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .canvas-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          touch-action: none;
        }

        .canvas-interactive {
          cursor: crosshair;
        }

        h2 {
          margin: 0 0 8px 0;
          color: #333;
          font-weight: 600;
        }

        p {
          margin: 0 0 20px 0;
          color: #666;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
