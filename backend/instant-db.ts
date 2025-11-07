import { init, id } from "@instantdb/admin";
import { GAME_STATUS } from "../src/types.ts";
import schema from "../instant.schema.ts";

export const db = init({
  appId: process.env.INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
  schema,
});

let currentActiveRooms = [];

console.log("... subscribeQuery");
db.subscribeQuery(
  {
    party: {
      $: {
        where: { status: GAME_STATUS.inProgress },
      },
    },
  },
  (resp) => {
    if (resp.data) {
      currentActiveRooms = resp.data.party.map((p) => p.id);
    } else {
      console.error(resp);
    }
  },
);
