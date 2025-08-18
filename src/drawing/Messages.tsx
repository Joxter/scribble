import { useUnit } from "effector-react";
import { $party, $allChatEvents } from "../model/game.model.ts";
import { useAutoScroll } from "../hooks/useAutoScroll";

export function Messages() {
  const [events, { players2 }] = useUnit([$allChatEvents, $party]);
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
      {events.slice(-50).map((ev, i) => {
        const key = ev.type + i;
        if (ev.type === "guess") {
          let { text, player, isRevealed } = ev;
          if (isRevealed === "revealed") {
            return (
              <p key={key} style={{ fontStyle: "italic", color: "green" }}>
                <b>{playersMap[player]} отгадал слово!</b>
              </p>
            );
          }
          return (
            <p key={key} style={{}}>
              <b>{playersMap[player]}:</b> {text}
            </p>
          );
        }

        if (ev.type === "new-word") {
          let { word } = ev;
          return (
            <p key={key} style={{ fontStyle: "italic" }}>
              Слово выбрано!{" "}
              <b
                style={{
                  letterSpacing: "2px",
                }}
              >
                {word.replace(/\S/g, "_")} (
                {word
                  .split(" ")
                  .map((it) => it.length)
                  .join(" ")}
                )
              </b>
            </p>
          );
        }

        if (ev.type === "choosing-word") {
          let { playerId } = ev;
          return (
            <p key={key} style={{ fontStyle: "italic" }}>
              {playersMap[playerId]} выбирает слово
            </p>
          );
        }

        return (
          <p key={key} style={{ color: "#888" }}>
            [{ev.type}]
          </p>
        );
      })}
    </div>
  );
}
