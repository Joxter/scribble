import React from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./drawing/Canvas.tsx";
import { DeveloperTools } from "./components/DeveloperTools.tsx";
import { Tools } from "./drawing/Tools.tsx";
import { ListOfPlayers } from "./drawing/ListOfPlayers.tsx";
import { $choosingWord, $drawing } from "./model/game-new.model.ts";
import css from "./drawing/Page.module.css";
import { GameInputField } from "./drawing/GameInputField.tsx";
import { ChatMessages } from "./drawing/ChatMessages.tsx";
import { Fps } from "./components/Fps.tsx";
import { PageLayout } from "./components/PageLayout.tsx";
import { DrawResults } from "./components/DrawResults.tsx";

export function DrawingPage() {
  const iRevealed = ""; // todo
  const clue = ""; // todo
  const [drawing, choosingWord] = useUnit([$drawing, $choosingWord]);

  return (
    <PageLayout>
      <Fps />
      <div className={css.page}>
        <div className={css.header}>
          {drawing.iam && (
            <p style={{ textAlign: "center" }}>
              <b>{drawing.word}</b>
            </p>
          )}
        </div>

        <div className={css.canvasSection}>
          {choosingWord.choose ? (
            <div style={{ width: "100%", aspectRatio: "1" }}>
              <DrawResults />
            </div>
          ) : (
            <Canvas />
          )}
        </div>
        <div className={css.footer}>
          {drawing.iam ? (
            <Tools />
          ) : drawing.drawing ? (
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GameInputField
                  clue={""}
                  secret={drawing.word || ""}
                  revealed={iRevealed}
                />
              </div>
            </div>
          ) : null}

          <DeveloperTools />
        </div>
        <div className={css.players}>
          <ListOfPlayers />
          <ChatMessages />
        </div>
      </div>
    </PageLayout>
  );
}
