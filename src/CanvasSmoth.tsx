import React, { useRef, useEffect, useState, memo } from "react";
import { canvasSize, getSvgPathFromStroke, historyToLines } from "./utils";
import { useUnit } from "effector-react";
import { $currentLine, $svgPaths, currentLineChanged } from "./game.model";
import getStroke from "perfect-freehand";

type HistoryItem = [event: string, x?: number, y?: number];

const easingFunctions = {
  linear: (t: number) => t,
};

let cnt = 0;

function getCoordinates(e: React.MouseEvent | React.TouchEvent) {
  const svgEl = document.querySelector("#player-canvas")!;
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

export function CanvasSmoth() {
  const [isDrawing, setIsDrawing] = useState(false);

  const currentLine = useUnit($currentLine);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      points: [[x, y]],
    });
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      points: [...currentLine.points, [x, y]],
    });
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      points: [...currentLine.points, [x, y]],
    });
    setIsDrawing(false);
  };

  return (
    <div>
      <p>cnt: {cnt++}</p>
      <svg
        id="player-canvas"
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
          border: "1px solid #ccc",
          cursor: "crosshair",
          width: "100%",
          aspectRatio: "1",
        }}
      >
        {false && (
          <>
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </>
        )}
        <ExistingLines />
        <path
          d={getSvgPathFromStroke(
            getStroke(currentLine.points, {
              size: currentLine.size,
              simulatePressure: false,
              smoothing: 1,
              thinning: 0.1,
              streamline: 0,
              easing: easingFunctions.linear,
            }),
          )}
          fill={currentLine.color}
        />{" "}
      </svg>
    </div>
  );
}

const ExistingLines = memo(() => {
  const lines = useUnit($svgPaths);
  console.log("ExistingLines");

  return lines.map((line, i) => {
    return <path key={i} d={line.d} fill={line.color} />;
  });
});
