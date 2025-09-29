import React, { useState } from "react";
import { useUnit } from "effector-react";
import {
  $localId,
  $paintingsToCreate,
  $party,
  deleteRoomEvents_DEV,
  pres,
  resetDEMO,
} from "../model/game.model.ts";
import { createPainting } from "../model/all-paintings.model.ts";
import { Link } from "wouter";

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($party);
  const paintingsToCreate = useUnit($paintingsToCreate);
  const [topicVal] = useUnit([pres.$topic]);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Dev {isCollapsed ? "▼" : "▲"}
      </button>

      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => pres.myTopic()}>myTopic</button>
      </div>
      {!isCollapsed && (
        <div style={{ maxWidth: "90vw", overflow: "scroll" }}>
          {/*<pre>{JSON.stringify(presVal)}</pre>*/}
          <div>
            <Link href="https://joxter.github.io/scribble/" target="_blank">
              website
            </Link>
          </div>
          <p>localId: {localId}</p>

          <div>
            {paintingsToCreate.length > 0 && (
              <button
                onClick={async () => {
                  for (let p of paintingsToCreate) {
                    await createPainting({
                      canvas: p.events as any[],
                      word: p.word,
                      playerId: p.playerId,
                    });
                  }
                  console.log(`Created paintings: ${paintingsToCreate.length}`);
                  deleteRoomEvents_DEV();
                }}
              >
                создать картины ({paintingsToCreate.length}) и удалить сообщения
              </button>
            )}
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
