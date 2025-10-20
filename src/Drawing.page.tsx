import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./drawing/Canvas.tsx";
import { DeveloperTools } from "./drawing/DeveloperTools.tsx";
import { Tools } from "./drawing/Tools.tsx";
import { ListOfPlayers } from "./drawing/ListOfPlayers.tsx";
import { $clue, $iRevealed, setRoomId } from "./model/game.model.ts";
import css from "./drawing/Page.module.css";
import { EnterGuess } from "./drawing/EnterGuess.tsx";
import { Messages } from "./drawing/Messages.tsx";
import { Fps } from "./components/Fps.tsx";
import { $choosingWord, $drawing, $newParty } from "./model/game-new.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";
import { ChooseWord } from "./drawing/ChooseWord.tsx";

export function DrawingPage() {
  const party = useUnit($newParty);

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
          {choosingWord.choose && choosingWord.iam ? (
            <div style={{ width: "100%", aspectRatio: "1" }}>
              <ChooseWord words={choosingWord.words} />
            </div>
          ) : choosingWord.choose && !choosingWord.iam ? (
            <div style={{ width: "100%", aspectRatio: "1" }}>
              <p>{choosingWord.who} выбирает слово!</p>
            </div>
          ) : (
            <Canvas />
          )}
        </div>
        <div className={css.footer}>
          {drawing.iam ? (
            <Tools />
          ) : (
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <EnterGuess clue={clue} revealed={iRevealed} />
              </div>
            </div>
          )}

          <DeveloperTools />
        </div>
        <div className={css.players}>
          <ListOfPlayers />
          <Messages />
        </div>
      </div>
    </PageLayout>
  );
}
