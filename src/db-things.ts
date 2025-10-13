import { db } from "./DB.ts";
import { GAME_STATUS } from "./types.ts";
import { id } from "@instantdb/core";

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
      $: { where: { status: GAME_STATUS.prepare, name } },
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

export async function closeParty(partyId: string) {
  const res = await db.transact([
    db.tx.party[partyId].update({ status: GAME_STATUS.finished }),
  ]);

  return res;
}

export async function createNewParty(name: string) {
  const partyId = id();
  const localId = await db.getLocalId("guest");

  // Check if player already has a link to a party with status "prepare"
  const { players } = await db
    .queryOnce({
      players: {
        $: { where: { id: localId } },
        parties: { $: { where: { status: GAME_STATUS.prepare } } },
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
        status: GAME_STATUS.prepare,
        host: localId,
      })
      .link({ players: localId }),
  ]);

  return res;
}
