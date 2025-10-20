import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./drawing/Canvas.tsx";
import { DeveloperTools } from "./drawing/DeveloperTools.tsx";
import { Tools } from "./drawing/Tools.tsx";
import { ListOfPlayers } from "./drawing/ListOfPlayers.tsx";
import {
  chooseWordClicked_DEV,
  newWordSelected,
  $clue,
  $iRevealed,
  setRoomId,
} from "./model/game.model.ts";
import css from "./drawing/Page.module.css";
import { EnterGuess } from "./drawing/EnterGuess.tsx";
import { Messages } from "./drawing/Messages.tsx";
import { Fps } from "./components/Fps.tsx";
import {
  $choosingWord,
  $imDrawing,
  $newParty,
} from "./model/game-new.model.ts";
import { PageLayout } from "./components/PageLayout.tsx";

export function DrawingPage() {
  const party = useUnit($newParty);

  const roomId = party.id;

  const [imDrawing, choosingWord, clue, iRevealed] = useUnit([
    $imDrawing,
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
      <div className={css.page}>
        <div className={css.header}>
          <div className={css.headerContent}>
            {imDrawing && <h2>{imDrawing}</h2>}
            {/*
            <Perf />
            */}
            <Fps />
          </div>
        </div>

        <div className={css.canvasSection}>
          {choosingWord.choose && choosingWord.iam ? (
            <div style={{ width: "100%", aspectRatio: "1" }}>
              <ChooseWord words={choosingWord.words} />
            </div>
          ) : choosingWord.choose && !choosingWord.iam ? (
            <div style={{ width: "100%", aspectRatio: "1" }}>
              <p>{choosingWord.who} выбирает</p>
            </div>
          ) : (
            <Canvas />
          )}
        </div>
        <div className={css.footer}>
          {imDrawing && <Tools />}
          {!imDrawing ? (
            <div style={{ padding: "4px 12px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <EnterGuess clue={clue} revealed={iRevealed} />
              </div>
            </div>
          ) : null}

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

function ChooseWord({ words }: { words: string[] }) {
  return (
    <div
      style={{
        backgroundColor: "#ddd",
        height: "100%",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {words.map((w, i) => {
        return (
          <button key={i} type="button" onClick={() => newWordSelected(w)}>
            {w}
          </button>
        );
      })}
    </div>
  );
}

function GameControls() {
  return (
    <div
      style={
        {
          //  display: "flex", flexWrap: "wrap", gap: "8px"
        }
      }
    >
      {/*
      <button onClick={makeWeDraw_DEV} disabled={imDrawing}>
        я рисую
      </button>
      <button onClick={noDraw} disabled={!imDrawing}>
        я отгадываю
      </button>
      */}
      <button onClick={chooseWordClicked_DEV}>выбрать слово</button>
    </div>
  );
}
