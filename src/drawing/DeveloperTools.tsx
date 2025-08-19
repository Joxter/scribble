import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $allRoomEvents,
  $localId,
  $party,
  deleteRoomEvents_DEV,
  resetDEMO,
} from "../model/game.model.ts";
import { canvasSize, eventsToGameState } from "../utils.ts";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($party);

  // const events = useUnit($allRoomEvents);
  // const [gameState, oldPaints] = eventsToGameState(
  //   events,
  //   ["foo"],
  //   { lang: "RU", rounds: 1000, suggestions: 3, canvasSize: 600 },
  //   "foo|bar|baz",
  // );

  // console.log("gameState");
  // console.log(gameState);
  // console.log(oldPaints);

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
