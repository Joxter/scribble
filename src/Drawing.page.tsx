import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./drawing/Canvas.tsx";
import { DeveloperTools } from "./drawing/DeveloperTools.tsx";
import { Tools } from "./drawing/Tools.tsx";
import { ListOfPlayers } from "./drawing/ListOfPlayers.tsx";
import { $clue, $iRevealed, setRoomId } from "./model/game.model.ts";
import css from "./drawing/Page.module.css";
import { GameInputField } from "./drawing/GameInputField.tsx";
import { ChatMessages } from "./drawing/ChatMessages.tsx";
import { Fps } from "./components/Fps.tsx";
import {
  $choosingWord,
  $currentPlayers,
  $drawing,
  $newParty,
} from "./model/game-new.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { DrawResults } from "./components/DrawResults.tsx";

export function DrawingPage() {
  const party = useUnit($newParty);
  const players = useUnit($currentPlayers);

  const roomId = party.id;

  const [drawing, choosingWord, clue, iRevealed] = useUnit([
    $drawing,
    $choosingWord,
    $clue,
    $iRevealed,
  ]);

  // Update the room ID in the store when the URL parameter changes
  useEffect(() => {
    if (roomId) {
      setRoomId(roomId);
    }
  }, [roomId]);

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
                  clue={clue}
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
