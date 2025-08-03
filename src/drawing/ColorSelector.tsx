import { useUnit } from "effector-react";
import React from "react";
import { $currentLine, currentLineChanged } from "../game.model";

const cellSize = 32;

export function ColorSelector() {
  const colors = [
    "#111111",
    "#34495e",
    "#eeeeee",
    "#ffffff",
    "#8b4513",
    "#fa3224",
    "#ffa729",
    "#ffd129",
    "rgb(20, 133, 68)",
    "#2ecc71",
    "rgb(36, 113, 165)",
    "#3498db",
    "#9b59b6",
    "#ff69b4",
  ];

  const { color: value } = useUnit($currentLine);

  return (
    <div
      style={{
        display: "inline-grid",
        gap: "4px",
        gridTemplateColumns: "min-content 1fr",
      }}
    >
      <div
        style={{
          width: 1.5 * cellSize + "px",
          height: 1.5 * cellSize + "px",
          border: `3px solid #000`,
          backgroundColor: value,
        }}
      >
        {/* {value} */}
      </div>
      <div
        style={{
          display: "grid",
          gap: "1px",
          padding: "1px",
          backgroundColor: "#333",
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(2, ${cellSize}px`,
        }}
      >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => currentLineChanged({ color })}
            style={{
              width: cellSize + "px",
              height: cellSize + "px",
              border: `none`,
              padding: "0",
              // border: "0.5px solid #333",
              backgroundColor: color,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const colors2 = [
  "#111111",
  "#444",
  "#e0e0e0",
  "#ffffff",
  "#8b4513",
  "#ffa729",
  "rgb(192, 16, 33)",
  "#fa3224",
  "rgb(38, 78, 118)",
  "#ffd129",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#ff69b4",
];
