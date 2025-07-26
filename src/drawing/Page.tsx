import React, { useEffect, useState } from "react";
import { Canvas } from "../Canvas";
import { CanvasSmoth } from "../CanvasSmoth";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";
import { resetDEMO } from "../game.model";

export function DrawingPage() {
  // const id = db.useLocalId("guest");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  if (!show) {
    return <p>no show</p>;
  }

  // if (!data || !data.party?.[0]?.canvas || !show) {
  //   return <p>no data</p>;
  // }

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
          <ColorSelector />
          <LineWidthSelector />
          <CanvasSmoth />
        </div>
        {false && (
          <div
            style={{
              width: canvasSize + "px",
              height: canvasSize + "px",
              margin: "0 auto",
            }}
          >
            <Canvas
              initHistory={data.party[0].canvas}
              onHistoryChange={(ev) => {}}
            />
          </div>
        )}
      </div>

      <div>
        <p>players</p>
        <button onClick={resetDEMO}>reset</button>
      </div>
    </div>
  );
}
