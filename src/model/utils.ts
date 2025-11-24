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

export function mergeLogi(logs: any[]): any[] {
  if (logs.length === 0) return [];

  const merged: string[] = [];
  let currentLog: any = null;
  let count = 0;

  for (const log of logs) {
    if (typeof log === "string" && log === currentLog) {
      count++;
    } else {
      if (currentLog !== null) {
        merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
      }
      currentLog = log;
      count = 1;
    }
  }

  // Don't forget the last entry
  if (currentLog !== null) {
    merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
  }

  return merged;
}
