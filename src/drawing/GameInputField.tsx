import React, { useState } from "react";
import { css } from "@linaria/core";
import { messageSent } from "../model/game-new.model.ts";
import { calcRevealed } from "../utils.ts";

const containerBase = css`
  display: grid;
  gap: 0px 8px;
  font-family: monospace;
  letter-spacing: 2px;
`;

const textBase = css`
  padding: 0 4px;
`;

const textRevealed = css`
  color: green;
  text-align: center;
`;

const inputField = css`
  outline: none;
  width: 100%;
  font: inherit;
  letter-spacing: inherit;
`;

type Props = {
  clue: string | null;
  revealed: string;
  secret: string;
};

export function GameInputField({ revealed, secret, clue }: Props) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    messageSent({ guess: guess.trim() });
    if (calcRevealed(secret, guess) === "almost") {
    } else {
      setGuess("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const clueCnt = clue
    ?.split(" ")
    .map((it) => it.length)
    .join(" ");

  const gridTemplateColumns =
    revealed || !clue
      ? `1fr min-content`
      : `calc(${clue.length * 10}px + ${(clue.length - 1) * 3}px + 10px) min-content`;

  return (
    <form onSubmit={handleSubmit}>
      <div className={containerBase} style={{ gridTemplateColumns }}>
        <p className={`${textBase} ${revealed ? textRevealed : ""}`}>
          {revealed ? revealed + "!" : clue}
        </p>
        <div></div>
        <div>
          <input
            type="text"
            value={guess}
            // placeholder={clue}
            onChange={handleInputChange}
            className={inputField}
          />
        </div>
        <button type="submit">OK</button>
      </div>
    </form>
  );
}
