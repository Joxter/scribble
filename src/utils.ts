// Модуль грузится и бэкендом (см. README/Deploy), а нода не резолвит импорты
// без расширения и не умеет стирать типы, не помеченные `import type`.
import type { VecLike } from "./freehand/Vec.ts";
import type { Store } from "effector";
import type { GameProgress, IsRevealed, PaintingReactions } from "./types.ts";
import { ru } from "../dictionaries/ru.ts";

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

// списки пересекаются между собой и внутри себя, поэтому уникальных слов
// заметно меньше, чем ru.length
const uniqWords = [...new Set(ru)];

export function newRandomWords(count: number) {
  const pool = [...uniqWords];
  const arr: string[] = [];

  while (arr.length < Math.min(count, uniqWords.length)) {
    const i = Math.floor(Math.random() * pool.length);
    arr.push(pool.splice(i, 1)[0]!);
  }

  return arr;
}

// Имя комнаты — то, что вводят руками, чтобы зайти: регистр и чем разделены
// слова, значения не имеют. Пробел внутри слова тоже разделитель — имена
// собираются из словаря, а там попадаются «солнечная система» и «НЛО».
export function normalizeRoomName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[\s\-_]+/g, "-");
}

// В базе реакции разложены по игрокам, на экране нужна сумма по эмодзи
export function countReactions(
  reactions: PaintingReactions | undefined,
): Record<string, number> {
  const totals: Record<string, number> = {};

  Object.values(reactions || {}).forEach((byEmoji) => {
    Object.entries(byEmoji).forEach(([emoji, count]) => {
      totals[emoji] = (totals[emoji] || 0) + count;
    });
  });

  return totals;
}

// Рисунок не знает своей комнаты: связь «комната → paintingId» лежит только
// в её gameProgress. Отсюда карта, по которой профиль группирует галерею.
export function paintingRooms(
  parties: { name: string; gameProgress?: GameProgress }[],
): Record<string, string> {
  const rooms: Record<string, string> = {};

  parties.forEach((party) => {
    (party.gameProgress || []).forEach((round) => {
      round.forEach((turn) => {
        if (turn.paintingId) rooms[turn.paintingId] = party.name;
      });
    });
  });

  return rooms;
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

export function wordToZeroClue(word: string): string {
  return word.replace(/[^\s-! ,.]/g, "_");
}

function shuffle<T>(array: T[], rng: () => number = Math.random): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function generateClues(
  secret: string,
  drawTimeSec: number,
  seed?: number,
): { time: number; clue: string }[] {
  let cluesSteps: Record<number, string> = {
    3: "............................1............................1..",
    4: ".................1..................1....................1..",
    5: "........1..............1.................1...............1..",
    6: "........1..............1.................1...............1..",
    7: "........1.........1...........1..........1...............1..",
    8: "........1.........1...........1..........1...............1..",
    9: "........1.........1...........1..........1..............1...",
    10: "........1.........1...........1..........1..............1...",
    11: "........1......1........1.........1......1..............1...",
    12: "........1......2........1.........1......1..............1...",
    13: "........1......2........1.........1......1..............1...",
    14: "........1......2........1.........1......1..............1...",
    15: "........1......2........2.........1......1..............1...",
    16: "........1......2........2.........1......1..............1...",
    17: "........1......2........2.........1......1..............1...",
    18: "........2......2........2.........2......1..............1...",
    19: "........2......2........2.........2......1..............1...",
    20: "........2......2........2.........2......2..............1...",
  };

  const currentClue = wordToZeroClue(secret).split("");
  const clueSize = currentClue.filter((it) => it === "_").length;

  let result = [{ time: 0, clue: currentClue.join("") }];

  let pattern = cluesSteps[clueSize] || cluesSteps[20];

  const letterIndices: number[] = [];
  for (let i = 0; i < currentClue.length; i++) {
    if (currentClue[i] === "_") letterIndices.push(i);
  }

  const random = seed !== undefined ? seededRandom(seed) : Math.random;
  const shuffled = shuffle(letterIndices, random);

  let timeK = drawTimeSec / pattern.length;
  pattern.split("").forEach((cnt, i) => {
    if (+cnt) {
      for (let j = 1; j <= +cnt; j++) {
        const openInd = shuffled.pop()!;
        currentClue[openInd] = secret[openInd];
      }

      result.push({
        time: Math.floor(i * timeK),
        clue: currentClue.join(""),
      });
    }
  });

  return result;
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

export function calculateTurnPoints(
  turn: GameProgress[number][number],
): Record<string, number> {
  const points: Record<string, number> = {};

  const sortedGuessers = Object.entries(turn.scores).sort(
    ([, timeA], [, timeB]) => timeA - timeB,
  );

  sortedGuessers.forEach(([playerId], index) => {
    points[playerId] = Math.max(100 - index * 10, 10);
  });

  if (sortedGuessers.length > 0) {
    points[turn.whoDrawId] = (points[turn.whoDrawId] || 0) + 50;
  }

  return points;
}

// Кто рисует следующим после закончившегося хода; null — кругов больше нет.
// playedRounds — длина gameProgress уже с записанным в неё ходом, то есть
// номер идущего круга. Решает сервер (backend/server.ts), здесь — чтобы
// правило было одно и его можно было прогнать тестом.
export function nextTurn(
  players: string[],
  currentPlayerId: string,
  playedRounds: number,
  rounds: number,
): { playerId: string; newRound: boolean } | null {
  // рисующий вышел из комнаты по ходу дела — indexOf даст -1, и круг пойдёт
  // с первого игрока заново. Так было и до переезда таймера на сервер.
  const next = players[players.indexOf(currentPlayerId) + 1];
  if (next) return { playerId: next, newRound: false };

  // круг закончился. Новый заводим, только если он реально будет сыгран:
  // иначе игра заканчивалась бы на круг раньше настройки, а в gameProgress
  // оставался пустой хвост.
  if (playedRounds < rounds && players[0]) {
    return { playerId: players[0], newRound: true };
  }

  return null;
}

export function calculateTotalScores(
  gameProgress: GameProgress,
): Record<string, number> {
  const totals: Record<string, number> = {};

  gameProgress.forEach((round) => {
    round.forEach((turn) => {
      Object.entries(calculateTurnPoints(turn)).forEach(([playerId, pts]) => {
        totals[playerId] = (totals[playerId] || 0) + pts;
      });
    });
  });

  return totals;
}

// Места как в Mario Kart: одинаковые очки — одно место, а следующие за ними
// места пропускаются (200, 100, 100, 50 → 1, 2, 2, 4).
export function rankByScore<T extends { score: number }>(
  players: T[],
): (T & { place: number })[] {
  const sorted = [...players].sort((a, b) => b.score - a.score);

  // findIndex по отсортированному списку: первый с такими же очками и задаёт
  // место. Игроков в партии единицы, квадрат тут дешевле аккумулятора.
  return sorted.map((p) => ({
    ...p,
    place: sorted.findIndex((o) => o.score === p.score) + 1,
  }));
}
