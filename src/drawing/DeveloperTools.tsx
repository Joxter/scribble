import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $renderMode,
  $debugMode,
  renderModeChanged,
  debugModeToggled,
  $localId,
} from "../game.model";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const renderMode = useUnit($renderMode);
  const debugMode = useUnit($debugMode);
  const localId = useUnit($localId);

  const handleCanvasModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    renderModeChanged(e.target.value as "normal" | "old");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        fontSize: "14px",
        zIndex: 1000,
      }}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          padding: "6px 10px",
          fontSize: "12px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Dev {isCollapsed ? "▼" : "▲"}
      </button>

      {!isCollapsed && (
        <div
          style={{
            marginTop: "8px",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>{localId}</p>
          <div style={{ marginBottom: "8px" }}>
            <select
              value={renderMode}
              onChange={handleCanvasModeChange}
              style={{
                padding: "2px 6px",
                fontSize: "12px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            >
              <option value="normal">Normal</option>
              <option value="old">Canvas Old</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: "12px" }}>
              <input
                type="checkbox"
                checked={debugMode}
                onChange={(e) => debugModeToggled(e.target.checked)}
                style={{ marginRight: "6px" }}
              />
              Debug overlay
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
