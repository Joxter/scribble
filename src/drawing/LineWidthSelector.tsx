import React from "react";
import { $currentLine, currentLineChanged } from "../game.model";
import { useUnit } from "effector-react";

export function LineWidthSelector() {
  const { size: value } = useUnit($currentLine);

  const widths = [3, 5, 8, 12, 18, 25];

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {widths.map((width) => (
        <button
          key={width}
          onClick={() => currentLineChanged({ size: width })}
          style={{
            width: "32px",
            height: "32px",
            border: "none",
            padding: "0",
            backgroundColor: value === width ? "#007bff" : "#eee",
            cursor: "pointer",
            display: "flex",
          }}
        >
          <div
            style={{
              width: `${Math.max(width, 2)}px`,
              height: `${Math.max(width, 2)}px`,
              backgroundColor: "#333",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </button>
      ))}
    </div>
  );
}
