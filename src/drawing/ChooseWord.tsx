import React from "react";
import { newWordSelected } from "../model/game-new.model.ts";

export function ChooseWord({ words }: { words: string[] }) {
  return (
    <div
      style={{
        backgroundColor: "#ddd",
        height: "100%",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {words.map((w, i) => {
        return (
          <button key={i} type="button" onClick={() => newWordSelected(w)}>
            {w}
          </button>
        );
      })}
    </div>
  );
}
