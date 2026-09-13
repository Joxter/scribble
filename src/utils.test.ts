import { expect, test, describe } from "vitest";
import {
  calcRevealed,
  clamp,
  compareWords,
  countReactions,
  generateClues,
  newRandomWords,
  nextTurn,
  normalizeRoomName,
  rankByScore,
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

describe("newRandomWords", () => {
  test("returns the requested amount, without repeats", () => {
    const got = newRandomWords(4);
    expect(got).toHaveLength(4);
    expect(new Set(got).size).toBe(4);
  });

  test("does not hang when asked for more words than the dictionary has", () => {
    expect(newRandomWords(100_000).length).toBeLessThan(100_000);
  });
});

describe("nextTurn", () => {
  // Крутит партию так же, как backend/server.ts: закончившийся ход
  // записывается в последний круг, потом спрашиваем, кто следующий.
  // Возвращает gameProgress по именам рисовавших.
  function playGame(players: string[], rounds: number) {
    const progress: string[][] = [[]];
    let current = players[0]!;

    for (let guard = 0; guard < 100; guard++) {
      progress.at(-1)!.push(current);

      const next = nextTurn(players, current, progress.length, rounds);
      if (!next) return progress;
      if (next.newRound) progress.push([]);
      current = next.playerId;
    }

    throw new Error("партия не закончилась за 100 ходов");
  }

  test("играет ровно столько кругов, сколько в настройках", () => {
    expect(playGame(["A", "B"], 3)).toEqual([
      ["A", "B"],
      ["A", "B"],
      ["A", "B"],
    ]);
    expect(playGame(["A", "B", "C"], 1)).toEqual([["A", "B", "C"]]);
    expect(playGame(["A"], 2)).toEqual([["A"], ["A"]]);
  });

  // Из-за этого игра заканчивалась на круг раньше настройки, а шапка
  // "N / rounds" считает круги по длине gameProgress и врала на единицу.
  test("не оставляет пустой круг в конце", () => {
    for (const rounds of [1, 3, 5, 10]) {
      const progress = playGame(["A", "B"], rounds);
      expect(progress.length).toBe(rounds);
      expect(progress.at(-1)).not.toEqual([]);
    }
  });

  test("внутри круга передаёт ход по порядку", () => {
    expect(nextTurn(["A", "B", "C"], "A", 1, 3)).toEqual({
      playerId: "B",
      newRound: false,
    });
    expect(nextTurn(["A", "B", "C"], "C", 1, 3)).toEqual({
      playerId: "A",
      newRound: true,
    });
    expect(nextTurn(["A", "B", "C"], "C", 3, 3)).toBe(null);
  });
});

describe("rankByScore", () => {
  test("sorts by score and numbers places from one", () => {
    const ranked = rankByScore([
      { id: "b", score: 100 },
      { id: "a", score: 200 },
      { id: "c", score: 50 },
    ]);

    expect(ranked.map((p) => [p.id, p.place])).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("ties share a place and eat the next ones", () => {
    const ranked = rankByScore([
      { id: "a", score: 200 },
      { id: "b", score: 100 },
      { id: "c", score: 100 },
      { id: "d", score: 50 },
    ]);

    expect(ranked.map((p) => p.place)).toEqual([1, 2, 2, 4]);
  });

  test("everybody tied is first", () => {
    const ranked = rankByScore([{ score: 0 }, { score: 0 }, { score: 0 }]);

    expect(ranked.map((p) => p.place)).toEqual([1, 1, 1]);
  });
});

describe("normalizeRoomName", () => {
  test("регистр и разделители не важны", () => {
    expect(normalizeRoomName("  Кот Лиса Ракета ")).toBe("кот-лиса-ракета");
    expect(normalizeRoomName("КОТ-ЛИСА-РАКЕТА")).toBe("кот-лиса-ракета");
    expect(normalizeRoomName("кот _ лиса--ракета")).toBe("кот-лиса-ракета");
  });

  test("имя из словаря с составным словом сходится с набранным руками", () => {
    const generated = normalizeRoomName(
      ["кот", "солнечная система", "НЛО"].join("-"),
    );

    expect(generated).toBe("кот-солнечная-система-нло");
    expect(normalizeRoomName("Кот солнечная система НЛО")).toBe(generated);
    expect(normalizeRoomName(generated)).toBe(generated);
  });
});

describe("countReactions", () => {
  test("суммирует по всем игрокам", () => {
    expect(
      countReactions({
        a: { "🔥": 3, "😂": 1 },
        b: { "🔥": 2 },
      }),
    ).toEqual({ "🔥": 5, "😂": 1 });
  });

  test("пусто, пока никто не нажимал", () => {
    expect(countReactions(undefined)).toEqual({});
    expect(countReactions({})).toEqual({});
  });
});
