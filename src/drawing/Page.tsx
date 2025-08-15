import React, { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { randomFrom } from "../utils";
import { alisaWords } from "../dictionary";
import { DeveloperTools } from "./DeveloperTools";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import { DrawParams } from "../DrawParams";
import css from "./Page.module.css";

export function DrawingPage() {
  const [show, setShow] = useState(false);

  const [word, setWord] = useState(randomFrom(alisaWords));

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  if (!show) {
    return <p>no show</p>;
  }

  return (
    <div className={css.page}>
      <div className={css.header}>
        <div className={css.headerContent}>
          <a href="/">ЛОГО</a>
          <p>
            {word} ({word.length})
          </p>
          <button onClick={() => setWord(randomFrom(alisaWords))}>
            обновить
          </button>
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
