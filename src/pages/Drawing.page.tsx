import React from "react";
import { useUnit } from "effector-react";
import { css } from "@linaria/core";
import { Canvas } from "../drawing/Canvas.tsx";
import { Tools } from "../drawing/Tools.tsx";
import { RoomHeader } from "../drawing/RoomHeader.tsx";
import { PlayerFigures } from "../drawing/PlayerFigures.tsx";
import {
  $allChatEvents,
  $choosingWord,
  $currentPlayers,
  $drawing,
} from "../model/game-new.model.ts";
import { GameInputField } from "../drawing/GameInputField.tsx";
import { ChatMessages } from "../drawing/ChatMessages.tsx";
import { Fps } from "../components/Fps.tsx";
import { PageLayout } from "../components/PageLayout.tsx";
import { DrawResults } from "../components/DrawResults.tsx";
import { Timer } from "../components/Timer.tsx";

const page = css`
  display: flex;
  gap: 16px;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 807px) {
    flex-direction: column;
    align-items: center;
  }
`;

const leftColumn = css`
  width: var(--col-main);
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 807px) {
    width: 100%;
    max-width: var(--col-main);
  }
`;

const rightColumn = css`
  width: var(--col-side);
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 807px) {
    width: 100%;
    max-width: var(--col-main);
  }
`;

const chatWindow = css`
  flex: 1;
  min-height: 240px;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const header = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px;
  height: var(--row-head);
  flex: none;
  overflow: hidden;
`;

const artistLine = css`
  font-size: 20px;
  font-weight: 700;
  color: var(--slate);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & b {
    font-weight: 900;
    color: var(--ink);
  }
`;

const secretWord = css`
  letter-spacing: 0.5px;
`;

const roundTitle = css`
  font-size: 20px;
  font-weight: 900;
  color: var(--ink);
  flex: none;
`;

const roundSub = css`
  font-size: 15px;
  color: var(--slate);
  font-weight: 700;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & b {
    color: var(--ink);
    font-weight: 900;
  }
`;

export function DrawingPage() {
  const [drawing, choosingWord] = useUnit([$drawing, $choosingWord]);

  return (
    <PageLayout>
      <Fps />
      <div className={page}>
        <div className={leftColumn}>
          <div className={header}>
            {choosingWord.choose ? <RoundEndTitle /> : <DrawingTitle />}
          </div>

          {choosingWord.choose ? <DrawResults /> : <Canvas />}

          {/* художник рисует — вместо ввода палитра; в остальное время можно писать в чат */}
          {drawing.iam ? <Tools /> : <GameInputField />}
        </div>

        <div className={rightColumn}>
          <RoomHeader />
          <div className={chatWindow}>
            <ChatMessages />
            <PlayerFigures />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function DrawingTitle() {
  const [drawing, players] = useUnit([$drawing, $currentPlayers]);

  if (!drawing.drawing) return null;

  return (
    <>
      <span className={artistLine}>
        {drawing.iam ? (
          <>
            рисуете: <b className={secretWord}>{drawing.word}</b>
          </>
        ) : (
          <>
            рисует <b>{players[drawing.who]?.name || "…"}</b>
          </>
        )}
      </span>
      <span style={{ marginLeft: "auto" }}>
        <Timer />
      </span>
    </>
  );
}

function RoundEndTitle() {
  const events = useUnit($allChatEvents);

  const lastEnded = events.findLast((e) => e.type === "drawing-ended");
  const lastWord = events.findLast((e) => e.type === "new-selected-word");

  const title = !lastEnded
    ? "Новый раунд!"
    : lastEnded.payload.reason === "timeout"
      ? "Время вышло!"
      : "Все отгадали!";

  return (
    <>
      <span className={roundTitle}>{title}</span>
      {lastEnded && lastWord && (
        <span className={roundSub}>
          слово было <b>{lastWord.payload.word}</b>
        </span>
      )}
    </>
  );
}
