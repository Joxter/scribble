import React, { useState } from "react";
import { Canvas } from "./Canvas";
import { getUrl, randomFrom } from "../utils";
import { DeveloperTools } from "./DeveloperTools";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import { DrawParams } from "../DrawParams";
import css from "./Page.module.css";
import { ru } from "../../dictionaries/ru.ts";

export function DrawingPage() {
  const [word, setWord] = useState(randomFrom(ru));

  return (
    <div className={css.page}>
      <div className={css.header}>
        <div className={css.headerContent}>
          <a href={getUrl()}>ЛОГО</a>
          <p>
            {word} ({word.length})
          </p>
          <button onClick={() => setWord(randomFrom(ru))}>другое слово</button>
        </div>
      </div>

      <div className={css.canvasSection}>
        <Canvas />
      </div>
      <div className={css.footer}>
        <Tools />
      </div>
      <div className={css.players}>
        <ListOfPlayers />
        {/*<DrawParams />*/}
        <DeveloperTools />
      </div>
    </div>
  );
}
