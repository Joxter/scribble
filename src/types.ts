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

export type CanvasAndChatHistory =
  | {
      type: "line";
      dots: [x: number, y: number, timestamp: number][];
      color: string;
      width: number;
    }
  | { type: "undo" }
  | { type: "bucket"; x: number; y: number; color: string }
  | {
      type: "message";
      timestamp: number;
      firstCharTimestamp: number;
      player: string;
      text: string;
    };
