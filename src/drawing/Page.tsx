import React, { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { Canvas as CanvasOld } from "./CanvasOld";
import { randomFrom } from "../utils";
import { alisaWords } from "../dictionary";
import { Link } from "wouter";
import { $renderMode } from "../game.model";
import { DeveloperTools } from "./DeveloperTools";
import { useUnit } from "effector-react";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import { DrawParams } from "../DrawParams";
import css from "./Page.module.css";

export function DrawingPage() {
  const [show, setShow] = useState(false);
  const renderMode = useUnit($renderMode);

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
      <DeveloperTools />
      <div className={css.header}>
        <div className={css.headerContent}>
          <Link href="/scribble/">ЛОГО</Link>
          <p>
            {word} ({word.length})
          </p>
          <button onClick={() => setWord(randomFrom(alisaWords))}>
            обновить
          </button>
        </div>
      </div>

      <div className={css.canvasSection}>
        {renderMode === "old" ? <CanvasOld /> : <Canvas />}
      </div>
      <div className={css.footer}>
        <Tools />
      </div>
      <div className={css.players}>
        <ListOfPlayers />
        <DrawParams />
      </div>
    </div>
  );
}
