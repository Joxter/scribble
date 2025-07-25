import React, { useEffect, useState } from "react";
import { DEMO_ID } from "../config";
import { db } from "../DB";
import { Canvas } from "../Canvas";
import { CanvasSmoth } from "../CanvasSmoth";
import { canvasSize } from "../utils";
import { ColorSelector } from "./ColorSelector";
import { LineWidthSelector } from "./LineWidthSelector";

export function DrawingPage() {
  const { isLoading, error, data } = db.useQuery({
    party: { $: { where: { id: DEMO_ID } } },
  });
  const id = db.useLocalId("guest");
  const [show, setShow] = useState(false);

  const [size, setSize] = useState(8);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  if (isLoading) {
    return <p>loading</p>;
  }

  if (!data || !data.party?.[0]?.canvas || !show) {
    return <p>no data</p>;
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
          <ColorSelector value={color} onChange={setColor} />
          <LineWidthSelector value={size} onChange={setSize} />
          <CanvasSmoth
            initHistory={data.party[0].canvas}
            color={color}
            size={size}
          />
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
        <p>id: {id}</p>
        <button onClick={resetDEMO}>reset</button>
      </div>
    </div>
  );
}

function resetDEMO() {
  db.transact(db.tx.party[DEMO_ID].update({ canvas: [""] })).then(() => {
    window.location.reload();
  });
}
