import React, { useState } from "react";
import { useUnit } from "effector-react";
import { ru } from "../../dictionaries/ru.ts";
import {
  $words,
  addNewWord,
  addNewWords,
  hideWord,
  showWord,
} from "../model/words.model.ts";
import { PageLayout } from "../components/PageLayout.tsx";
import css from "./Words.module.css";

type Word = {
  id: string;
  word: string;
  lang: string;
  category?: string;
  hidden?: boolean;
};

const ruLetters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
const enLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function WordsPage() {
  const words = useUnit($words);

  const [selectedLang, setSelectedLang] = useState("RU");
  const [selectedLetter, setSelectedLetter] = useState("А");
  const [newWord, setNewWord] = useState("");
  const [showHidden, setShowHidden] = useState(true);

  const letters = selectedLang === "RU" ? ruLetters : enLetters;

  const filteredWords = words.filter((word) => {
    const matchesLang = word.lang === selectedLang;
    const matchesLetter = word.word[0].toUpperCase().startsWith(selectedLetter);
    const isVisible = showHidden ? true : !word.hidden;
    return matchesLang && matchesLetter && isVisible;
  });

  const handleWordClick = async (wordId: string, isHidden: boolean) => {
    try {
      if (isHidden) {
        await showWord(wordId);
      } else {
        await hideWord(wordId);
      }
    } catch (error) {
      console.error("Failed to toggle word visibility:", error);
    }
  };

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setSelectedLetter(lang === "RU" ? "А" : "A");
  };

  const handleAddWord = (e: React.FormEvent) => {
    e.preventDefault();

    addNewWord(newWord, selectedLang)
      .then(() => {
        setNewWord("");
      })
      .catch((err) => {
        console.error(err);
        if (String(err.message).includes("is a unique attribute on")) {
          alert(`Слово "${newWord}" уже добавлено`);
        }
      });
  };

  const existingWords = new Set(
    words.filter((w) => w.lang === "RU").map((w) => w.word),
  );
  const newWords = [...new Set(ru)]
    .filter((word) => !existingWords.has(word))
    .slice(0, 100);

  return (
    <PageLayout>
      <div className={css.container}>
        {newWords.length > 0 && (
          <div>
            <button
              onClick={() => {
                addNewWords(newWords, "RU")
                  .then(() => {
                    console.log(`Добавлено ${newWords.length} новых слов`);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              ADD <b>RU</b> {newWords.length}
            </button>
          </div>
        )}

        <LangSelector
          selectedLang={selectedLang}
          onLangChange={handleLangChange}
          totalWords={words.length}
        />

        <label className={css.checkboxLabel}>
          <input
            type="checkbox"
            checked={showHidden}
            onChange={(e) => setShowHidden(e.target.checked)}
          />
          Показать скрытые слова
        </label>

        <AddWordForm
          selectedLang={selectedLang}
          newWord={newWord}
          onWordChange={setNewWord}
          onSubmit={handleAddWord}
        />

        <LetterSelector
          letters={letters}
          selectedLetter={selectedLetter}
          onLetterChange={setSelectedLetter}
        />

        <WordsList
          filteredWords={filteredWords}
          selectedLetter={selectedLetter}
          onWordClick={handleWordClick}
        />
      </div>
    </PageLayout>
  );
}

type LangSelectorProps = {
  selectedLang: string;
  onLangChange: (lang: string) => void;
  totalWords: number;
};

function LangSelector({
  selectedLang,
  onLangChange,
  totalWords,
}: LangSelectorProps) {
  return (
    <div className={css.langSelector}>
      <button
        onClick={() => onLangChange("RU")}
        className={`${css.langButton} ${selectedLang === "RU" ? css.langButtonActive : css.langButtonInactive}`}
      >
        RU
      </button>
      <button
        onClick={() => onLangChange("EN")}
        className={`${css.langButton} ${selectedLang === "EN" ? css.langButtonActive : css.langButtonInactive}`}
      >
        EN
      </button>
      <p>{totalWords}</p>
    </div>
  );
}

type AddWordFormProps = {
  selectedLang: string;
  newWord: string;
  onWordChange: (word: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

function AddWordForm({
  selectedLang,
  newWord,
  onWordChange,
  onSubmit,
}: AddWordFormProps) {
  return (
    <form onSubmit={onSubmit} className={css.addWordForm}>
      <input
        type="text"
        placeholder="Слово"
        value={newWord}
        onChange={(e) => onWordChange(e.target.value)}
      />
      <button type="submit" disabled={!newWord.trim()}>
        Добавить {selectedLang}
      </button>
    </form>
  );
}

type LetterSelectorProps = {
  letters: string[];
  selectedLetter: string;
  onLetterChange: (letter: string) => void;
};

function LetterSelector({
  letters,
  selectedLetter,
  onLetterChange,
}: LetterSelectorProps) {
  return (
    <div className={css.letterSelector}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterChange(letter)}
          className={`${css.letterButton} ${selectedLetter === letter ? css.letterButtonActive : css.letterButtonInactive}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

type WordsListProps = {
  filteredWords: Word[];
  selectedLetter: string;
  onWordClick: (wordId: string, isHidden: boolean) => void;
};

function WordsList({
  filteredWords,
  selectedLetter,
  onWordClick,
}: WordsListProps) {
  return (
    <div>
      <h3>
        Слова на букву {selectedLetter} ({filteredWords.length}):
      </h3>
      {filteredWords.length === 0 ? (
        <p>Нет слов</p>
      ) : (
        <ol className={css.wordsList}>
          {filteredWords
            .toSorted((a, b) => a.word.localeCompare(b.word))
            .map((word) => {
              const isHidden = word.hidden || false;
              return (
                <li
                  key={word.id}
                  className={`${css.wordItem} ${isHidden ? css.wordItemHidden : ""}`}
                >
                  {word.word}
                  <button
                    onClick={() => onWordClick(word.id, isHidden)}
                    className={`${css.wordToggleButton} ${isHidden ? css.wordToggleButtonShow : css.wordToggleButtonHide}`}
                    title={isHidden ? "Восстановить слово" : "Скрыть слово"}
                  >
                    {isHidden ? "↻" : "✕"}
                  </button>
                </li>
              );
            })}
        </ol>
      )}
    </div>
  );
}
