import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import { Link } from "wouter";
import { resetDEMO, undoClicked } from "../game.model";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelectorOld } from "./ColorSelectorOld";
import { RenderModeSelector } from "./RenderModeSelector";

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
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/scribble/">главная</Link>
          <div>
            <button onClick={resetDEMO}>reset</button>
          </div>
          <a href="https://joxter.github.io/scribble/" target="_blank">
            website
          </a>
          <RenderModeSelector />
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          // backgroundColor: "red",
          // display: "flex",
          //
        }}
      >
        <CanvasSmoth />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          // padding: "0 20px",
          marginBottom: "10px",
        }}
      >
        <button onClick={undoClicked}>
          <img style={{ width: "20px" }} src={arrowArcLeftSrc} />
        </button>
        <LineWidthSelector />
      </div>
      <div
        style={{
          width: "100%",
          //
        }}
      >
        <ColorSelectorOld />
      </div>
    </div>
  );
}
