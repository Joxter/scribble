import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $localId,
  $party,
  deleteRoomEvents_DEV,
  resetDEMO,
} from "../model/game.model.ts";
import { Link } from "wouter";
import { $currentLine, $newParty } from "../model/game-new.model.ts";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($newParty);
  const currentLine = useUnit($currentLine);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Dev {isCollapsed ? "▼" : "▲"}
      </button>

      {!isCollapsed && (
        <div style={{ maxWidth: "90vw", overflow: "scroll" }}>
          <pre>dots: {currentLine.dots.length}</pre>
          <pre>{JSON.stringify(currentLine)}</pre>
          <pre>{JSON.stringify(party.gameState, null, 2)}</pre>
          <div>
            <Link href="https://joxter.github.io/scribble/" target="_blank">
              website
            </Link>
          </div>
          <p>localId: {localId}</p>

          <div>
            <button onClick={deleteRoomEvents_DEV}>
              Удалить все сообщения
            </button>
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
