import React from "react";
import { useUnit } from "effector-react";
import { $svgCurrentLine } from "../model/game.model.ts";

export function Perf() {
  const line = useUnit($svgCurrentLine);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "150px",
        backgroundColor: "#fff",
        color: "#333",
        border: "1px solid #333",
        padding: "2px 4px",
        borderRadius: "4px",
        fontSize: "14px",
        fontFamily: "monospace",
        zIndex: 1000,
        userSelect: "none",
      }}
    >
      old: {line?.perf.oldTime} new: {line?.perf.newTime}
    </div>
  );
}
