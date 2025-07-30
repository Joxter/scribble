import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { resetDEMO, undoClicked } from "../game.model";

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
          <a href="https://joxter.github.io/scribble/" target="_blank">
            https://joxter.github.io/scribble/
          </a>
          <CanvasSmoth />
          <div
            style={{
              display: "grid",
              gap: "8px",
            }}
          >
            <div>
              <button onClick={undoClicked}>
                <img src={arrowArcLeftSrc} />
              </button>
            </div>
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
