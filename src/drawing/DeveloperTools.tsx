import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $renderMode,
  $debugMode,
  renderModeChanged,
  debugModeToggled,
  $localId,
  $party,
  resetDEMO,
  makeWeDraw,
} from "../game.model";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const renderMode = useUnit($renderMode);
  const localId = useUnit($localId);
  const party = useUnit($party);

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
          <pre style={{ maxWidth: "300px" }}>
            {JSON.stringify(party, null, 2)}
          </pre>
          <p>{localId}</p>

          <div>
            <a href="https://joxter.github.io/scribble/" target="_blank">
              website
            </a>
          </div>
          <div>
            <button onClick={resetDEMO}>reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
