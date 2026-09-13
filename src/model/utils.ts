import { CanvasAndChatHistory, LineEvent } from "../types.ts";

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
