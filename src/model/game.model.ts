import { combine, createEvent, createStore, restore, sample } from "effector";
import { CanvasAndChatHistory, Party, Player } from "../types.ts";
import { eventsToGameState, liveQuery, URL_ROOM_NAME } from "../utils.ts";
import { db } from "../DB.ts";
import { getUsername } from "../code-worlds.ts";
import { newParty } from "./utils.ts";
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

export async function joinParty(partyId: string) {
  const localId = await db.getLocalId("guest");

  return await db.transact([db.tx.players[localId].link({ parties: partyId })]);
}

export async function closeRoom(partyId: string) {
  return await db.transact([db.tx.party[partyId].delete()]);
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

export async function getAllPlayers() {
  const res = await db.queryOnce({ players: {} });

  return res.data.players;
}
