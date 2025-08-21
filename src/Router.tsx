import React from "react";
import { HomePage } from "./Home.page.tsx";
import { $roomId } from "./model/game.model.ts";
import { useUnit } from "effector-react";
import { DrawingPage } from "./drawing/Drawing.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { PaintingsPage } from "./Paintings.page.tsx";

export function Router() {
  const roomId = useUnit($roomId);

  return (
    <div style={{ height: "100%" }}>
      {roomId === "words" ? (
        <WordsPage />
      ) : roomId === "paintings" ? (
        <PaintingsPage />
      ) : roomId ? (
        <DrawingPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}
