import { db } from "./DB.ts";
import {
  GAME_STATUS,
  Party,
  DrawingEndedEvent,
  UserMessageEvent,
  GameStateDrawing,
  GameProgress,
  IsRevealed,
  CurrentCanvas,
} from "./types.ts";
import { id } from "@instantdb/core";
import { newRandomWords } from "./utils.ts";
import { initLoad } from "./model/game-new.model.ts";

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

  const players = _party.players.map((p) => p.id);

  const res = await db.transact([
    db.tx.party[partyId].update({
      status: GAME_STATUS.inProgress,
      staticPlayerIds: players,
      gameProgress: [[]],
      gameState: {
        state: "choosing-word",
        playerId: players[0],
        words: newRandomWords(3),
      },
    }),
    // todo add message "started! X выбирает слово"
    // db.tx.roomEvent[id()]
    //   .create({
    //     type: "new-selected-word",
    //     payload: { playerId: localId, word },
    //   })
    //   .link({ party: party.id })
  ]);

  return;
}

export async function getAllPlayers() {
  const res = await db.queryOnce({ players: {} });

  return res.data.players;
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
    db.tx.party[partyId].merge({ gameParams: params }),
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
        status: GAME_STATUS.prepare,
        gameState: null,
        name: name,
        host: localId,
        gameParams: {
          rounds: 5,
          wordSuggestions: 3,
          drawTime: 60,
        },
      })
      .link({ players: localId }),
  ]);

  return res;
}

export function selectWord(localId: string, partyId: string, word: string) {
  const drawingId = id();

  return db.transact([
    db.tx.roomEvent[id()]
      .create({
        type: "new-selected-word",
        payload: { playerId: localId, word },
      })
      .link({ party: partyId }),
    db.tx.paintings[drawingId].create({
      canvas: [],
      playerId: localId,
      word,
    }),
    db.tx.party[partyId].update({
      gameState: {
        state: "drawing",
        playerId: localId,
        word: word,
        drawingId: drawingId,
        guessed: {},
      },
    }),
  ]);
}

export function transitionToNextPlayer(
  nextPlayerId: string,
  gameState: GameStateDrawing,
  partyId: string,
  newGameProgress: GameProgress,
) {
  const event: Omit<DrawingEndedEvent, "id"> = {
    type: "drawing-ended",
    payload: {
      reason: "all-revealed",
      revealed: gameState.guessed,
      nextPlayerId: nextPlayerId,
    },
  };

  return db.transact([
    db.tx.party[partyId].update({
      gameState: {
        state: "choosing-word",
        playerId: nextPlayerId,
        words: newRandomWords(3),
      },
      gameProgress: newGameProgress,
    }),
    db.tx.roomEvent[id()].create(event).link({ party: partyId }),
  ]);
}

export function sendMessage(
  localId: string,
  partyId: string,
  guess: string,
  isRevealed: IsRevealed,
) {
  const event: Omit<UserMessageEvent, "id"> = {
    type: "user-message",
    payload: {
      text: guess,
      playerId: localId,
      isRevealed,
    },
  };

  return db.transact([
    db.tx.roomEvent[id()].create(event).link({ party: partyId }),
    ...(isRevealed === "revealed"
      ? [
          db.tx.party[partyId].merge({
            gameState: {
              guessed: { [localId]: Date.now() },
            },
          }),
        ]
      : []),
  ]);
}

export function saveCanvas(drawingId: string, canvas: CurrentCanvas) {
  return db.transact(
    db.tx.paintings[drawingId].update({
      canvas: canvas,
    }),
  );
}

export function firstLoadForCanvas(localId: string) {
  db.queryOnce({
    party: {
      $: {
        where: {
          or: [
            {
              and: [{ status: GAME_STATUS.prepare }, { "players.id": localId }],
            },
            {
              and: [
                { status: GAME_STATUS.inProgress },
                { "players.id": localId },
              ],
            },
          ],
        },
      },
    },
  }).then(({ data }) => {
    const innerState = data.party?.[0].gameState;

    if (innerState?.state === "drawing") {
      innerState.drawingId;

      db.queryOnce({
        paintings: {
          $: { where: { id: innerState.drawingId } },
        },
      }).then(({ data }) => {
        if (data.paintings[0]) {
          initLoad(data.paintings[0].canvas);
        }
      });
    }
  });
}
