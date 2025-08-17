import React, { useState } from "react";
import { getUrl } from "./utils.ts";

const words = [
  { word: "Арбуз", lang: "RU", category: "Фрукты" },
  { word: "Автомобиль", lang: "RU", category: "Транспорт" },
  { word: "Apple", lang: "EN", category: "Fruits" },
  { word: "Airplane", lang: "EN", category: "Transport" },
];

const ruLetters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
const enLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function WordsPage() {
  const [selectedLang, setSelectedLang] = useState("RU");
  const [selectedLetter, setSelectedLetter] = useState("А");
  const [newWord, setNewWord] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const letters = selectedLang === "RU" ? ruLetters : enLetters;

  const filteredWords = words.filter(
    (word) =>
      word.lang === selectedLang &&
      word.word.toUpperCase().startsWith(selectedLetter),
  );

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setSelectedLetter(lang === "RU" ? "А" : "A");
  };

  const handleAddWord = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding word:", {
      word: newWord,
      lang: selectedLang,
      category: newCategory,
    });
    setNewWord("");
    setNewCategory("");
  };

  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <div>
        <a href={getUrl()}>Главная</a>
        <h1>Все слова</h1>
      </div>

      <LangSelector
        selectedLang={selectedLang}
        onLangChange={handleLangChange}
        totalWords={words.length}
      />

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
}: {
  filteredWords: Array<{ word: string; lang: string; category: string }>;
  selectedLetter: string;
}) {
  return (
    <div>
      <h3>
        Слова на букву {selectedLetter} ({filteredWords.length}):
      </h3>
      {filteredWords.length === 0 ? (
        <p>Нет слов</p>
      ) : (
        <ul style={{ paddingLeft: "15px" }}>
          {filteredWords.map((word, index) => (
            <li key={index} style={{}}>
              {word.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
