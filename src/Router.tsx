import React from "react";
import { Canvas } from "./Canvas";

const h = [];

export function Router() {
  return (
    <div>
      <button
        onClick={() => {
          //
        }}
      >
        reset
      </button>
      <Canvas
        history={[
          ["start", 290, 164],
          ["move", 290, 164],
          ["move", 291, 164],
          ["move", 292, 164],
          ["move", 296, 164],
          ["move", 301, 164],
          ["move", 305, 165],
          ["move", 309, 166],
          ["move", 312, 166],
          ["move", 313, 167],
          ["move", 314, 167],
          ["end"],
        ]}
        onHistoryChange={(ev) => {
          h.push(ev);
          // console.log(JSON.stringify(h));
        }}
      />
    </div>
  );
}
