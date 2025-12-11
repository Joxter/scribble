import { expect, test, describe } from "vitest";
import { generateClues } from "./utils";

describe("generateClues", () => {
  test("should return one clue per revealed letter", () => {
    const clues = generateClues("hello world", 60, 12345);
    expect(clues).toEqual([
      { time: 10, clue: "__l__ _____" },
      { time: 20, clue: "__l_o _____" },
      { time: 30, clue: "__l_o __r__" },
      { time: 35, clue: "__l_o __rl_" },
      { time: 40, clue: "_el_o __rl_" },
      { time: 45, clue: "_el_o _orl_" },
    ]);
  });

  test("another case", () => {
    const clues = generateClues("университет", 60, 12345);
    expect(clues).toEqual([
      { time: 10, clue: "__________т" },
      { time: 20, clue: "__и_______т" },
      { time: 30, clue: "__и_е_____т" },
      { time: 35, clue: "__и_е__и__т" },
      { time: 40, clue: "__и_е__ит_т" },
      { time: 45, clue: "_ни_е__ит_т" },
    ]);
  });

  test("мяч", () => {
    const clues = generateClues("мяч", 60, 12345);
    expect(clues).toEqual([
      { time: 30, clue: "__о__" },
      { time: 37, clue: "__о_а" },
      { time: 45, clue: "_ко_а" },
    ]);
  });

  test("школа", () => {
    const clues = generateClues("школа", 60, 12345);
    expect(clues).toEqual([
      { time: 30, clue: "__о__" },
      { time: 37, clue: "__о_а" },
      { time: 45, clue: "_ко_а" },
    ]);
  });

  test("какая то длинная строка", () => {
    const clues = generateClues("какая то длинная строка", 60, 12345);
    expect(clues).toEqual([
      { time: 5, clue: "_____ __ _____а_ ______" },
      { time: 10, clue: "_____ __ ___н_а_ ______" },
      { time: 15, clue: "_____ __ ___н_а_ ____к_" },
      { time: 20, clue: "__к__ __ ___н_а_ ____к_" },
      { time: 25, clue: "__к__ __ ___н_а_ с___к_" },
      { time: 30, clue: "__к_я __ ___н_а_ с___к_" },
      { time: 32, clue: "__к_я __ д__н_а_ с___к_" },
      { time: 35, clue: "__к_я __ дл_н_а_ с___к_" },
      { time: 37, clue: "_ак_я __ дл_н_а_ с___к_" },
      { time: 40, clue: "_ак_я __ дл_н_а_ с__ок_" },
      { time: 42, clue: "_ак_я _о дл_н_а_ с__ок_" },
      { time: 45, clue: "_ак_я _о дл_нна_ с__ок_" },
    ]);
  });
});
