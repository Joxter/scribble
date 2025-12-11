import { VecLike } from "./freehand/Vec";
import { Store } from "effector";
import { IsRevealed } from "./types.ts";
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

export function newRandomWords(count: number) {
  const arr: string[] = [];

  while (arr.length < count) {
    const w = randomFrom(words);
    if (!arr.includes(w)) {
      arr.push(w);
    }
  }

  return arr;
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

/*
const examples = [
  ["", ""],
  [" ", " "],
  ["", " "],
  ["носорог", "НОСОРОГ"],
  ["носорог", "rino"],
  ["носорог", "носорогг"],
  ["носорог", "носорогг"],
  ["носорог", "новоног"],
  ["носорог", "нового"],
  ["носорог", "носоро"],
  ["носорог", "носорогносорог"],
  ["носорог", "носорогносорог"],
];

examples.forEach(([a, b]) => {
  console.log([a, b], compareWords(a, b), calcRevelead(a, b));
});
*/

export function calcRevealed(secret: string, guess: string): IsRevealed {
  const mistakes = levenshteinDistance(
    secret.toLowerCase().trim(),
    guess.toLowerCase().trim(),
  );

  if (mistakes === 0) {
    return "revealed";
  }

  return mistakes <= Math.ceil(secret.length / 4) ? "almost" : "none";
}

export function compareWords(secret: string, guess: string): number {
  return levenshteinDistance(
    secret.toLowerCase().trim(),
    guess.toLowerCase().trim(),
  );
}

function seededRandom(seed: number): () => number {
  let state = seed;
  return function () {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

console.log(generateClues("мяч", 60, 12345));
// console.log(generateClues("школа", 60, 12345));
// console.log(generateClues("какая то длинная строка", 60, 12345));

export function generateClues(
  secret: string,
  drawTimeSec: number,
  seed?: number,
): { time: number; clue: string }[] {
  // secret    "hello world"
  // init clue  _____ _____
  // 1 clue     __l__ __r__
  // ...

  const params = [
    // time left (%), reveal chars (%)
    { time: 0.5, chars: 0.3 }, // it should open 30% of letter for the first half of the time.
    { time: 0.75, chars: 0.6 }, // it should open additional 30% of letter for the 3d quater of time
    // do not open any new letter for the rest of the time
  ];

  // Get indices of all letter positions (not spaces or punctuation)
  const letterIndices: number[] = [];
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] !== " " && secret[i].trim() !== "") {
      letterIndices.push(i);
    }
  }

  if (letterIndices.length === 0) {
    return [];
  }

  // Shuffle letter indices for random reveal
  const random = seed !== undefined ? seededRandom(seed) : Math.random;
  const shuffled = [...letterIndices].sort(() => random() - 0.5);

  const clues: { time: number; clue: string }[] = [];
  const letterCount = letterIndices.length;

  // Calculate how many letters to reveal in each time segment
  let prevTime = 0;
  let prevChars = 0;

  for (const param of params) {
    const targetTime = drawTimeSec * param.time;
    const targetChars = Math.floor(letterCount * param.chars);
    const charsInSegment = targetChars - prevChars;
    const timeForSegment = targetTime - prevTime;

    // Create one clue per letter in this segment
    for (let i = 1; i <= charsInSegment; i++) {
      const totalRevealed = prevChars + i;
      const revealIndices = new Set(shuffled.slice(0, totalRevealed));

      let clue = "";
      for (let j = 0; j < secret.length; j++) {
        if (secret[j] === " ") {
          clue += " ";
        } else if (revealIndices.has(j)) {
          clue += secret[j];
        } else {
          clue += "_";
        }
      }

      clues.push({
        time: Math.floor(prevTime + (timeForSegment / charsInSegment) * i),
        clue,
      });
    }

    prevTime = targetTime;
    prevChars = targetChars;
  }

  return clues;
}

function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;

  const matrix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));

  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost, // substitution
      );
    }
  }

  return matrix[len1][len2];
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
