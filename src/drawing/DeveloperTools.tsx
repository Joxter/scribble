import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $localId, $party, resetDEMO } from "../model/game.model.ts";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($party);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Dev {isCollapsed ? "▼" : "▲"}
      </button>
      {!isCollapsed && (
        <div>
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
