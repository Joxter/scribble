import React, { useState, memo } from "react";
import { useUnit } from "effector-react";
import { canvasSize, getSvgPathFromStroke } from "../utils";
import {
  $currentLine,
  $debugMode,
  $imDrawing,
  $polylinePaths,
  $rawPath,
  $renderMode,
  $smoothConf,
  $svgPaths,
  addLine,
  currentLineChanged,
} from "../game.model";
import getStroke from "perfect-freehand";

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
  const smoothConf = useUnit($smoothConf);
  const renderMode = useUnit($renderMode);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (!imDrawing) return;

    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({ dots: [[x, y]] });
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!imDrawing) return;
    if (!isDrawing) return;
    e.preventDefault();

    const { x, y } = getCoordinates(e);

    currentLineChanged({
      dots: [...currentLine.dots, [x, y]],
    });
  };

  const stopDrawing = (e?: React.TouchEvent) => {
    if (!imDrawing) return;
    if (!isDrawing) return;
    if (e) e.preventDefault();

    const { x, y } = getCoordinates(e as any);

    addLine({
      dots: [...currentLine.dots, [x, y]],
      color: currentLine.color,
      width: currentLine.width,
    });
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
        <ExistingLines />
        {renderMode === "polyline" ? (
          <polyline
            points={currentLine.dots.map(([x, y]) => `${x},${y}`).join(" ")}
            stroke={currentLine.color}
            strokeWidth={currentLine.width}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d={getSvgPathFromStroke(
              getStroke(currentLine.dots, {
                ...smoothConf,
                size: currentLine.width,
              }),
            )}
            fill={currentLine.color}
          />
        )}
        {debugMode && <DebugOverlay />}
      </svg>
    </div>
  );
}

const ExistingLines = memo(() => {
  const lines = useUnit($svgPaths);
  const polylines = useUnit($polylinePaths);
  const renderMode = useUnit($renderMode);

  if (renderMode === "polyline") {
    return polylines.map((line, i) => {
      return (
        <polyline
          key={"ExistingPolylines" + i}
          points={line.points}
          stroke={line.color}
          strokeWidth={line.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    });
  }

  return lines.map((line, i) => {
    return <path key={"ExistingLines" + i} d={line.d} fill={line.color} />;
  });
});

const DebugOverlay = memo(() => {
  const linesRaw = useUnit($rawPath);

  return linesRaw.map((line, i) => {
    return (
      <g key={"debug" + i}>
        <polyline
          points={line.map(([x, y]) => `${x},${y}`).join(" ") || ""}
          stroke={"white"}
          strokeWidth={2}
          strokeDasharray="2,5"
          fill="none"
        />
        {line.map(([x, y], pointIndex) => {
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
  });
});
