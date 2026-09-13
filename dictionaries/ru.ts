// Все русские списки разом: дубликаты между ними не страшны, слова для игры
// берёт newRandomWords (src/utils.ts), а он гоняет список через Set.
// Расширения у импортов обязательны: этот модуль тянет за собой бэкенд,
// который грузит .ts напрямую нодой (см. README, раздел Deploy).
import { alisaWords } from "./ru-alisa.ts";
import { words } from "./ru-300-chatgpt.ts";
import { words as words1000 } from "./ru-1000-claude.ts";

export const ru = [...alisaWords, ...words, ...words1000];
