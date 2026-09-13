import React, { useEffect, useRef, useState } from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $allChatEvents,
  $currentPlayers,
  $playerColors,
} from "../model/game-new.model.ts";
import type { UserMessageEvent } from "../types.ts";

/* на мобилке чат уехал наверх, за пределы экрана: догадки всплывают поверх
   холста и гаснут. На широком экране чат рядом, дублировать его незачем */
const root = css`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  pointer-events: none;

  @media (min-width: 816px) {
    display: none;
  }
`;

const bubble = css`
  max-width: 100%;
  display: flex;
  gap: 7px;
  align-items: baseline;
  background-color: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 6px 11px;
  font-size: 13px;
  box-shadow: 0 8px 18px -12px rgba(30, 40, 50, 0.6);
  animation: guessFade 5s forwards;

  & b {
    font-weight: 800;
    flex: none;
  }

  & > span:last-child {
    color: var(--slate);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes guessFade {
    0% {
      opacity: 0;
      transform: translateY(6px);
    }
    6%,
    80% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
    }
  }
`;

const bubbleAlmost = css`
  background-color: var(--warn-bg);
  border-color: var(--warn-border);
  color: var(--warn-text);
`;

const bubbleRevealed = css`
  background-color: var(--success-bg);
  border-color: var(--success-border);
  color: var(--success-text);
  font-weight: 800;
`;

const dot = css`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex: none;
  transform: translateY(2px);
`;

/* столько же живёт анимация guessFade */
const LIFETIME = 5000;
const MAX_SHOWN = 3;

export function GuessOverlay() {
  const [events, players, colors] = useUnit([
    $allChatEvents,
    $currentPlayers,
    $playerColors,
  ]);
  // null до первого прохода: вся история на момент открытия страницы —
  // не новость, всплывать ей незачем
  const seen = useRef<Set<string> | null>(null);
  const [shown, setShown] = useState<UserMessageEvent[]>([]);

  useEffect(() => {
    const known = seen.current;
    const messages = events.filter(
      (e): e is UserMessageEvent => e.type === "user-message",
    );

    if (!known) {
      seen.current = new Set(messages.map((m) => m.id));
      return;
    }

    const fresh = messages.filter((m) => !known.has(m.id));
    if (!fresh.length) return;

    fresh.forEach((m) => known.add(m.id));
    setShown((s) => [...s, ...fresh].slice(-MAX_SHOWN));

    // таймер не чистим: эффект перезапускается на каждое обновление комнаты,
    // и уборка отменяла бы снятие пузыря, который уже догорел
    const ids = new Set(fresh.map((m) => m.id));
    setTimeout(() => {
      setShown((s) => s.filter((m) => !ids.has(m.id)));
    }, LIFETIME);
  }, [events]);

  return (
    <div className={root}>
      {shown.map((m) => {
        const { playerId, text, isRevealed } = m.payload;
        const name = players[playerId]?.name || "неизвестный";

        if (isRevealed === "revealed") {
          return (
            <div key={m.id} className={`${bubble} ${bubbleRevealed}`}>
              <span>✓ {name} отгадал(а) слово!</span>
            </div>
          );
        }

        return (
          <div
            key={m.id}
            className={`${bubble} ${isRevealed === "almost" ? bubbleAlmost : ""}`}
          >
            {isRevealed === "almost" ? (
              <span>
                <b>{name}</b> — почти отгадал(а)!
              </span>
            ) : (
              <>
                <span
                  className={dot}
                  style={{ backgroundColor: colors[playerId] }}
                />
                <b>{name}</b>
                <span>{text}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
