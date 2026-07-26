import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $choosingWord } from "../model/game-new.model.ts";
import { ChooseWord } from "./ChooseWord.tsx";
import { PaintingReactions } from "./PaintingReactions.tsx";
import { ScoreList } from "./ScoreList.tsx";

const panel = css`
  height: 100%;
  min-height: 360px;
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

const chooseSection = css`
  border-top: 1px solid var(--sunken);
  padding: 12px 16px;
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
