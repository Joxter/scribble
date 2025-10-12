import { VecLike } from "./freehand/Vec";
import { Store } from "effector";
import { CanvasAndChatHistory, Game, GameParams } from "./types.ts";
import { words } from "../dictionaries/ru-300-chatgpt.ts";

export const canvasSize = 600;

export function liveQuery<T>(store: Store<T>, cb: (val: T) => () => void) {
  let prev: any;

  let unsub = () => {};

  store.watch((val) => {
    if (val !== prev) {
      unsub();
      unsub = cb(val);
      prev = val;
    }
  });
}

export function queryToStore<T>(store: Store<T>, cb: (val: T) => () => void) {
  let prev: any;

  let unsub = () => {};

  store.watch((val) => {
    if (val !== prev) {
      unsub();
      unsub = cb(val);
      prev = val;
    }
  });
}

export const URL_ROOM_NAME = (() => {
  const pathname = window.location.pathname;

  // Handle new routing structure: /scribble/room/roomId
  const roomMatch = pathname.match(/\/scribble\/room\/([^\/]+)/);
  if (roomMatch) {
    return roomMatch[1];
  }

  // Handle special routes
  if (pathname.endsWith("/words")) {
    return "words";
  }
  if (pathname.endsWith("/paintings")) {
    return "paintings";
  }

  // Legacy support: extract ID from query parameters
  const search = window.location.search.slice(1);
  if (search) return search;

  // Legacy support: extract ID from pathname like /scribble/some-id (not room/)
  const basePath = "/scribble/";
  if (pathname.startsWith(basePath)) {
    const id = pathname.slice(basePath.length);
    if (id && !id.includes("/")) {
      return id;
    }
  }

  return "";
})();

export function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function toPairs(arr: number[]): Array<[number, number]> {
  const pairs: Array<[number, number]> = [];

  for (let i = 0; i < arr.length - 1; i += 2) {
    pairs.push([arr[i], arr[i + 1]]);
  }

  return pairs;
}

export function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"],
  );

  d.push("Z");
  return d.map(fix2).join(" ");
}

export function fix2(n: number | string) {
  if (typeof n === "number") return +n.toFixed(1);
  return n;
}

export function newRandomRoomName() {
  const arr: string[] = [];

  while (arr.length < 3) {
    const w = randomFrom(words);
    if (!arr.includes(w)) {
      arr.push(w);
    }
  }

  return arr.join("-");
}

export function clamp(n: number, min: number, max: number): number;
export function clamp(n: number, min: number, max?: number): number {
  return Math.max(min, typeof max !== "undefined" ? Math.min(n, max) : n);
}

export function toDomPrecision(v: number) {
  return Math.round(v * 1e4) / 1e4;
}

export function toFixed(v: number) {
  return Math.round(v * 1e2) / 1e2;
}

export function assert(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

export function precise(A: VecLike) {
  return `${toDomPrecision(A.x)},${toDomPrecision(A.y)} `;
}

export function average(A: VecLike, B: VecLike) {
  return `${toDomPrecision((A.x + B.x) / 2)},${toDomPrecision((A.y + B.y) / 2)} `;
}

export function getBasePath(): string {
  return window.location.pathname.includes("/scribble") ? "/scribble/" : "/";
}

export function getUrl(path?: string): string {
  const basePath = getBasePath();
  if (!path) {
    return basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  }
  return `${basePath}${path}`;
}

type LegacyPaint = {
  events: CanvasAndChatHistory[];
  word: string;
  playerId: string;
};

export function eventsToGameState(
  events: CanvasAndChatHistory[],
  playerIds: string[],
  params: GameParams,
  words: string,
): [Game, LegacyPaint[]] {
  if (playerIds.length === 0) {
    throw new Event(`Can't play without players`);
  }

  let gameState: Game = {
    playerIds,
    params,
    messages: [],
    paintings: [],
    state: { state: "choosing-word", playerId: playerIds[0], words },
  };

  const paintings: LegacyPaint[] = [];
  const paintCntByPlayer: Record<string, string[]> = {};

  events.forEach((event) => {
    if (event.type === "line" || event.type === "undo") {
      paintings.at(-1)?.events.push(event);
      return;
    }

    if (
      event.type === "guess" ||
      event.type === "choosing-word" ||
      event.type === "new-word"
    ) {
      if (event.type === "guess" && gameState.state.state === "drawing") {
        // @ts-ignore
        const res = isRevealed(gameState.state.word, event.text);
        if (event.isRevealed === "revealed") {
          gameState.state.revealed.push({
            playerId: event.player,
          });
        }
      }
      gameState.messages.push(event);
    }

    if (event.type === "choosing-word") {
      gameState = {
        ...gameState,
        state: {
          state: "choosing-word",
          playerId: event.playerId,
          words: event.words,
        },
      };
    } else if (event.type === "new-word") {
      if (!paintCntByPlayer[event.playerId])
        paintCntByPlayer[event.playerId] = [];

      paintings.push({
        events: [],
        playerId: event.playerId,
        word: event.word,
      });

      paintCntByPlayer[event.playerId].push(event.playerId); // todo
      gameState = {
        ...gameState,
        state: {
          state: "drawing",
          playerId: event.playerId,
          word: event.word,
          revealed: [],
        },
      };
    }

    if (
      false &&
      Object.values(paintCntByPlayer).every(
        (paintIds) => paintIds.length >= gameState.params.rounds,
      )
    ) {
      gameState = {
        ...gameState,
        state: { state: "results" },
      };
    }
  });

  return [gameState, paintings];
}

export function isRevealed(
  hiddenWord: string,
  guess: string,
): "almost" | "revealed" | "none" {
  hiddenWord = hiddenWord.replace(/\S/g, "").toLowerCase();
  guess = hiddenWord.replace(/\S/g, "").toLowerCase();

  if (hiddenWord === guess) return "revealed";
  // todo add Levenshtein distance here
  return "none";
}

export function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export function promiseInLineTODO<T extends any[], R>() {
  let isRunning = false;
  let skipped: (() => Promise<any>) | null = null;

  return function runner(callback: () => Promise<any>): any {
    if (isRunning) {
      console.log("skipped");
      skipped = callback;
      return;
    }
    run(callback);

    function run(cb: () => Promise<any>) {
      isRunning = true;

      cb().finally(() => {
        isRunning = false;
        if (skipped) {
          run(skipped);
          skipped = null;
        }
      });
    }
  };
}
