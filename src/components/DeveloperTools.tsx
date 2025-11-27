import React, { useState } from "react";
import { useUnit } from "effector-react";
import { Link } from "wouter";
import {
  currentLine,
  $localId,
  $logiSmol,
  $newParty,
} from "../model/game-new.model.ts";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($newParty);
  const currentDrawing = useUnit(currentLine.$currentDrawing);
  const logiSmol = useUnit($logiSmol);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Dev {isCollapsed ? "▼" : "▲"}
      </button>

      {!isCollapsed && (
        <div style={{ maxWidth: "90vw", overflow: "scroll" }}>
          <div style={{ display: "grid", border: "1px solid red" }}>
            {logiSmol.map((v, i) => {
              return <p key={i}>{JSON.stringify(v)}</p>;
            })}
          </div>
          <p>dots.len: {currentDrawing.at(-1)?.dots.length}</p>
          <p>color: {currentDrawing.at(-1)?.color}</p>
          <p>width: {currentDrawing.at(-1)?.width}</p>
          <pre>{JSON.stringify(party.gameState, null, 2)}</pre>
          <div>
            <Link href="https://joxter.github.io/scribble/" target="_blank">
              website
            </Link>
          </div>
          <p>localId: {localId}</p>

          <pre style={{ maxWidth: "300px" }}>
            {JSON.stringify(party, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
