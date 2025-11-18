import { createEvent, createStore } from "effector";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";
import { Language } from "../types.ts";

type Word = {
  id: string;
  word: string;
  lang: Language;
  category?: string;
  hidden?: boolean;
};

const updateWords = createEvent<Word[]>();
export const $words = createStore<Word[]>([]);

export const $wordsRu = $words.map((all) =>
  all.filter((it) => it.lang === "RU"),
);

$words.on(updateWords, (_, v) => v);

db.subscribeQuery({ words: {} }, (resp) => {
  if (resp.error) console.error(resp.error);
  if (resp.data) {
    // @ts-ignore
    updateWords(resp.data.words || []);
  }
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
        hidden: false,
      });
    }),
  );
}

export function hideWord(wordId: string) {
  return db.transact(db.tx.words[wordId].update({ hidden: true }));
}

export function showWord(wordId: string) {
  return db.transact(db.tx.words[wordId].update({ hidden: false }));
}
