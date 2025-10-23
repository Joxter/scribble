import { combine, createEvent, createStore, restore, sample } from "effector";
import { CanvasAndChatHistory, Party, Player } from "../types.ts";
import { eventsToGameState, liveQuery, URL_ROOM_NAME } from "../utils.ts";
import { db } from "../DB.ts";
import { getUsername } from "../code-worlds.ts";
import { createCurrentLine, createDrawing } from "./drawing.model.ts";
import { getChatEvents, newParty } from "./utils.ts";
import { editPlayerName } from "../db-things.ts";

const setLocalId = createEvent<string>();
export const $localId = restore(setLocalId, "");
$localId.watch((v) => console.log("$localId", v));

db.getLocalId("guest").then((a) => setLocalId(a));
getPlayer();

const setParty = createEvent<Party>();
export const $party = restore(setParty, newParty());

export const setRoomId = createEvent<string>();
export const $roomId = restore(setRoomId, URL_ROOM_NAME);

const setPlayer = createEvent<Player>();
export const $player = restore(setPlayer, {
  id: "",
  localId: "",
  name: "",
  avatar: "",
});

export const $allRoomEvents = createStore<CanvasAndChatHistory[]>([]);

export const $compiledGameStateAndPaints = combine($allRoomEvents, (events) => {
  return eventsToGameState(
    events,
    ["foo"],
    { lang: "RU", rounds: 1000, suggestions: 3, canvasSize: 600 },
    "foo|bar|baz",
  );
});

export const $iRevealed = createStore("");
export const $clue = createStore<string | null>(null);

export const $debugMode = createStore(false);

export const renderModeChanged = createEvent<
  "normal" | "polyline" | "tldraw"
>();
export const debugModeToggled = createEvent<boolean>();
export const makeWeDraw_DEV = createEvent<any>();

export const deleteRoomEvents_DEV = createEvent<any>();

export const historyUpdated = createEvent<{
  history: CanvasAndChatHistory[];
}>();

sample({
  source: [$localId, $party] as const,
  clock: makeWeDraw_DEV,
  fn: ([id, party]) => {
    return {
      ...party,
      gameState: {
        ...party.gameState,
        drawing: id,
      },
    };
  },
  target: $party,
});

$allRoomEvents.on(historyUpdated, (_, { history }) => history);

$debugMode.on(debugModeToggled, (_, enabled) => enabled);

/*
liveQuery($roomId, (roomId) => {
  if (!roomId) return () => {};

  return db.subscribeQuery(
    { party: { $: { where: { id: roomId } }, players2: {} } },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data?.party[0]) {
        setParty(resp.data.party[0] as Party);
      } else {
        console.error(`No room with "${roomId}" id`);
      }
    },
  );
});
*/

/*
liveQuery($roomId, (roomId) => {
  if (!roomId) return () => {};

  return db.subscribeQuery(
    {
      roomEvent: {
        $: { where: { party: roomId }, order: { serverCreatedAt: "asc" } },
      },
    },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data) {
        // console.log(resp.data.roomEvent);
        historyUpdated({ history: resp.data.roomEvent.map((a) => a.it) });
      }
    },
  );
});
*/

// sample({
//   source: [$imServer, $roomId, $words, $localId] as const,
//   clock: $compiledGameStateAndPaints,
//   fn: (a, b) => [a, b] as const,
// }).watch(([[imServer, roomId, words, localId], [gameState]]) => {
//   if (imServer && gameState.state.state === "drawing") {
//     if (gameState.state.revealed.length >= gameState.playerIds.length) {
//       const myId = gameState.playerIds.findIndex((it) => it === localId);
//       const nextInd = gameState.playerIds[myId + 1] ? myId + 1 : 0;
//       const nextPlayerId = gameState.playerIds[nextInd];
//
//       const event: Omit<ChoosingWord, "id"> = {
//         type: "choosing-word",
//         playerId: nextPlayerId,
//         words: [
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//           randomFrom(words).word,
//         ].join("|"),
//       };
//
//       db.transact(
//         db.tx.roomEvent[id()].create({ it: event }).link({ party: roomId }),
//       );
//     }
//   }
// });

/*
deleteRoomEvents_DEV.watch(async () => {
  const { roomEvent } = await db
    .queryOnce({ roomEvent: { $: { where: { party: $roomId.getState() } } } })
    .then((it) => it.data);

  console.log("DELETE");
  console.log(roomEvent);

  if (roomEvent.length > 0) {
    db.transact(roomEvent.map((event) => db.tx.roomEvent[event.id].delete()));
  }
});
*/

/*
export async function createNewParty(name: string) {
  const partyId = id();

  await db.transact([
    db.tx.party[partyId].create({
      name,
      gameState: { drawing: "" },
    }),
    db.tx.curretLine[partyId]
      .create({
        dots: [],
        width: 8,
        color: "#34495e",
      })
      .link({ party: partyId }),
  ]);
}
*/

export async function joinParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([db.tx.players[localId].link({ parties: partyId })]);
}

export async function closeRoom(partyId: string) {
  return await db.transact([db.tx.party[partyId].delete()]);
}

export async function leaveParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([
    db.tx.players[localId].unlink({ parties: partyId }),
  ]);
}

export async function getPlayer(limit = 3) {
  if (limit < 0) throw new Error(`Can't get user`);

  const localId = await db.getLocalId("guest");

  const player = await db
    .queryOnce({ players: { $: { where: { id: localId } } } })
    .then((it) => it.data.players[0]);

  if (player) return player;

  const randomName = getUsername();
  await editPlayerName(randomName);

  return getPlayer(limit - 1);
}

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  return db.subscribeQuery(
    { players: { $: { where: { id: localId } } } },
    (resp) => {
      if (resp.error) console.error(resp.error);
      if (resp.data) {
        const player = resp.data.players[0];
        setPlayer(player);
      }
    },
  );
});

export async function deleteAllPartiesAndLines() {
  alert("deleted");
  // let allParties = await db
  //   .queryOnce({ party: {} })
  //   .then((it) => it.data.party);
  // console.log(`allParties.len`, allParties.length);
  //
  // let currentLines = await db
  //   .queryOnce({ curretLine: {} })
  //   .then((it) => it.data.curretLine);
  // console.log(`curretLines.len`, currentLines.length);
  //
  // return db.transact([
  //   ...allParties.map((it) => db.tx.party[it.id].delete()),
  //   ...currentLines.map((it) => db.tx.curretLine[it.id].delete()),
  // ]);
}

export async function resetDEMO() {
  throw new Error("Not implemented");
  console.log("------- RESET All -------");
  //
  // return deleteAllPartiesAndLines()
  //   .then(() => {
  //     console.log(`DELETED`);
  //     return db.transact([
  //       db.tx.party[$roomId.getState()].create({
  //         name: "Алиска",
  //         players: [],
  //         gameState: { drawing: "" },
  //       }),
  //     ]);
  //   })
  //   .then(() => {
  //     console.log(`Created party`, $roomId.getState());
  //     return db.transact([
  //       db.tx.curretLine[id()]
  //         .create({
  //           dots: [],
  //           width: 8,
  //           color: "#34495e",
  //         })
  //         .link({ party: "DEMO_ID" }),
  //     ]);
  //   })
  //   .then(() => {
  //     console.log("OK, will reload in 3 sec");
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 3000);
  //   });
}

export async function getAllPlayers() {
  const res = await db.queryOnce({ players: {} });

  return res.data.players;
}
