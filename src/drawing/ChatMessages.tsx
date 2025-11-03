import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { useAutoScroll } from "../hooks/useAutoScroll";
import { $allChatEvents, $newParty } from "../model/game-new.model.ts";
import { $localId } from "../model/game.model.ts";

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
  const [events, { players }] = useUnit([$allChatEvents, $newParty]);
  const scrollRef = useAutoScroll(events);

  const playersMap = Object.fromEntries(
    players.map((it) => {
      return [it.id, it.name];
    }),
  );

  return (
    <div ref={scrollRef} className={container}>
      {events.slice(-50).map((ev, i) => {
        const key = ev.type + i;
        if (ev.type === "user-message") {
          let { text, playerId, isRevealed } = ev.payload;
          if (isRevealed === "revealed") {
            return (
              <p key={key} className={messageRevealed}>
                <b>{playersMap[playerId]} отгадал(а) слово!</b>
              </p>
            );
          }

          if (isRevealed === "almost") {
            return (
              <p key={key} className={messageRevealed}>
                <b>{playersMap[playerId]} почти отгадал(а)!</b>
              </p>
            );
          }

          return (
            <p key={key}>
              <b>{playersMap[playerId]}:</b> {text}
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

        if (ev.type === "choosing-word") {
          let { playerId } = ev;
          return (
            <p key={key} className={messageItalic}>
              {playersMap[playerId]} выбирает слово
            </p>
          );
        }

        return (
          <p key={key} className={messageUnknown}>
            [{ev.type}]
          </p>
        );
      })}
    </div>
  );
}
