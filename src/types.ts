export type PartyOLD = {
  players: { id: string; name: string }[];
  id: string;
  link: string;
  gamestage: "wait-players" | "ongoing" | "done";
  settings: {
    timer: number;
    suggestionsNumber: number;
    wordList: string;
    //
    smoothing: number; // 1
    thinning: number; // 0.1
    streamline: number; // 0
    easing: string; // linear
  };
  paintings: {
    // тут уже завершенные рисунки
    timestampStart: number;
    word: string;
    history: CanvasAndChatHistory[]; // чат и линии
    scores: {
      time: string;
      player: string;
      addedScore: number;
    }[];
  }[];
  currentCanvas: {
    history: CanvasAndChatHistory[]; // чат и линии
    word: string;
    currentLine: JSON[]; // то что что рисует прям сейчас мышкой игрок
  };
};

export type CurrentLine = {
  dots: [x: number, y: number][];
  color: string;
  width: number;
};

export type Player = {
  id: string;
  localId: string;
  name: string;
  avatar: string;
};

export type Party = {
  id: string;
  players2?: Player[];
  name: string;
  gameState: {
    drawing: string;
  };
};

type ChatAndLines = {
  history: CanvasAndChatHistory[]; // чат и линии
};

type JSON = any;

export type GameParams = {
  lang: Language;
  suggestions: number;
  rounds: number;
  canvasSize: number;
};

export type Game = {
  playerIds: string[];
  messages: (NewWord | ChoosingWord | GuessEvent)[];
  paintings: { id: string; name: string; playerId: string }[];
  params: GameParams;
  state:
    | {
        // settings
        state: "preparations";
        lang: Language;
        suggestions: number;
        rounds: number;
      }
    | {
        state: "choosing-word";
        playerId: string;
        words: string;
      }
    | {
        state: "drawing";
        playerId: string;
        word: string;
      }
    | {
        state: "results";
      };
};

const LANGS = ["RU", "EN"] as const;
export type Language = (typeof LANGS)[number];

export type GuessEvent = {
  type: "guess";
  id: string;
  player: string;
  text: string;
};

export type NewWord = {
  type: "new-word";
  id: string;
  playerId: string;
  word: string;
};

export type ChoosingWord = {
  type: "choosing-word";
  id: string;
  playerId: string;
  words: string; // word|word2|word3...
};

export type LineEvent = {
  type: "line";
  dots: [x: number, y: number, timestamp: number][];
  color: string;
  width: number;
};

export type CanvasAndChatHistory =
  | LineEvent
  | { type: "undo" }
  | { type: "bucket"; x: number; y: number; color: string }
  | NewWord
  | ChoosingWord
  | GuessEvent;
