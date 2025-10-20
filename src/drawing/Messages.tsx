import { useUnit } from "effector-react";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { $allChatEvents, $newParty } from "../model/game-new.model.ts";

export function Messages() {
  const [events, { players }] = useUnit([$allChatEvents, $newParty]);
  const scrollRef = useAutoScroll(events);

  const playersMap = Object.fromEntries(
    players.map((it) => {
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
        if (ev.type === "user-message") {
          let { text, playerId, isRevealed } = ev.payload;
          if (isRevealed === "revealed") {
            return (
              <p key={key} style={{ fontStyle: "italic", color: "green" }}>
                <b>{playersMap[playerId]} отгадал слово!</b>
              </p>
            );
          }
          return (
            <p key={key} style={{}}>
              <b>{playersMap[playerId]}:</b> {text}
            </p>
          );
        }

        if (ev.type === "new-selected-word") {
          let { word } = ev.payload;
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
