import React, { useState } from "react";

export function EnterGuess({ clue }: { clue: string }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO
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
          gridTemplateColumns: `calc(${clue.length * 10}px + ${(clue.length - 1) * 3}px + 10px) min-content`,
          gap: "0px 8px",
          fontFamily: "monospace",
          letterSpacing: "2px",
        }}
      >
        <p
          style={{
            padding: "0 4px",
            // padding: "0",
          }}
        >
          {clue} {false && clueCnt}
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
