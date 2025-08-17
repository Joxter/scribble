import { useUnit } from "effector-react";
import { $party, $allGuessEvents } from "../model/game.model.ts";
import { useAutoScroll } from "../hooks/useAutoScroll";

export function Messages() {
  const [events, { players2 }] = useUnit([$allGuessEvents, $party]);
  const scrollRef = useAutoScroll(events);

  const playersMap = Object.fromEntries(
    (players2 || []).map((it) => {
      return [it.id, it.name];
    }),
  );

  return (
    <div
      ref={scrollRef}
      style={{
        display: "grid",
        alignContent: "start",
        gap: "4px",
        padding: "4px",
        paddingRight: "12px",
        borderRadius: "4px",
        backgroundColor: "#fff",
        color: "#333",
        border: "1px solid #ddd",
        overflow: "auto",
        //
        lineHeight: "1",
        fontSize: "14px",
        wordBreak: "break-word",
      }}
    >
      {events.slice(-50).map(({ text, player, id }) => {
        return (
          <p key={id} style={{}}>
            <b>{playersMap[player]}:</b> {text}
          </p>
        );
      })}
    </div>
  );
}
