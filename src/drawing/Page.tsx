import React, { useEffect, useState } from "react";
import { CanvasSmoth } from "./Canvas";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";

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
            gap: "12px",
            width: canvasSize + "px",
          }}
        >
          <div
            style={{
              // fit to page - 30px
              "--a": "min(100vw, 100vh)",
              width: "calc(var(--a) - 100px)",
              margin: "0 auto",
            }}
          >
            <CanvasSmoth />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <LineWidthSelector />
            <ColorSelector />
          </div>
          {/*
          <CanvasSmoth debugMode />
            */}
        </div>
      </div>
    </div>
  );
}
