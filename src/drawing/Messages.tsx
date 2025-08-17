import { useUnit } from "effector-react";
import { $party, $allGuessEvents } from "../model/game.model.ts";

export function Messages() {
  const [events, { players2 }] = useUnit([$allGuessEvents, $party]);

  const playersMap = Object.fromEntries(
    (players2 || []).map((it) => {
      return [it.id, it.name];
    }),
  );

  return (
    <div>
      <div
        style={{
          display: "grid",
          alignContent: "start",
          gap: "4px",
          padding: "4px",
          borderRadius: "4px",
          backgroundColor: "#fff",
          color: "#333",
          border: "1px solid #ddd",
        }}
      >
        {events.map(({ text, player, id }) => {
          return (
            <p
              key={id}
              style={{
                lineHeight: "1",
                fontSize: "14px",
              }}
            >
              <b>{playersMap[player]}:</b> {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
