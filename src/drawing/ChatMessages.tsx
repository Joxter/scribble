import React from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { useAutoScroll } from "../hooks/useAutoScroll";
import {
  $allChatEvents,
  $currentPlayers,
  $playerColors,
} from "../model/game-new.model.ts";

const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 14px;
  overflow-y: auto;
`;

/* сообщения прижаты к низу: пока их мало, пустое место остаётся сверху */
const list = css`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  word-break: break-word;
`;

const system = css`
  text-align: center;
  font-size: 11px;
  color: var(--muted);
  font-weight: 700;
`;

const systemDanger = css`
  color: var(--danger-text);
  font-weight: 800;
`;

const message = css`
  display: flex;
  gap: 7px;
  align-items: baseline;

  & b {
    font-weight: 800;
    font-size: 13px;
    flex: none;
  }

  & span:last-child {
    font-size: 13px;
    color: var(--slate);
  }
`;

const dot = css`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: none;
  transform: translateY(2px);
`;

const pill = css`
  border-radius: 9px;
  padding: 5px 10px;
  font-size: 12px;
`;

const pillAlmost = css`
  background-color: var(--warn-bg);
  color: var(--warn-text);
`;

const pillRevealed = css`
  background-color: var(--success-bg);
  color: var(--success-text);
  font-weight: 800;
`;

const clueMask = css`
  font-family: var(--font-mono);
  letter-spacing: 2px;
`;

export function ChatMessages() {
  const [events, players, colors] = useUnit([
    $allChatEvents,
    $currentPlayers,
    $playerColors,
  ]);
  const scrollRef = useAutoScroll(events);

  function nameOf(playerId: string) {
    return players[playerId]?.name || "неизвестный";
  }

  return (
    <div ref={scrollRef} className={container}>
      <div className={list}>
        {events.slice(-50).map((ev, i) => {
          const key = ev.type + i;

          if (ev.type === "user-message") {
            const { text, playerId, isRevealed } = ev.payload;

            if (isRevealed === "revealed") {
              return (
                <div key={key} className={`${pill} ${pillRevealed}`}>
                  ✓ {nameOf(playerId)} отгадал(а) слово!
                </div>
              );
            }

            if (isRevealed === "almost") {
              return (
                <div key={key} className={`${pill} ${pillAlmost}`}>
                  <b>{nameOf(playerId)}</b> — почти отгадал(а)!
                </div>
              );
            }

            return (
              <div key={key} className={message}>
                <span
                  className={dot}
                  style={{ backgroundColor: colors[playerId] }}
                />
                <b>{nameOf(playerId)}</b>
                <span>{text}</span>
              </div>
            );
          }

          if (ev.type === "new-selected-word") {
            const { word } = ev.payload;

            return (
              <p key={key} className={system}>
                Слово выбрано!{" "}
                <b className={clueMask}>
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
            const timeout = ev.payload.reason === "timeout";

            return (
              <p
                key={key}
                className={`${system} ${timeout ? systemDanger : ""}`}
              >
                {timeout ? "Время вышло!" : "Все отгадали!"}{" "}
                {nameOf(ev.payload.nextPlayerId)} выбирает новое слово
              </p>
            );
          }

          if (ev.type === "game-started") {
            return (
              <p key={key} className={system}>
                Игра началась! {nameOf(ev.payload.playerId)} выбирает первое
                слово
              </p>
            );
          }

          if (ev.type === "game-finished") {
            return (
              <p key={key} className={system}>
                Игра окончена!
              </p>
            );
          }

          // неизвестное событие — показываем тип, чтобы заметить
          const unknown: { type: string } = ev;

          return (
            <p key={key} className={system}>
              [{unknown.type}]
            </p>
          );
        })}
      </div>
    </div>
  );
}
