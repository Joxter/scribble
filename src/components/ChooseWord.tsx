import React from "react";
import { newWordSelected } from "../model/game-new.model.ts";
import { css } from "@linaria/core";

const root = css`
  display: inline-flex;
  gap: 8px;
  padding: 8px;
  background-color: #a3c2d8;
  border-radius: 8px;
`;

export function ChooseWord({ words }: { words: string[] }) {
  return (
    <div className={root}>
      {words.map((w, i) => {
        return (
          <button key={w} type="button" onClick={() => newWordSelected(w)}>
            {w}
          </button>
        );
      })}
    </div>
  );
}
