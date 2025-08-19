import { CanvasAndChatHistory } from "../types.ts";

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
