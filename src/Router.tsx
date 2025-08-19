import React from "react";
import { HomePage } from "./Home.page.tsx";
import { $roomId } from "./model/game.model.ts";
import { useUnit } from "effector-react";
import { DrawingPage } from "./drawing/Drawing.page.tsx";
import { WordsPage } from "./Words.page.tsx";
import { SimpleCanvas } from "./components/SimpleCanvas.tsx";
import { SimpleCanvasHTML5 } from "./components/SimpleCanvasHTML5.tsx";
import { SimpleCanvasOptimized } from "./components/SimpleCanvasOptimized.tsx";

export function Router() {
  const roomId = useUnit($roomId);

  return (
    <div style={{ height: "100%" }}>
      {roomId === "words" ? (
        <WordsPage />
      ) : roomId === "simple" ? (
        <SimpleCanvas />
      ) : roomId === "canvas-html5" ? (
        <SimpleCanvasHTML5 />
      ) : roomId === "canvas-optimized" ? (
        <SimpleCanvasOptimized />
      ) : roomId ? (
        <DrawingPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}
