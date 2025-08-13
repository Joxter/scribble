import React, { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { Canvas as CanvasOld } from "./CanvasOld";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import { Link } from "wouter";
import {
  resetDEMO,
  undoClicked,
  $renderMode,
  $party,
  $imDrawing,
  $artistName,
  $myName,
} from "../game.model";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelectorOld } from "./ColorSelectorOld";
import { DeveloperTools } from "./DeveloperTools";
import { useUnit } from "effector-react";
import { Tools } from "./Tools";
import { ListOfPlayers } from "./ListOfPlayers";
import css from "./Page.module.css";

export function DrawingPage() {
  const [show, setShow] = useState(false);
  const renderMode = useUnit($renderMode);
  const party = useUnit($party);
  const imDrawing = useUnit($imDrawing);
  const myName = useUnit($myName);
  const artistName = useUnit($artistName);

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
          <p>я {myName}</p>
          {imDrawing ? (
            <b>я рисую!</b>
          ) : artistName ? (
            <b>{artistName} рисует</b>
          ) : (
            <b>никто не рисует</b>
          )}
        </div>
      </div>

      <div className={css.canvasSection}>
        {renderMode === "old" ? <CanvasOld /> : <Canvas />}
      </div>
      <div className={css.footer}>
        <Tools />
        <ListOfPlayers />
      </div>
    </div>
  );
}
