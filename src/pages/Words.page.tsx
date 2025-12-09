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
import { css } from "@linaria/core";

const container = css`
  padding: 20px;
  display: grid;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const langSelector = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const langButton = css`
  padding: 8px 16px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
`;

const langButtonActive = css`
  background-color: #007bff;
  color: white;
`;

const langButtonInactive = css`
  background-color: #f8f9fa;
  color: black;
`;

const checkboxLabel = css`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const addWordForm = css`
  display: grid;
  grid-template-columns: 1fr 130px;
  gap: 4px;
  max-width: 300px;
`;

const letterSelector = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const letterButton = css`
  padding: 4px 8px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  min-width: 30px;
`;

const letterButtonActive = css`
  background-color: #007bff;
  color: white;
`;

const letterButtonInactive = css`
  background-color: #f8f9fa;
  color: black;
`;

const wordsList = css`
  padding-left: 20px;
`;

const wordItem = css`
  position: relative;
`;

const wordItemHidden = css`
  text-decoration: line-through;
  opacity: 0.6;
  color: #6c757d;
`;

const wordToggleButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 0;
  margin: 0 0 0 8px;
`;

const wordToggleButtonShow = css`
  color: #28a745;
`;

const wordToggleButtonHide = css`
  color: #dc3545;
`;

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
      <div className={container}>
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

        <label className={checkboxLabel}>
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
    <div className={langSelector}>
      <button
        onClick={() => onLangChange("RU")}
        className={`${langButton} ${selectedLang === "RU" ? langButtonActive : langButtonInactive}`}
      >
        RU
      </button>
      <button
        onClick={() => onLangChange("EN")}
        className={`${langButton} ${selectedLang === "EN" ? langButtonActive : langButtonInactive}`}
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
    <form onSubmit={onSubmit} className={addWordForm}>
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
    <div className={letterSelector}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterChange(letter)}
          className={`${letterButton} ${selectedLetter === letter ? letterButtonActive : letterButtonInactive}`}
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
        <ol className={wordsList}>
          {filteredWords
            .toSorted((a, b) => a.word.localeCompare(b.word))
            .map((word) => {
              const isHidden = word.hidden || false;
              return (
                <li
                  key={word.id}
                  className={`${wordItem} ${isHidden ? wordItemHidden : ""}`}
                >
                  {word.word}
                  <button
                    onClick={() => onWordClick(word.id, isHidden)}
                    className={`${wordToggleButton} ${isHidden ? wordToggleButtonShow : wordToggleButtonHide}`}
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
