import React, { useState, memo } from "react";
import { useUnit } from "effector-react";
import { canvasSize, getSvgPathFromStroke } from "../utils";
import {
  $currentCanvas,
  $currentLine,
  $svgPaths,
  addLine,
  currentLineChanged,
} from "../game.model";
import getStroke from "perfect-freehand";
import { smoothConf } from "../config";

type HistoryItem = [event: string, x?: number, y?: number];

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

export function CanvasSmoth({
  debugMode = false,
}: { debugMode?: boolean } = {}) {
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

    addLine({
      points: [...currentLine.points, [x, y]],
      color: currentLine.color,
      size: currentLine.size,
    });
    // currentLineChanged({
    // });
    setIsDrawing(false);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "500px",
        // width: "100%",
        maxHeight: "100%",
        height: "auto",
        aspectRatio: "1 / 1",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "rgb(236, 240, 241)",
        backgroundColor: "#faf9f5",
        // backgroundColor: "rgb(247, 242, 225)",
      }}
    >
      {!false && (
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
            // display: "block",
            border: "2px dashed #ccc",
            cursor: "crosshair",
            // width: "100%",
            aspectRatio: "1 / 1",
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
          <ExistingLines debugMode={debugMode} />
          {debugMode ? (
            <polyline
              points={currentLine.points.map(([x, y]) => `${x},${y}`).join(" ")}
              stroke={currentLine.color}
              strokeWidth={20}
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <path
              d={getSvgPathFromStroke(
                getStroke(currentLine.points, {
                  ...smoothConf,
                  size: currentLine.size,
                }),
              )}
              fill={currentLine.color}
            />
          )}
        </svg>
      )}
    </div>
  );
}

const ExistingLines = memo(({ debugMode }: { debugMode?: boolean }) => {
  const lines = useUnit($svgPaths);
  const linesRaw = useUnit($currentCanvas);
  // console.log("ExistingLines");

  if (debugMode) {
    return linesRaw.map((line, i) => {
      if (line.type === "line") {
        return (
          <g key={i}>
            <polyline
              points={line.dots.map(([x, y]) => `${x},${y}`).join(" ") || ""}
              stroke={line.color}
              strokeWidth={1}
              strokeLinecap="round"
              fill="none"
            />
            {line.dots.map(([x, y], pointIndex) => (
              <circle
                key={`${i}-${pointIndex}`}
                cx={x}
                cy={y}
                r={2}
                fill="red"
              />
            ))}
          </g>
        );
      }
      return null;
    });
  }

  return lines.map((line, i) => {
    return <path key={i} d={line.d} fill={line.color} />;
  });
});
