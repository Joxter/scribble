import { db } from "./DB.ts";

export async function editPlayerName(name: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([
    db.tx.players[localId].update({ name, localId, avatar: "" }),
  ]);
}

export async function getPartyByName(name: string) {
  const {
    data: { party },
  } = await db.queryOnce({
    party: {
      $: { where: { status: "prepare", name } },
    },
  });

  return (party && party[0]) || null;
}

export async function joinToParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  const res = await db.transact([
    db.tx.party[partyId].link({ players: localId }),
  ]);

  return res;
}

export async function kickPlayer(partyId: string, playerId: string) {
  const res = await db.transact([
    db.tx.party[partyId].unlink({ players: playerId }),
  ]);

  return res;
}

export async function leaveParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  const res = await db.transact([
    db.tx.party[partyId].unlink({ players: localId }),
  ]);

  return res;
}
