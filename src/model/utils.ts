import {
  CanvasAndChatHistory,
  GAME_STATUS,
  LineEvent,
  Party,
} from "../types.ts";

export function newParty(): Party {
  return {
    gameState: { players: [], innerState: {} as any },
    name: "",
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
    if (item.type === "line") {
      lines.push(item);
    } else if (item.type === "undo") {
      lines.pop();
    }
  });

  return lines;
}
