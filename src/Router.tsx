import React from "react";
import { DrawingPage } from "./drawing/Page";

const URL_ROOM_NAME = window.location.search.slice(1);
// console.log({ URL_ROOM_NAME });

export function Router() {
  return (
    <div style={{ height: "100%" }}>
      {URL_ROOM_NAME ? <DrawingPage /> : <p>all rooms</p>}
    </div>
  );
}
