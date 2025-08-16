import React, { useState } from "react";
import { useUnit } from "effector-react";
import { Canvas } from "./Canvas";
import { getUrl, randomFrom } from "../utils";
import { DeveloperTools } from "./DeveloperTools";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import { DrawParams } from "../DrawParams";
import { $imDrawing, makeWeDraw } from "../model/game.model";
import css from "./Page.module.css";
import { ru } from "../../dictionaries/ru.ts";

export function DrawingPage() {
  const [word, setWord] = useState(randomFrom(ru));
  const imDrawing = useUnit($imDrawing);

  return (
    <div className={css.page}>
      <div className={css.header}>
        <div className={css.headerContent}>
          <a href={getUrl()}>ЛОГО</a>
          <p>
            {word} ({word.length})
          </p>
          <button onClick={() => setWord(randomFrom(ru))}>новое слово</button>
        </div>
      </div>

      <div className={css.canvasSection}>
        <Canvas />
      </div>
      <div className={css.footer}>
        {imDrawing ? (
          <Tools />
        ) : (
          <div
            style={{
              display: "flex",
              padding: "8px",
              justifyContent: "center",
            }}
          >
            <button onClick={makeWeDraw}>я рисую</button>
          </div>
        )}
      </div>
      <div className={css.players}>
        <ListOfPlayers />
        {/*<DrawParams />*/}
        <DeveloperTools />
      </div>
    </div>
  );
}
