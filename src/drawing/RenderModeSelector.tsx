import React from "react";
import { useUnit } from "effector-react";
import { $renderMode, renderModeChanged } from "../game.model";

export function RenderModeSelector() {
  const renderMode = useUnit($renderMode);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    renderModeChanged(e.target.value as "normal" | "debug" | "old");
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <label
        htmlFor="render-mode"
        style={{ marginRight: "8px", fontSize: "14px" }}
      >
        Render:
      </label>
      <select
        id="render-mode"
        value={renderMode}
        onChange={handleChange}
        style={{
          padding: "4px 8px",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <option value="normal">Normal</option>
        <option value="debug">Debug</option>
        <option value="old">Canvas Old</option>
      </select>
    </div>
  );
}
