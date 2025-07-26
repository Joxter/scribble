import { useUnit } from "effector-react";
import React from "react";
import { $currentLine, currentLineChanged } from "../game.model";

export function ColorSelector() {
  const colors = [
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#A52A2A", // Brown
  ];

  const { color: value } = useUnit($currentLine);

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => currentLineChanged({ color })}
          style={{
            width: "32px",
            height: "37px",
            border: "none",
            borderTop: value === color ? "5px solid #007bff" : `5px solid #fff`,
            padding: "0",
            backgroundColor: color,
            cursor: "pointer",
            // borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
