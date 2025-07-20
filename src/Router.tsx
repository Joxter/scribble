import React from "react";
import { Canvas } from "./Canvas";
import schema from "../instant.schema";
import { init } from "@instantdb/react";
import { DEMO_ID } from "./config";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

// todo:
//   https://lazybrush.dulnan.net/ плавные линии
//   https://cloud.chrisvilches.com/live_demos/PortrayCanvas/ очень компактное хранение

const db = init({ appId: APP_ID, schema });

export function Router() {
  const { isLoading, error, data } = db.useQuery({
    party: {
      $: {
        where: { id: DEMO_ID },
      },
    },
  });

  if (isLoading) {
    return <p>loading</p>;
  }

  if (!data || !data.party[0]) {
    return <p>no data</p>;
  }

  return (
    <div>
      <button
        onClick={() => {
          db.transact(db.tx.party[DEMO_ID].update({ canvas: [""] }));
        }}
      >
        reset
      </button>
      <br />
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
          db={db}
          color="#a5d"
          lineWidth={5}
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
