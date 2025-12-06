import { db } from "./DB.ts";
import {
  CurrentCanvas,
  DrawingEndedEvent,
  GAME_STATUS,
  GameFinishedEvent,
  GameProgress,
  GameStateDrawing,
  IsRevealed,
  Party,
  Player2,
  UserMessageEvent,
} from "./types.ts";
import { id } from "@instantdb/core";
import { newRandomWords } from "./utils.ts";
import { currentLine } from "./model/game-new.model.ts";
import { getUsername } from "./code-worlds.ts";

// @deprecated - Use editUserName instead. This function updates the old players entity which is deprecated.
export async function editPlayerName(localId: string, name: string) {
  return await db.transact([
    db.tx.players[localId].update({ name, localId, avatar: "" }),
  ]);
}

export async function editUserName(userId: string, newName: string) {
  return db.transact([db.tx.$users[userId].update({ name: newName })]);
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

export async function joinToParty(userId: string, partyId: string) {
  const party = await getPartyById(partyId);
  if (!party) {
    throw new Error(`Party not found '${partyId}'`);
  }

  if (party.status !== GAME_STATUS.prepare) {
    throw new Error(`Can't join to party in '${party.status}' status`);
  }

  const res = await db.transact([
    db.tx.party[partyId].link({ newPlayers: userId }),
  ]);

  return res;
}

export async function startParty(_party: Party) {
  const partyId = _party.id;

  const party = await getPartyById(partyId);
  if (!party) throw new Error(`Party not found '${partyId}'`);

  if (party.status !== GAME_STATUS.prepare)
    throw new Error(`Can't start to party in '${party.status}' status`);

  const players = _party.newPlayers.map((p) => p.id);

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
    db.tx.roomEvent[id()]
      .create({
        type: "game-started",
        payload: { playerId: players[0] },
      })
      .link({ party: partyId }),
  ]);

  return;
}

// @deprecated - Query $users directly instead. This function queries the old players entity which is deprecated.
export async function getAllPlayers() {
  const res = await db.queryOnce({ players: {} });

  return res.data.players;
}

export async function kickPlayer(partyId: string, userId: string) {
  const res = await db.transact([
    db.tx.party[partyId].unlink({ newPlayers: userId }),
  ]);

  return res;
}

export async function leaveParty(userId: string, partyId: string) {
  const res = await db.transact([
    db.tx.party[partyId].unlink({ newPlayers: userId }),
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

export async function createNewParty(userId: string, name: string) {
  const partyId = id();

  // Check if user already has a link to a party with status "prepare"
  const { $users } = await db
    .queryOnce({
      $users: {
        $: { where: { id: userId } },
        parties: { $: { where: { status: GAME_STATUS.prepare } } },
      },
    })
    .then((it) => it.data);

  if ($users[0]?.parties && $users[0].parties.length > 0) {
    throw new Error(
      "User already has a party in prepare status. Please finish or leave that party first.",
    );
  }

  await db.transact([
    db.tx.party[partyId]
      .create({
        name: name,
        host: userId,
        gameState: { state: "game-prepare" },
        gameProgress: [[]],
        gameParams: {
          rounds: 5,
          wordSuggestions: 3,
          drawTime: 60,
        },
        staticPlayerIds: [],
        status: GAME_STATUS.prepare,
      })
      .link({ newPlayers: userId }),
  ]);

  return db
    .queryOnce({
      party: { $: { where: { id: partyId } } },
    })
    .then((it) => it.data.party[0]!);
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
        clue: word.replace(/[^\s-! ,.]/g, "_"),
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

export function gameFinished(partyId: string, newGameProgress: GameProgress) {
  const event: Omit<GameFinishedEvent, "id"> = {
    type: "game-finished",
    payload: {
      reason: "no-more-rounds",
    },
  };

  return db.transact([
    db.tx.party[partyId].update({
      gameState: { state: "game-finished" },
      status: GAME_STATUS.finished,
      gameProgress: newGameProgress,
    }),
    db.tx.roomEvent[id()].create(event).link({ party: partyId }),
  ]);
}

export function authOrCreateUser(cb: (user: Player2) => void) {
  db.getAuth()
    .then((user) => {
      if (user) {
        return user;
      } else {
        return db.auth.signInAsGuest().then(({ user: newUser }) => {
          return editUserName(newUser.id, getUsername()).then(() => {
            return newUser;
          });
        });
      }
    })
    .then((user) => {
      db.subscribeQuery(
        {
          $users: {
            $: { where: { id: user.id } },
          },
        },
        ({ data }) => {
          if (data?.$users[0]) {
            cb({
              id: user.id,
              name: data!.$users[0].name || "",
            });
          } else {
            cb({ id: user.id, name: "error" });
          }
        },
      );
    });
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

export function firstLoadForCanvas(userId: string) {
  db.queryOnce({
    party: {
      $: {
        where: {
          and: [
            { status: GAME_STATUS.inProgress },
            { "newPlayers.id": userId },
          ],
        },
      },
    },
  }).then(({ data }) => {
    // @ts-ignore
    const innerState = data.party?.[0]?.gameState;

    if (innerState?.state === "drawing") {
      innerState.drawingId;

      db.queryOnce({
        paintings: {
          $: { where: { id: innerState.drawingId } },
        },
      }).then(({ data }) => {
        if (data.paintings[0]) {
          currentLine.initLoad(data.paintings[0].canvas);
        }
      });
    }
  });
}
