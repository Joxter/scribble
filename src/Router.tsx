import React from "react";
import { DrawingPage } from "./drawing/Page";
import { $roomId } from "./model/app.ts";
import { useUnit } from "effector-react";

export function Router() {
  const roomId = useUnit($roomId);

  return (
    <div style={{ height: "100%" }}>
      {roomId ? <DrawingPage /> : <p>all rooms</p>}
    </div>
  );
}
