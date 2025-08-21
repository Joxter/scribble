import { CanvasAndChatHistory, LineEvent } from "../types.ts";

export function findLastEventIndex(
  arr: CanvasAndChatHistory[],
  cb: (it: CanvasAndChatHistory) => boolean | undefined,
): { i: number } | null {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return { i };
    }
  }
  return null;
}

export function findLastEvent(
  arr: CanvasAndChatHistory[],
  cb: (it: CanvasAndChatHistory) => boolean | undefined,
): CanvasAndChatHistory | null {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return null;
}

export function getChatEvents(
  chat: CanvasAndChatHistory[],
  allEvents: CanvasAndChatHistory[],
) {
  const newChat = allEvents.filter(
    (it) =>
      it.type === "guess" ||
      it.type === "new-word" ||
      it.type === "choosing-word",
  );

  return newChat.length !== chat.length ? newChat : chat;
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
