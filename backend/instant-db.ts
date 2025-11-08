import { init } from "@instantdb/admin";
import { init as initFe } from "@instantdb/core";
import { GAME_STATUS } from "../src/types.ts";
import schema from "../instant.schema.ts";

export const db = init({
  appId: process.env.INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
  schema,
});

export const dbFe = initFe({
  appId: process.env.INSTANT_APP_ID!,
  schema,
});

let currentActiveRooms: string[] = [];

console.log("... subscribeQuery");

let unsub1 = () => {};
db.subscribeQuery(
  {
    party: {
      $: {
        where: { status: GAME_STATUS.inProgress },
      },
    },
  },
  (resp) => {
    unsub1();

    const roomsUns = [] as (() => any)[];

    if (resp.data) {
      currentActiveRooms = resp.data.party.map((p) => p.id);

      currentActiveRooms.forEach((roomId) => {
        console.log("join.. ", roomId);
        const room = dbFe.joinRoom("party", roomId);
        let unsub = room.subscribeTopic("currentCanvas", (ev) => {
          console.log(`currentCanvas:${roomId}`, ev);
        });

        roomsUns.push(unsub);
        roomsUns.push(room.leaveRoom);
      });
    } else {
      console.error(resp);
    }
    unsub1 = () => {
      roomsUns.forEach((cb) => cb());
      console.log(`cleared ${roomsUns.length}`);
    };
  },
);
