import React, { useState, memo } from "react";
import { useUnit } from "effector-react";
import { canvasSize, getSvgPathFromStroke } from "../utils";
import {
  $currentCanvas,
  $currentLine,
  $debugMode,
  $imDrawing,
  $renderMode,
  $svgPaths,
  addBucket,
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

export function Canvas() {
  const [isDrawing, setIsDrawing] = useState(false);

  const imDrawing = useUnit($imDrawing);
  const currentLine = useUnit($currentLine);
  const debugMode = useUnit($debugMode);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (!imDrawing) return;

    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      points: [[x, y]],
    });
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!imDrawing) return;
    if (!isDrawing) return;
    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      points: [...currentLine.points, [x, y]],
    });
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!imDrawing) return;
    if (!isDrawing) return;
    if (e) e.preventDefault();

    const { x, y } = getCoordinates(e);

    addLine({
      points: [...currentLine.points, [x, y]],
      color: currentLine.color,
      size: currentLine.size,
      isBucket: false,
    });
    // currentLineChanged({
    // });
    setIsDrawing(false);
  };

  const onBucket = (e?: React.TouchEvent) => {
    if (!imDrawing) return;
    if (!currentLine.isBucket) return;
    console.log("onBucket", currentLine);
    if (e) e.preventDefault();

    const { x, y } = getCoordinates(e);

    addBucket({ x, y, color: currentLine.color });
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
          onClick={onBucket}
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
          <ExistingLines />
          <path
            d={getSvgPathFromStroke(
              getStroke(currentLine.points, {
                ...smoothConf,
                size: currentLine.size,
              }),
            )}
            fill={currentLine.color}
          />
          {debugMode && <DebugOverlay />}
        </svg>
      )}
    </div>
  );
}

const ExistingLines = memo(() => {
  const lines = useUnit($svgPaths);

  return lines.map((line, i) => {
    return <path key={"ExistingLines" + i} d={line.d} fill={line.color} />;
  });
});

const DebugOverlay = memo(() => {
  const linesRaw = useUnit($currentCanvas);

  return linesRaw.map((line, i) => {
    if (line.type === "line") {
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
    }
    return null;
  });
});
