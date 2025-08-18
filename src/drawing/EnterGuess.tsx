import React, { useState } from "react";
import { guessSubmitted } from "../model/game.model.ts";

export function EnterGuess({
  revealed,
  clue,
}: {
  clue: string;
  revealed: string;
}) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    guessSubmitted({ guess: guess.trim() });
    setGuess("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const clueCnt = clue
    .split(" ")
    .map((it) => it.length)
    .join(" ");

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: revealed
            ? `1fr min-content`
            : `calc(${clue.length * 10}px + ${(clue.length - 1) * 3}px + 10px) min-content`,
          gap: "0px 8px",
          fontFamily: "monospace",
          letterSpacing: "2px",
        }}
      >
        <p
          style={{
            padding: "0 4px",
            color: revealed ? "green" : "initial",
            textAlign: revealed ? "center" : "initial",
          }}
        >
          {revealed ? revealed + "!" : clue}
        </p>
        <div></div>
        <div>
          <input
            type="text"
            value={guess}
            // placeholder={clue}
            onChange={handleInputChange}
            style={{
              outline: "none",
              width: "100%",
              font: "inherit",
              fontFamily: "inherit",
              letterSpacing: "inherit",
            }}
          />
        </div>
        <button type="submit">OK</button>
      </div>
    </form>
  );
}
