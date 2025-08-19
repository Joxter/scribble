import React, { useState, memo, useMemo, useCallback } from "react";
import { Fps } from "./Fps.tsx";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";
import { optimizeLine } from "../utils.ts";

const canvasSize = 600;

type Point = [number, number];
type Line = {
  dots: Point[];
  color: string;
  width: number;
};

function getCoordinates(e: React.MouseEvent | React.TouchEvent) {
  const svgEl = document.querySelector("#simple-canvas")!;
  const rect = svgEl.getBoundingClientRect();

  const k = canvasSize / rect.width;

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
}

export function SimpleCanvas() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [lines, setLines] = useState<Line[]>([]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const { x, y } = getCoordinates(e);
    setCurrentLine([[x, y]]);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const { x, y } = getCoordinates(e);
    setCurrentLine((prev) => [...prev, [x, y]]);
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();

    if (currentLine.length > 1) {
      setLines((prev) => [
        ...prev,
        {
          dots: currentLine,
          color: "#000000",
          width: 2,
        },
      ]);
    }
    setCurrentLine([]);
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setLines([]);
    setCurrentLine([]);
    setIsDrawing(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Fps />
      <h2>Simple Canvas</h2>

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
      const svgPath = svgInk(
        line.dots.map(([x, y]) => new Vec(x, y)),
        { size: 8 },
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

const CurrentDrawingLine = ({ currentLine }: { currentLine: Point[] }) => {
  // const svgPath = useMemo(() => {
  //   if (currentLine.length < 2) return "";
  //
  //   return ;
  // }, [currentLine]);
  //

  if (currentLine.length < 2) return null;

  return (
    <path
      d={svgInk(
        currentLine.map(([x, y]) => new Vec(x, y)),
        { size: 8 },
      )}
      fill="#000000"
    />
  );
};
