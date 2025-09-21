import React, { useState } from "react";
import { getUrl } from "./utils.ts";
import { useUnit } from "effector-react";
import { ru } from "../dictionaries/ru.ts";
import {
  $words,
  addNewWord,
  addNewWords,
  hideWord,
  showWord,
} from "./model/words.model.ts";

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
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <div>
        <a href={getUrl()}>Главная</a>
        <h1>Все слова</h1>
      </div>

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

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={showHidden}
            onChange={(e) => setShowHidden(e.target.checked)}
          />
          Показать скрытые слова
        </label>
      </div>

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
        showHidden={showHidden}
        onWordClick={handleWordClick}
      />
    </div>
  );
}

function LangSelector({
  selectedLang,
  onLangChange,
  totalWords,
}: {
  selectedLang: string;
  onLangChange: (lang: string) => void;
  totalWords: number;
}) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button
        onClick={() => onLangChange("RU")}
        style={{
          padding: "8px 16px",
          backgroundColor: selectedLang === "RU" ? "#007bff" : "#f8f9fa",
          color: selectedLang === "RU" ? "white" : "black",
          border: "1px solid #dee2e6",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        RU
      </button>
      <button
        onClick={() => onLangChange("EN")}
        style={{
          padding: "8px 16px",
          backgroundColor: selectedLang === "EN" ? "#007bff" : "#f8f9fa",
          color: selectedLang === "EN" ? "white" : "black",
          border: "1px solid #dee2e6",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <p>{totalWords}</p>
    </div>
  );
}

function AddWordForm({
  selectedLang,
  newWord,
  onWordChange,
  onSubmit,
}: {
  selectedLang: string;
  newWord: string;
  onWordChange: (word: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 130px",
          gap: "4px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Слово"
          value={newWord}
          onChange={(e) => onWordChange(e.target.value)}
          style={{}}
        />
        <button type="submit" disabled={!newWord.trim()}>
          Добавить {selectedLang}
        </button>
      </form>
    </div>
  );
}

function LetterSelector({
  letters,
  selectedLetter,
  onLetterChange,
}: {
  letters: string[];
  selectedLetter: string;
  onLetterChange: (letter: string) => void;
}) {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {letters.map((letter) => (
          <button
            key={letter}
            onClick={() => onLetterChange(letter)}
            style={{
              padding: "4px 8px",
              backgroundColor:
                selectedLetter === letter ? "#007bff" : "#f8f9fa",
              color: selectedLetter === letter ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
              minWidth: "30px",
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

function WordsList({
  filteredWords,
  selectedLetter,
  onWordClick,
}: {
  filteredWords: Word[];
  selectedLetter: string;
  onWordClick: (wordId: string, isHidden: boolean) => void;
}) {
  return (
    <div>
      <h3>
        Слова на букву {selectedLetter} ({filteredWords.length}):
      </h3>
      {filteredWords.length === 0 ? (
        <p>Нет слов</p>
      ) : (
        <ol style={{ paddingLeft: "20px" }}>
          {filteredWords
            .toSorted((a, b) => a.word.localeCompare(b.word))
            .map((word) => {
              const isHidden = word.hidden || false;
              return (
                <li
                  key={word.id}
                  style={{
                    textDecoration: isHidden ? "line-through" : "none",
                    opacity: isHidden ? 0.6 : 1,
                    color: isHidden ? "#6c757d" : "inherit",
                  }}
                >
                  {word.word}
                  <button
                    onClick={() => onWordClick(word.id, isHidden)}
                    style={{
                      backgroundColor: "transparent",
                      color: isHidden ? "#28a745" : "#dc3545",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "0",
                      margin: "0",
                      marginLeft: "8px",
                    }}
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
