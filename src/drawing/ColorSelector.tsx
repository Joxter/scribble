import { useUnit } from "effector-react";
import React from "react";
import { $currentLine, currentLineChanged } from "../game.model";

export function ColorSelector() {
  const colors = [
    "#111111",
    "#34495e",
    "#8b4513",
    //
    "#fa3224",
    "#ffa729",
    "#ffd129",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#ff69b4",
    "#ecf0f1",
    "#ffffff",
  ];

  const { color: value } = useUnit($currentLine);

  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <div
        style={{
          width: "26px",
          height: "26px",
          border: `3px solid #000`,
          borderRadius: "2px",
          // padding: "0",
          backgroundColor: value,
        }}
      >
        {/* {value} */}
      </div>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => currentLineChanged({ color })}
          style={{
            width: "24px",
            height: "24px",
            // border: color === "#ffffff" ? `1px solid #333` : `none`,
            border: 1 ? `1px solid #333` : `none`,
            // borderRadius: "100%",
            borderRadius: "8px",
            padding: "0",
            // backgroundColor: color === value ? color : "#ffffff",
            backgroundColor: color,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}
