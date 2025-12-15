export type CanvasLine = {
  dots: [x: number, y: number][];
  color: string;
  width: number;
};

export type CurrentCanvas = CanvasLine[];

export type Painting = {
  canvas: CanvasLine[];
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

export type Player2 = {
  id: string;
  name: string;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type ValueOf<T> = T[keyof T];

type Revealed = Record<
  string, // userId
  number // timestamp
>;

// export type PartyAttrs = Prettify<AppSchema["entities"]["party"]["attrs"]>;

export const GAME_STATUS = {
  nothing: "nothing",
  prepare: "prepare",
  inProgress: "in-progress",
  finished: "finished",
} as const;

export type GameStateDrawing = {
  state: "drawing";
  playerId: string; // who is drawing
  drawingId: string;
  word: string; // secret word
  allClues: { time: number; clue: string }[];
  startedAt: number;
  guessed: Revealed; // who guessed and their time
};

export type GameStateChoosingWord = {
  state: "choosing-word";
  playerId: string;
  words: string[];
};

export type GameStateFinished = {
  state: "game-finished";
};

export type GameStatePrepare = {
  state: "game-prepare";
};

export type GameState =
  | GameStatePrepare
  | GameStateChoosingWord
  | GameStateDrawing
  | GameStateFinished;

export type GameProgress = Array<
  {
    whoDrawId: string;
    scores: Record<string, number>;
    paintingId: string;
  }[]
>;

export type Party = {
  id: string;
  name: string;
  host: string;
  newPlayers: Player2[];
  gameProgress: GameProgress;
  staticPlayerIds: string[];
  status: ValueOf<typeof GAME_STATUS>;
  gameState: GameState;
  roomEvents: AllChatMessages[];
  gameParams: {
    rounds: number;
    wordSuggestions: number; // количество слов на выбор
    drawTime: number; // максимальное время на рисунок (сек)
  };
};

export type AllChatMessages =
  | GameStartedEvent
  | UserMessageEvent
  | NewWord
  | DrawingEndedEvent
  | GameFinishedEvent;

type JSON = any;

export type GameParams = {
  lang: Language;
  suggestions: number;
  rounds: number;
  canvasSize: number;
};

const LANGS = ["RU", "EN"] as const;
export type Language = (typeof LANGS)[number];

export type IsRevealed = "almost" | "revealed" | "none";

export type UserMessageEvent = {
  id: string;
  type: "user-message";
  payload: {
    playerId: string;
    text: string;
    isRevealed: IsRevealed;
  };
};

export type GameStartedEvent = {
  id: string;
  type: "game-started";
  payload: {
    playerId: string;
  };
};

export type NewWord = {
  type: "new-selected-word";
  id: string;
  payload: { playerId: string; word: string };
};

export type DrawingEndedEvent = {
  type: "drawing-ended";
  id: string;
  payload: {
    reason: "all-revealed" | "timeout";
    revealed: Revealed;
    nextPlayerId: string;
  };
};

export type GameFinishedEvent = {
  type: "game-finished";
  id: string;
  payload: {
    reason: "no-more-rounds";
  };
};

export type DrawingTimeout = {
  type: "drawing-timeout";
  id: string;
};

// @deprecated
export type ChoosingWord = {
  type: "choosing-word";
  id: string;
  playerId: string;
  words: string; // word|word2|word3...
};

// @deprecated
export type LineEvent = {
  type: "line";
  dots: [x: number, y: number][];
  color: string;
  width: number;
};

// @deprecated
export type CanvasAndChatHistory =
  | LineEvent
  | { type: "undo" }
  | NewWord
  | ChoosingWord
  | UserMessageEvent;
