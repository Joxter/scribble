import { expect, test, describe } from "vitest";
import {
  calcRevealed,
  clamp,
  compareWords,
  generateClues,
  toPairs,
  wordToZeroClue,
} from "./utils.ts";

describe("wordToZeroClue", () => {
  test("replaces letters with underscores", () => {
    expect(wordToZeroClue("hello")).toBe("_____");
  });

  test("keeps spaces, hyphens and punctuation", () => {
    expect(wordToZeroClue("hello world")).toBe("_____ _____");
    expect(wordToZeroClue("well-known")).toBe("____-_____");
  });
});

describe("generateClues", () => {
  test("first clue is the fully hidden word", () => {
    const clues = generateClues("университет", 60, 1);
    expect(clues[0]).toEqual({ time: 0, clue: wordToZeroClue("университет") });
  });

  test("is deterministic for the same seed", () => {
    const a = generateClues("hello world", 60, 12345);
    const b = generateClues("hello world", 60, 12345);
    expect(a).toEqual(b);
  });

  test("only reveals letters, never hides them back", () => {
    const clues = generateClues("какая то длинная строка", 90, 42);

    for (let i = 1; i < clues.length; i++) {
      const prev = clues[i - 1].clue;
      const cur = clues[i].clue;

      for (let j = 0; j < cur.length; j++) {
        if (prev[j] !== "_") {
          expect(cur[j]).toBe(prev[j]);
        }
      }
    }
  });

  test("never fully reveals the secret word", () => {
    const secret = "школа";
    const clues = generateClues(secret, 60, 7);

    const lastClue = clues.at(-1)!.clue;
    expect(lastClue).not.toBe(secret);
    expect(lastClue.includes("_")).toBe(true);
  });

  test("clue times stay within the draw time", () => {
    const drawTime = 60;
    const clues = generateClues("hello world", drawTime, 9);

    for (const { time } of clues) {
      expect(time).toBeGreaterThanOrEqual(0);
      expect(time).toBeLessThanOrEqual(drawTime);
    }
  });
});

describe("calcRevealed", () => {
  test("exact match is revealed", () => {
    expect(calcRevealed("носорог", "носорог")).toBe("revealed");
  });

  test("case and surrounding whitespace are ignored", () => {
    expect(calcRevealed("носорог", " НОСОРОГ ")).toBe("revealed");
  });

  test("a small typo counts as almost", () => {
    expect(calcRevealed("носорог", "носорогг")).toBe("almost");
  });

  test("an unrelated word is not revealed", () => {
    expect(calcRevealed("носорог", "rino")).toBe("none");
  });
});

describe("compareWords", () => {
  test("returns 0 for identical words", () => {
    expect(compareWords("test", "test")).toBe(0);
  });

  test("returns the edit distance otherwise", () => {
    expect(compareWords("kitten", "sitting")).toBe(3);
  });
});

describe("clamp", () => {
  test("clamps between min and max", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test("only enforces min when max is Infinity", () => {
    expect(clamp(-5, 0, Infinity)).toBe(0);
    expect(clamp(100, 0, Infinity)).toBe(100);
  });
});

describe("toPairs", () => {
  test("groups numbers into pairs", () => {
    expect(toPairs([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("drops a trailing unpaired element", () => {
    expect(toPairs([1, 2, 3])).toEqual([[1, 2]]);
  });
});
