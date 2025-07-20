import React, { useState } from "react";
import { DEMO_ID } from "../config";
import { db } from "../DB";
import { Canvas } from "../Canvas";
import { LineWidthSelector } from "./LineWidthSelector";
import { ColorSelector } from "./ColorSelector";

export function DrawingPage() {
  const [lineWidth, setLineWidth] = useState(5);
  const [color, setColor] = useState("#000000");
  const { isLoading, error, data } = db.useQuery({
    party: { $: { where: { id: DEMO_ID } } },
  });
  const id = db.useLocalId("guest");

  if (isLoading) {
    return <p>loading</p>;
  }

  if (!data || !data.party?.[0]?.canvas) {
    return <p>no data</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <p>players</p>
      <p>id: {id}</p>
      <button onClick={resetDEMO}>reset</button>
      <br />
      <p>line width: </p>
      <LineWidthSelector value={lineWidth} onChange={setLineWidth} />
      <p>color: </p>
      <ColorSelector value={color} onChange={setColor} />
      <div
        style={{
          maxWidth: "calc(min(100vw, 100vh) - 50px)",
          maxHeight: "calc(min(100vw, 100vh) - 50px)",
          width: "100%",
          aspectRatio: "1",
          margin: "0 auto",
        }}
      >
        <Canvas
          color={color}
          lineWidth={lineWidth}
          initHistory={data.party[0].canvas}
          onHistoryChange={(ev) => {
            // "f259a402-be81-4806-ba5b-86a4814fb9b1"
            // db.transact(
            //   db.tx.history[id()].update({
            //     event: ev[0],
            //     x: ev[1] || 0,
            //     y: ev[2] || 0,
            //   }),
            // );
          }}
        />
      </div>
    </div>
  );
}

function resetDEMO() {
  db.transact(db.tx.party[DEMO_ID].update({ canvas: [""] }));
}
