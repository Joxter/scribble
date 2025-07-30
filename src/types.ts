export type Party = {
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

type JSON = any;

export type CanvasAndChatHistory =
  | {
      type: "line";
      dots: [x: number, y: number, timestamp: number][];
      color: string;
      width: number;
    }
  | { type: "undo-line" }
  | {
      type: "message";
      timestamp: number;
      firstCharTimestamp: number;
      player: string;
      text: string;
    };

export type HistoryItem =
  | {
      type: "painting";
      history: CanvasAndChatHistory[];
      timestamp: number;
    }
  | {
      type: "score";
      data: { player: string; addedScores: number }[];
      timestamp: number;
    }
  | {
      type: "suggestions";
      words: string[];
      timestamp: number;
    };
