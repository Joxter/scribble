import React from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { useAutoScroll } from "../hooks/useAutoScroll";
import {
  $allChatEvents,
  $canCancelGame,
  $currentPlayers,
  $kickPrompts,
  $newParty,
  $playerColors,
  kickPromptClosed,
} from "../model/game-new.model.ts";
import { kickPlayer, restartParty } from "../db-things.ts";
import { Button } from "../components/Button.tsx";
import { mergeChatTimeline } from "../utils.ts";
import { AllChatMessages } from "../types.ts";

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

/* интерактивный блок в ленте: видит его только тот, кто открыл, в базу он не
   пишется, но стоит среди сообщений и уезжает вверх вместе с ними */
const actionCard = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 8px 10px;
  border: 1px dashed var(--line-strong);
  border-radius: 10px;
  font-size: 11px;
  color: var(--muted);
  font-weight: 700;
  text-align: center;
`;

const actionButtons = css`
  display: flex;
  gap: 6px;
`;

export function ChatMessages() {
  const [events, players, colors, party, canCancel, prompts] = useUnit([
    $allChatEvents,
    $currentPlayers,
    $playerColors,
    $newParty,
    $canCancelGame,
    $kickPrompts,
  ]);
  const closePrompt = useUnit(kickPromptClosed);
  const scrollRef = useAutoScroll(events.length + prompts.length);

  function nameOf(playerId: string) {
    return players[playerId]?.name || "неизвестный";
  }

  // игрок мог уйти сам, пока хост думал — тогда и спрашивать не о чем
  const timeline = mergeChatTimeline(
    events,
    prompts.filter((p) => players[p.playerId]),
  );

  function renderEvent(ev: AllChatMessages, key: string) {
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
          <span className={dot} style={{ backgroundColor: colors[playerId] }} />
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
        <p key={key} className={`${system} ${timeout ? systemDanger : ""}`}>
          {timeout ? "Время вышло!" : "Все отгадали!"}{" "}
          {nameOf(ev.payload.nextPlayerId)} выбирает новое слово
        </p>
      );
    }

    if (ev.type === "game-started") {
      return (
        <p key={key} className={system}>
          Игра началась! {nameOf(ev.payload.playerId)} выбирает первое слово
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
  }

  return (
    <div ref={scrollRef} className={container}>
      <div className={list}>
        {timeline.slice(-50).map((item) => {
          if ("prompt" in item) {
            const { playerId } = item.prompt;

            return (
              <div key={"kick" + playerId} className={actionCard}>
                <span>
                  <b>{nameOf(playerId)}</b> — кикнуть из игры? Вернуться по
                  ссылке уже не выйдет
                </span>
                <div className={actionButtons}>
                  <Button
                    variant="danger"
                    size={1}
                    onClick={() => {
                      if (party) kickPlayer(party.id, playerId);
                      closePrompt(playerId);
                    }}
                  >
                    Кикнуть
                  </Button>
                  <Button
                    variant="secondary"
                    size={1}
                    onClick={() => closePrompt(playerId)}
                  >
                    Отмена
                  </Button>
                </div>
              </div>
            );
          }

          return renderEvent(item.ev, item.ev.type + item.i);
        })}

        {canCancel && party && (
          <div className={actionCard}>
            <span>Начали раньше времени? Игру ещё можно отменить</span>
            <Button
              variant="secondary"
              size={1}
              onClick={() => restartParty(party)}
            >
              Вернуть в лобби
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
