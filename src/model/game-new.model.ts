import { db } from "../DB.ts";
import { createEvent, createStore } from "effector";
import { Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { id } from "@instantdb/core";
import { $localId } from "./game.model.ts";
import { newParty } from "./utils.ts";

export async function getMyParty() {
  const localId = await db.getLocalId("guest");

  const { players } = await db
    .queryOnce({
      players: {
        $: { where: { id: localId } },
        parties: { $: { where: { status: "prepare" } } },
      },
    })
    .then((it) => it.data);
  // console.log(players[0]);

  return players[0]?.parties?.[0] || null;
}

export const $newParty = createStore<Party>(newParty());
export const newPartyLoaded = createEvent<Party>();
$newParty.on(newPartyLoaded, (_, party) => party);

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  return db.subscribeQuery(
    {
      party: {
        $: {
          where: {
            and: [{ status: "prepare" }, { "players.id": localId }],
          },
        },
        players: {},
      },
    },
    (resp) => {
      if (resp.data) {
        const party = resp.data.party?.[0];

        if (party) {
          newPartyLoaded(party as Party);
          return;
        }
      }
      console.warn("Something went wrong");
      console.log(resp);
    },
  );
});
