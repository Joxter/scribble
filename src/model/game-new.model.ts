import { db } from "../DB.ts";
import { createEvent, createStore } from "effector";
import { Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { id } from "@instantdb/core";
import { $localId } from "./game.model.ts";

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

export const $newParty = createStore<Party>({
  gameState: { drawing: "" },
  name: "",
  status: "prepare",
  players: [],
  id: "",
});
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
          newPartyLoaded(party);
          return;
        }
      }
      console.warn("Something went wrong");
      console.log(resp);
    },
  );
});

export async function createNewParty(name: string) {
  const partyId = id();
  const localId = await db.getLocalId("guest");

  // Check if player already has a link to a party with status "prepare"
  const { players } = await db
    .queryOnce({
      players: {
        $: { where: { id: localId } },
        parties: { $: { where: { status: "prepare" } } },
      },
    })
    .then((it) => it.data);

  if (players[0]?.parties && players[0].parties.length > 0) {
    throw new Error(
      "Player already has a party in prepare status. Please finish or leave that party first.",
    );
  }

  const res = await db.transact([
    db.tx.party[partyId]
      .create({
        name,
        gameState: { drawing: "" },
        status: "prepare",
      })
      .link({ players: localId }),
  ]);

  return res;
}
