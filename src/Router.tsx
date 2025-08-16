import React from "react";
import { DrawingPage } from "./drawing/Page";
import { HomePage } from "./AllParties";
import { $roomId } from "./model/game.model.ts";
import { useUnit } from "effector-react";

export function Router() {
  const roomId = useUnit($roomId);

  return (
    <div style={{ height: "100%" }}>
      {roomId ? <DrawingPage /> : <HomePage />}
    </div>
  );
}
