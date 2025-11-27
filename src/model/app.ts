import { createEvent, createStore, restore } from "effector";
import { Party, Player2 } from "../types.ts";
import { db } from "../DB.ts";
import { authOrCreateUser } from "../db-things.ts";

const $user = createStore<Player2 | null>(null);
const setUser = createEvent<Player2 | null>();

$user.on(setUser, (_, u) => u);
authOrCreateUser((user) => setUser(user));

$user.watch((user) => {
  console.log("UUUUSER", user);
  console.log(">>>>>>", user?.name);
});

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
