import React from "react";
import { useUnit } from "effector-react";
import { Canvas } from "../drawing/Canvas.tsx";
import { DeveloperTools } from "../components/DeveloperTools.tsx";
import { Tools } from "../drawing/Tools.tsx";
import { ListOfPlayers } from "../drawing/ListOfPlayers.tsx";
import { $choosingWord, $drawing, party } from "../model/game-new.model.ts";
import { css } from "@linaria/core";
import { GameInputField } from "../drawing/GameInputField.tsx";
import { ChatMessages } from "../drawing/ChatMessages.tsx";
import { Fps } from "../components/Fps.tsx";
import { PageLayout } from "../components/PageLayout.tsx";
import { DrawResults } from "../components/DrawResults.tsx";

const page = css`
  display: grid;
  gap: 8px;
  width: 100%;
  max-width: 500px;
  grid-template-areas:
    "header"
    "canvas"
    "footer"
    "players";
  grid-template-rows: min-content 1fr min-content min-content;
  margin: 0 auto;

  @media (width > 808px) {
    grid-template-areas:
      "header ."
      "canvas players"
      "footer .";
    grid-template-columns: 500px 300px;
    grid-template-rows: auto 500px auto;
    max-width: none;
  }
`;

const header = css`
  grid-area: header;
`;

const canvasSection = css`
  grid-area: canvas;
  width: 100%;
  padding: 8px;
`;

const footer = css`
  grid-area: footer;
`;

const players = css`
  grid-area: players;
  display: grid;
  gap: 8px;
  overflow: hidden;
`;

const fullWidthAspect = css`
  width: 100%;
  aspect-ratio: 1;
`;

const drawingToolsContainer = css`
  padding: 4px 12px;
`;

const centeredFlex = css`
  display: flex;
  justify-content: center;
`;

const textCenter = css`
  text-align: center;
`;

export function DrawingPage() {
  const [drawing, choosingWord] = useUnit([$drawing, $choosingWord]);

  return (
    <PageLayout>
      <Fps />
      <div className={page}>
        <div className={header}>
          <Timeout />
          {drawing.iam && (
            <p className={textCenter}>
              <b>{drawing.word}</b>
            </p>
          )}
        </div>

        <div className={canvasSection}>
          {choosingWord.choose ? (
            <div className={fullWidthAspect}>
              <DrawResults />
            </div>
          ) : (
            <Canvas />
          )}
        </div>
        <div className={footer}>
          {drawing.iam ? (
            <Tools />
          ) : drawing.drawing ? (
            <div className={drawingToolsContainer}>
              <div className={centeredFlex}>
                <GameInputField
                  clue={drawing.clue}
                  secret={drawing.word || ""}
                  revealed={"none"}
                />
              </div>
            </div>
          ) : null}

          <DeveloperTools />
        </div>
        <div className={players}>
          <ListOfPlayers />
          <ChatMessages />
        </div>
      </div>
    </PageLayout>
  );
}

function Timeout() {
  const timeout = useUnit(party.$timeout);

  if (timeout === null) {
    return null;
  }

  return <p>time: {timeout.left} sec</p>;
}
