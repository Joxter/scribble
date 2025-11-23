import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { $allChatEvents, $currentPlayers } from "../model/game-new.model.ts";

const container = css`
  display: grid;
  align-content: start;
  gap: 4px;
  padding: 4px;
  padding-right: 12px;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  overflow: auto;
  line-height: 1;
  font-size: 14px;
  word-break: break-word;
`;

const messageRevealed = css`
  font-style: italic;
  color: green;
`;

const messageItalic = css`
  font-style: italic;
`;

const wordMask = css`
  letter-spacing: 2px;
`;

const messageUnknown = css`
  color: #888;
`;

export function ChatMessages() {
  const [events, players] = useUnit([$allChatEvents, $currentPlayers]);
  const scrollRef = useAutoScroll(events);

  return (
    <div ref={scrollRef} className={container}>
      {events.slice(-50).map((ev, i) => {
        const key = ev.type + i;
        if (ev.type === "user-message") {
          let { text, playerId, isRevealed } = ev.payload;
          if (isRevealed === "revealed") {
            return (
              <p key={key} className={messageRevealed}>
                <b>{players[playerId].name} отгадал(а) слово!</b>
              </p>
            );
          }

          if (isRevealed === "almost") {
            return (
              <p key={key} className={messageRevealed}>
                <b>{players[playerId].name} почти отгадал(а)!</b>
              </p>
            );
          }

          return (
            <p key={key}>
              <b>{players[playerId].name}:</b> {text}
            </p>
          );
        }

        if (ev.type === "new-selected-word") {
          let { word } = ev.payload;
          return (
            <p key={key} className={messageItalic}>
              Слово выбрано!{" "}
              <b className={wordMask}>
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

        if (ev.type === "drawing-ended") {
          return (
            <div key={key}>
              <p className={messageItalic}>
                {ev.payload.reason === "all-revealed" && "Все отгадали!"}
                {ev.payload.reason === "timeout" && "Время вышло!"}{" "}
                {players[ev.payload.nextPlayerId].name} выбирает новое слово!
              </p>
              <ul style={{ margin: 0 }}>
                {Object.entries(ev.payload.revealed).map(([key, time]) => {
                  return (
                    <li key={key}>
                      {players[key]?.name || "no name"}{" "}
                      {new Date(time).toISOString().slice(11, -5)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        // @ts-ignore
        const t = ev.type;

        return (
          <p key={key} className={messageUnknown}>
            [{t}]
          </p>
        );
      })}
    </div>
  );
}
