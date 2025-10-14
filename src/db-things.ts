import { db } from "./DB.ts";
import { GAME_STATUS, Party } from "./types.ts";
import { id } from "@instantdb/core";
import { $newParty } from "./model/game-new.model.ts";

export async function editPlayerName(name: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([
    db.tx.players[localId].update({ name, localId, avatar: "" }),
  ]);
}

export async function getPreparePartyByName(name: string) {
  const {
    data: { party },
  } = await db.queryOnce({
    party: {
      $: { where: { status: GAME_STATUS.prepare, name } },
    },
  });

  return (party && party[0]) || null;
}

export async function getPartyById(partyId: string) {
  const {
    data: { party },
  } = await db.queryOnce({
    party: { $: { where: { id: partyId } } },
  });

  return party[0] || null;
}

export async function joinToParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  const party = await getPartyById(partyId);
  if (!party) {
    throw new Error(`Party not found '${partyId}'`);
  }

  if (party.status !== GAME_STATUS.prepare) {
    throw new Error(`Can't join to party in '${party.status}' status`);
  }

  const res = await db.transact([
    db.tx.party[partyId].link({ players: localId }),
  ]);

  return res;
}

export async function startParty(_party: Party) {
  const partyId = _party.id;

  const party = await getPartyById(partyId);
  if (!party) throw new Error(`Party not found '${partyId}'`);

  if (party.status !== GAME_STATUS.prepare)
    throw new Error(`Can't start to party in '${party.status}' status`);

  const res = await db.transact([
    db.tx.party[partyId].update({
      status: GAME_STATUS.inProgress,
      gameState: {
        ...party.gameState,
        players: _party.players.map((p) => p.id),
      },
    }),
  ]);

  return;
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

export async function updateGameParams(
  partyId: string,
  params: Partial<Party["gameParams"]>,
) {
  const res = await db.transact([
    db.tx.party[partyId].update({ gameParams: params }),
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
        gameState: { drawing: "" },
        name: name,
        host: localId,
        gameParams: { rounds: 5, wordSuggestions: 3 },
        status: GAME_STATUS.prepare,
      })
      .link({ players: localId }),
  ]);

  return res;
}
