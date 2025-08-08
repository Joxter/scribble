import { useUnit } from "effector-react";
import React from "react";
import { $currentLine, currentLineChanged } from "../game.model";

export function ColorSelectorOld() {
  const colors = [
    "#111111",
    "#34495e",
    "#faf9f5",
    "#ffffff",
    "#8b4513",
    "#fa3224",
    "#ffa729",
    "#ffd129",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#ff69b4",
  ];

  const { color: value } = useUnit($currentLine);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/*
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
        {/* {value} * /}
      </div>
      */}
      {colors.map((color, i) => (
        <button
          key={color}
          onClick={() => currentLineChanged({ color })}
          style={{
            width: "32px",
            height: "32px",
            // border: color === "#ffffff" ? `1px solid #333` : `none`,
            // border: false ? `1px solid #333` : `none`,
            border: i === 2 || i === 3 ? `1px solid #333` : `none`,
            borderRadius: "100%",
            // borderRadius: "8px",
            padding: "0",
            // backgroundColor: color === value ? color : "#ffffff",
            backgroundColor: color,
            cursor: "pointer",
            boxShadow:
              color === value
                ? "0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)"
                : "none",
          }}
        />
      ))}
    </div>
  );
}
