import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $choosingWord,
  $currentPlayers,
  newWordSelected,
} from "../model/game-new.model.ts";
import { Button } from "./Button.tsx";

const root = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const header = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const title = css`
  font-size: 14px;
  font-weight: 900;
`;

const timerChip = css`
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: #aab0b8;
  background-color: var(--sunken);
  border: 1px dashed var(--line-strong);
  border-radius: 10px;
  padding: 2px 12px;
`;

const words = css`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const wordButton = css`
  flex: 1;
  min-width: 120px;
`;

const waiting = css`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--muted);
`;

export function ChooseWord() {
  const choosingWord = useUnit($choosingWord);
  const currentPlayers = useUnit($currentPlayers);

  if (!choosingWord.choose || !choosingWord.who) return null;

  if (!choosingWord.iam) {
    const chooserName = currentPlayers[choosingWord.who]?.name || "";
    return <p className={waiting}>{chooserName} выбирает слово…</p>;
  }

  return (
    <div className={root}>
      <div className={header}>
        <span className={title}>Ваш ход! Выберите слово</span>
        <span className={timerChip} title="таймер выбора слова — скоро">
          --:--
        </span>
      </div>
      <div className={words}>
        {(choosingWord.words || []).map((w) => (
          <Button
            key={w}
            variant="secondary"
            className={wordButton}
            onClick={() => newWordSelected(w)}
          >
            {w}
          </Button>
        ))}
      </div>
    </div>
  );
}
