export type Party = {
  players: string[];
  id: string;
  link: string;
  gamestage: "wait-players" | "ongoing" | "done";
  settings: {
    timer: number;
    suggestionsNumber: number;
    wordList: string;
  };
  history: HistoryItem[];
  canvas: {
    size: number;
    history: CanvasHistory[];
    word: string;
  };
};

type CanvasHistory =
  | {
      type: "line";
      timestamp: number;
      id: string;
      dots: [number, number][]; // x, y
      color: string;
      width: number;
    }
  | {
      type: "message";
      timestamp: number;
      player: string;
      text: string;
      status: null | "almost" | "done";
    }
  | { type: "notification"; timestamp: number; text: string; meta: any }
  | { type: "change-siggestion"; timestamp: number; text: string }; // init or updated

type HistoryItem =
  | {
      type: "painting";
      history: CanvasHistory[];
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
