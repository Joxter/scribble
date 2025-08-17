import { createEvent, createStore } from "effector";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";

type Word = { id: string; word: string; lang: string; category?: string };

const updateWords = createEvent<Word[]>();
export const $words = createStore<Word[]>([]);

$words.on(updateWords, (_, v) => v);

db.subscribeQuery({ words: {} }, (resp) => {
  if (resp.error) console.error(resp.error);
  if (resp.data) updateWords(resp.data.words || []);
});

export function addNewWord(word: string, lang: string) {
  return db.transact(
    db.tx.words[id()].create({
      word: word.trim(),
      lang: lang.toUpperCase(),
      category: "",
    }),
  );
}

export function addNewWords(words: string[], lang: string) {
  return db.transact(
    words.slice(0, 100).map((word) => {
      return db.tx.words[id()].create({
        word: word.trim(),
        lang: "RU",
        category: "",
      });
    }),
  );
}
