import {
  CanvasAndChatHistory,
  GAME_STATUS,
  LineEvent,
  Party,
} from "../types.ts";
import { db } from "../DB.ts";
import { getUsername } from "../code-worlds.ts";
import { editPlayerName } from "../db-things.ts";

export function newParty(): Party {
  return {
    gameState: {} as any,
    name: "",
    staticPlayerIds: [],
    gameProgress: [[]],
    host: "",
    gameParams: { rounds: 5, wordSuggestions: 3, drawTime: 60 },
    status: GAME_STATUS.prepare,
    players: [],
    roomEvents: [],
    id: "",
  };
}

export function doEventsUndo(events: CanvasAndChatHistory[]): LineEvent[] {
  const lines: LineEvent[] = [];

  events.forEach((item) => {
    if (!item.type || item.type === "line") {
      lines.push(item);
    } else if (item.type === "undo") {
      lines.pop();
    }
  });

  return lines;
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
