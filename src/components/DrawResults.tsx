import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $choosingWord } from "../model/game-new.model.ts";
import { ChooseWord } from "./ChooseWord.tsx";
import { PaintingReactions } from "./PaintingReactions.tsx";
import { ScoreList } from "./ScoreList.tsx";

/* квадрат в размер холста: выбор слова стоит там же, где палитра художника */
const panel = css`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 14px 26px -18px rgba(30, 40, 50, 0.4);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const scores = css`
  flex: 1;
  padding: 10px 16px;
  overflow-y: auto;
`;

/* высота одна и та же с кнопками слов и со строкой «выбирает слово…»:
   список очков над ней не дёргается между раундами. на узком экране кнопки
   переносятся на вторую строку — тогда секция растёт, а не режет их */
const chooseSection = css`
  border-top: 1px solid var(--sunken);
  padding: 12px 16px;
  min-height: 108px;
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export function DrawResults() {
  const choosingWord = useUnit($choosingWord);

  if (!choosingWord.choose) return null;

  return (
    <div className={panel}>
      <PaintingReactions />

      <div className={scores}>
        <ScoreList />
      </div>

      <div className={chooseSection}>
        <ChooseWord />
      </div>
    </div>
  );
}
