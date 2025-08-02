import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import { Link } from "wouter";
import { resetDEMO, undoClicked } from "../game.model";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";

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
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        gap: "16px",
        padding: "16px",
        // justify-items: start
        justifyItems: "center",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "32px" }}>
          <Link href="/scribble/">главная</Link>
          <div>
            <button onClick={resetDEMO}>reset</button>
          </div>
          <a href="https://joxter.github.io/scribble/" target="_blank">
            website
          </a>
          <button onClick={undoClicked}>
            <img style={{ width: "20px" }} src={arrowArcLeftSrc} />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
            padding: "0 20px",
            marginBottom: "10px",
          }}
        >
          <LineWidthSelector />
          <ColorSelector />
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          // display: "flex",
          //
        }}
      >
        <CanvasSmoth />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
        }}
      >
        footer
      </div>
    </div>
  );
}
