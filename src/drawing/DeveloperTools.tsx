import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $localId,
  $party,
  clearCanvasClicked,
  resetDEMO,
} from "../model/game.model.ts";

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
          <div>
            <a href="https://joxter.github.io/scribble/" target="_blank">
              website
            </a>
          </div>
          <p>localId: {localId}</p>

          <div>
            <button onClick={clearCanvasClicked}>Удалить все сообщения</button>
            <br />
            <br />
            <button onClick={resetDEMO}>перезагрузить всю комнату</button>
          </div>
          <pre style={{ maxWidth: "300px" }}>
            {JSON.stringify(party, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
