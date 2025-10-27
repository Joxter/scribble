import { createEvent, createStore, restore } from "effector";
import { Party } from "../types.ts";
import { db } from "../DB.ts";

const { $allParties } = createParties();
export { $allParties };

function createParties() {
  const allPartiesLoaded = createEvent<Party[]>();
  const $allParties = restore(allPartiesLoaded, []);

  db.subscribeQuery({ party: { players: {} } }, (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) allPartiesLoaded(resp.data.party as Party[]);
  });

  return { $allParties };
}
