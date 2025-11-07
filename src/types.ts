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

export type CanvasLine = {
  dots: [x: number, y: number][];
  color: string;
  width: number;
};

export type CurrentCanvas = CanvasLine[];

export type Painting = {
  canvas: (LineEvent | { type: "undo" })[];
  playerId: string;
  word: string;
  id: string;
};

export type Player = {
  id: string;
  localId: string;
  name: string;
  avatar: string;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type ValueOf<T> = T[keyof T];

// export type PartyAttrs = Prettify<AppSchema["entities"]["party"]["attrs"]>;

export const GAME_STATUS = {
  nothing: "nothing",
  prepare: "prepare",
  inProgress: "in-progress",
  finished: "finished",
} as const;

export type Party = {
  id: string;
  name: string;
  host: string;
  players: Player[];
  status: ValueOf<typeof GAME_STATUS>;
  gameState: {
    players: string[]; // localIds
    innerState:
      | { state: "choosing-word"; playerId: string; words: string[] }
      | { state: "drawing"; playerId: string; word: string };
  };
  roomEvents: AllChatMessages[];
  gameParams: {
    rounds: number;
    wordSuggestions: number; // количество слов на выбор
    drawTime: number; // максимальное время на рисунок (сек)
  };
};

type AllChatMessages = UserMessageEvent | NewWord;

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
  messages: (NewWord | ChoosingWord | UserMessageEvent)[];
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
        revealed: { playerId: string }[];
      }
    | {
        state: "results";
      };
};

const LANGS = ["RU", "EN"] as const;
export type Language = (typeof LANGS)[number];

export type UserMessageEvent = {
  id: string;
  type: "user-message";
  payload: {
    playerId: string;
    text: string;
    isRevealed: "almost" | "revealed" | "none";
  };
};

export type DrawingTimeout = {
  type: "drawing-timeout";
  id: string;
};

export type NewWord = {
  type: "new-selected-word"; // todo "new-word-selected"
  id: string;
  payload: { playerId: string; word: string };
};

export type ChoosingWord = {
  type: "choosing-word";
  id: string;
  playerId: string;
  words: string; // word|word2|word3...
};

export type LineEvent = {
  type: "line";
  dots: [x: number, y: number][];
  color: string;
  width: number;
};

export type CanvasAndChatHistory =
  | LineEvent
  | { type: "undo" }
  | NewWord
  | ChoosingWord
  | UserMessageEvent;
