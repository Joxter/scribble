import React from "react";
import { Canvas } from "./Canvas";

import { id, i, init, InstaQLEntity } from "@instantdb/react";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

const schema = i.schema({
  entities: {
    history: i.entity({
      event: i.string(),
      x: i.number(),
      y: i.number(),
    }),
  },
});

// todo:
//   https://lazybrush.dulnan.net/ плавные линии
//   https://cloud.chrisvilches.com/live_demos/PortrayCanvas/ очень компактное хранение

const db = init({ appId: APP_ID, schema });

export function Router() {
  const { isLoading, error, data } = db.useQuery({ history: {} });

  if (isLoading) {
    return <p>loading</p>;
  }

  if (!data || !data.history) {
    return <p>no data</p>;
  }

  return (
    <div>
      <button
        onClick={() => {
          db.transact(
            data.history.map(({ id }) => {
              return db.tx.history[id].delete();
            }),
          );
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
          onHistoryChange={(ev) => {
            db.transact(
              db.tx.history[id()].update({
                event: ev[0],
                x: ev[1] || 0,
                y: ev[2] || 0,
              }),
            );
          }}
        />
      </div>
    </div>
  );
}
