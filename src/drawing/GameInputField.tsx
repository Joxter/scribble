import React, { useState } from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $drawing,
  $guessed,
  $localId,
  messageSent,
} from "../model/game-new.model.ts";

/* высота общая с панелью инструментов, см. --row-under */
const root = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: var(--row-under);
  flex: none;

  @media (max-width: 807px) {
    height: auto;
    min-height: var(--row-under);
  }
`;

const clueRow = css`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2px 4px 0;
`;

const clue = css`
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 7px;
  color: var(--ink);
`;

const clueHidden = css`
  color: #aab0b8;
`;

const clueRevealed = css`
  color: var(--success-text);
`;

const letterCount = css`
  font-size: 11px;
  color: var(--muted);
  font-weight: 700;
`;

/* поле всегда у нижнего края блока: без подсказки оно не уезжает вверх */
const inputRow = css`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const input = css`
  flex: 1;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  padding: 12px 16px;
  outline: none;
  min-width: 0;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    border-color: var(--brand);
    box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.18);
  }
`;

const sendButton = css`
  font-family: inherit;
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  background-color: var(--brand);
  border: none;
  border-bottom: 3px solid var(--brand-dark);
  border-radius: 14px;
  padding: 0 22px;
  cursor: pointer;

  &:active {
    border-bottom-width: 1px;
    transform: translateY(2px);
  }
`;

export function GameInputField() {
  const drawing = useUnit($drawing);
  const guessed = useUnit($guessed);
  const localId = useUnit($localId);
  const [guess, setGuess] = useState("");

  const iGuessed = Boolean(guessed[localId]);
  const currentClue = drawing.drawing ? drawing.clue : null;
  const secret = drawing.drawing ? drawing.word : "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const text = guess.trim();
    if (!text) return;

    messageSent({ guess: text });
    setGuess("");
  }

  const letters = (currentClue || "").replace(/[\s\-!,.]/g, "").length;

  return (
    <form className={root} onSubmit={handleSubmit}>
      {currentClue && (
        <div className={clueRow}>
          <span className={`${clue} ${iGuessed ? clueRevealed : ""}`}>
            {iGuessed
              ? secret
              : currentClue.split("").map((char, i) =>
                  char === "_" ? (
                    <span key={i} className={clueHidden}>
                      _
                    </span>
                  ) : (
                    char
                  ),
                )}
          </span>
          <span className={letterCount}>
            {iGuessed ? "вы отгадали!" : `${letters} букв`}
          </span>
        </div>
      )}

      <div className={inputRow}>
        <input
          type="text"
          className={input}
          value={guess}
          placeholder={
            currentClue && !iGuessed ? "Отгадка или сообщение…" : "Сообщение…"
          }
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit" className={sendButton}>
          →
        </button>
      </div>
    </form>
  );
}
