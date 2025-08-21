import React, { useState } from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./Canvas";
import { getUrl, randomFrom } from "../utils";
import { DeveloperTools } from "./DeveloperTools";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import {
  $imChoosingWord,
  $imDrawing,
  chooseWordClicked_DEV,
  newWordSelected,
  $clue,
  $iRevealed,
  $paintingsToCreate,
  createPainting,
} from "../model/game.model";
import css from "./Page.module.css";
import { EnterGuess } from "./EnterGuess.tsx";
import { Messages } from "./Messages.tsx";
import { Fps } from "../components/Fps.tsx";

export function DrawingPage() {
  const [imDrawing, imChoosingWord, clue, iRevealed] = useUnit(
    //
    [$imDrawing, $imChoosingWord, $clue, $iRevealed],
  );
  const paintingsToCreate = useUnit($paintingsToCreate);
  console.log("paintingsToCreate");
  console.log(paintingsToCreate.map((it) => it.word).join("; "));

  return (
    <div className={css.page}>
      <div className={css.header}>
        <div className={css.headerContent}>
          <a href={getUrl()}>Главная</a>
          {imDrawing && <h2>{imDrawing}</h2>}
          <Fps />
        </div>
      </div>

      <div className={css.canvasSection}>
        {imChoosingWord ? (
          <div style={{ width: "100%", aspectRatio: "1" }}>
            <ChooseWord words={imChoosingWord} />
          </div>
        ) : (
          <Canvas />
        )}
      </div>
      <div className={css.footer}>
        {imDrawing && <Tools />}
        {!imDrawing && clue && (
          <div style={{ padding: "4px 12px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <EnterGuess clue={clue} revealed={iRevealed} />
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DeveloperTools />
        </div>
      </div>
      <div className={css.players}>
        <div>
          <button
            onClick={async () => {
              for (let p of paintingsToCreate) {
                await createPainting({
                  canvas: p.events as any[],
                  word: p.word,
                  playerId: p.playerId,
                });
              }
              console.log(`Created paintings: ${paintingsToCreate.length}`);
            }}
          >
            create paintings {paintingsToCreate.length}
          </button>
        </div>
        <ListOfPlayers />
        <GameControls />
        <Messages />
        {/*<DrawParams />*/}
      </div>
    </div>
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
  const imDrawing = useUnit($imDrawing);

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
