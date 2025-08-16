import { alisaWords } from "./ru-alisa";
import { words } from "./ru-300-chatgpt";
import { words as words1000 } from "./ru-1000-claude";

export const ru = [...alisaWords, ...words, ...words1000];

console.log("RU", ru.length, [...new Set(ru)].length);
