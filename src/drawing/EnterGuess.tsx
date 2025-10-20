import React, { useState } from "react";
import { messageSent } from "../model/game-new.model.ts";

export function EnterGuess(
  { revealed, clue }: { clue: string | null; revealed: string },
  //
) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    messageSent({ guess: guess.trim() });
    setGuess("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };

  const clueCnt = clue
    ?.split(" ")
    .map((it) => it.length)
    .join(" ");

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            revealed || !clue
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
