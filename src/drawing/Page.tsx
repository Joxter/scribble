import React, { useEffect, useState } from "react";
import { DEMO_ID } from "../config";
import { db } from "../DB";
import { Canvas } from "../Canvas";
import { CanvasSmoth } from "../CanvasSmoth";
import { canvasSize } from "../utils";

export function DrawingPage() {
  const { isLoading, error, data } = db.useQuery({
    party: { $: { where: { id: DEMO_ID } } },
  });
  const id = db.useLocalId("guest");
  const [show, setShow] = useState(false);

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
        <div style={{ width: canvasSize + "px" }}>
          <CanvasSmoth
            initHistory={data.party[0].canvas}
            onHistoryChange={() => {}}
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
