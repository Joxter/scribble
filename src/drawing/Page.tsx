import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import { resetDEMO } from "../game.model";

export function DrawingPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  if (!show) {
    return <p>no show</p>;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            width: canvasSize + "px",
            // width: 400 + "px",
          }}
        >
          <CanvasSmoth />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <LineWidthSelector />
            <ColorSelector />
          </div>
          {/*
          <CanvasSmoth debugMode />
            */}
        </div>
      </div>

      <div>
        <p>players</p>
        <button onClick={resetDEMO}>reset</button>
      </div>
    </div>
  );
}
