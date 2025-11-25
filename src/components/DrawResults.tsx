import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $choosingWord,
  $currentPlayers,
  $localId,
  $newParty,
} from "../model/game-new.model.ts";
import { ChooseWord } from "./ChooseWord.tsx";

const container = css`
  border: 1px solid #999;
  padding: 16px;
  display: grid;
  justify-items: start;
  align-content: start;
  gap: 8px;
`;

const currentUser = css`
  font-weight: bold;
`;

type Props = {
  // gameProgress: GameProgress;
};

export function DrawResults({}: Props) {
  const { gameProgress } = useUnit($newParty);
  const currentPlayers = useUnit($currentPlayers);
  const choosingWord = useUnit($choosingWord);
  const localId = useUnit($localId);

  const lastResults =
    gameProgress.at(-1)?.at(-1) || gameProgress.at(-2)?.at(-1);

  if (!lastResults) {
    return <div className={container}>no last result</div>;
  }

  if (choosingWord.choose && choosingWord.who) {
    return (
      <div className={container}>
        {choosingWord.iam ? (
          <ChooseWord words={choosingWord.words} />
        ) : (
          <p>{currentPlayers[choosingWord.who].name} выбирает слово</p>
        )}
        <br />
        <h3>Очки за "рисунок-нейм":</h3>
        <ul>
          {Object.entries(lastResults.scores).map(([userId, timestamp]) => {
            const iso = new Date(timestamp).toTimeString().split(" ")[0];

            // показывать накопленные очки + полученные
            return (
              <li
                key={userId}
                className={userId === localId ? currentUser : ""}
              >
                {currentPlayers[userId].name}: {iso}
              </li>
            );
          })}
        </ul>

        <p>тут будет рисунок и реакции</p>
      </div>
    );
  }

  if (!lastResults) {
    return <div className={container}>something went wrong</div>;
  }
}
