import { NewParty } from "../model/party.model.ts";
import {
  AllChatMessages,
  CurrentCanvas,
  GAME_STATUS,
  GameProgress,
  IsRevealed,
  Painting,
  UserMessageEvent,
} from "../types.ts";
import { generateClues } from "../utils.ts";

export const ME = { id: "mock-me", name: "Джо" };
export const ANNA = { id: "mock-anna", name: "Аня" };
export const BORIS = { id: "mock-boris", name: "Боря" };
export const VIKA = { id: "mock-vika", name: "Вика" };

const allPlayers = [ME, ANNA, BORIS, VIKA];

const WORD = "носорог";
const DRAW_TIME = 60;

let eventCounter = 0;
function nextEventId() {
  eventCounter += 1;
  return `mock-event-${eventCounter}`;
}

function msg(
  playerId: string,
  text: string,
  isRevealed: IsRevealed = "none",
): UserMessageEvent {
  return {
    id: nextEventId(),
    type: "user-message",
    payload: { playerId, text, isRevealed },
  };
}

function baseParty(): NewParty {
  return {
    id: "mock-party-id",
    name: "dev-room",
    host: ANNA.id,
    status: GAME_STATUS.prepare,
    gameState: { state: "game-prepare" },
    gameProgress: [[]],
    staticPlayerIds: allPlayers.map((p) => p.id),
    gameParams: { rounds: 5, wordSuggestions: 3, drawTime: DRAW_TIME },
    newPlayers: allPlayers.map((p) => ({ id: p.id, name: p.name })),
    roomEvents: [],
  };
}

function finishedTurn(
  artistId: string,
  guesserIds: string[],
  paintingId: string,
): GameProgress[number][number] {
  const scores: Record<string, number> = {};
  guesserIds.forEach((id, i) => {
    scores[id] = Date.now() - 60_000 + i * 10_000;
  });

  return { whoDrawId: artistId, scores, paintingId };
}

function drawingEvents(artistId: string): AllChatMessages[] {
  return [
    { id: nextEventId(), type: "game-started", payload: { playerId: artistId } },
    {
      id: nextEventId(),
      type: "new-selected-word",
      payload: { playerId: artistId, word: WORD },
    },
    msg(BORIS.id, "кит?"),
    msg(ME.id, "бегемот"),
    msg(VIKA.id, "носорок", "almost"),
    msg(VIKA.id, WORD, "revealed"),
  ];
}

function prepareParty(hostId: string): NewParty {
  return { ...baseParty(), host: hostId };
}

function drawingParty(artistId: string): NewParty {
  return {
    ...baseParty(),
    status: GAME_STATUS.inProgress,
    gameState: {
      state: "drawing",
      playerId: artistId,
      drawingId: "mock-drawing-id",
      word: WORD,
      allClues: generateClues(WORD, DRAW_TIME, 42),
      startedAt: Date.now() - 25_000,
      guessed: { [VIKA.id]: Date.now() - 8_000 },
    },
    gameProgress: [[finishedTurn(BORIS.id, [ME.id, VIKA.id], "mock-p-1")]],
    roomEvents: drawingEvents(artistId),
  };
}

function choosingParty(chooserId: string): NewParty {
  return {
    ...baseParty(),
    status: GAME_STATUS.inProgress,
    gameState: {
      state: "choosing-word",
      playerId: chooserId,
      words: [WORD, "самолёт", "радуга"],
    },
    gameProgress: [[finishedTurn(ANNA.id, [ME.id, BORIS.id, VIKA.id], "mock-p-1")]],
    roomEvents: [
      ...drawingEvents(ANNA.id),
      {
        id: nextEventId(),
        type: "drawing-ended",
        payload: {
          reason: "all-revealed",
          revealed: { [ME.id]: Date.now() - 20_000, [VIKA.id]: Date.now() - 8_000 },
          nextPlayerId: chooserId,
        },
      },
    ],
  };
}

function finishedParty(hostId: string = ANNA.id): NewParty {
  const round1 = [
    finishedTurn(ME.id, [ANNA.id, BORIS.id, VIKA.id], "mock-p-1"),
    finishedTurn(ANNA.id, [ME.id, VIKA.id], "mock-p-2"),
    finishedTurn(BORIS.id, [VIKA.id], "mock-p-3"),
    finishedTurn(VIKA.id, [ME.id, ANNA.id], "mock-p-4"),
  ];
  const round2 = [
    finishedTurn(ME.id, [VIKA.id], "mock-p-5"),
    finishedTurn(ANNA.id, [ME.id, BORIS.id], "mock-p-6"),
    finishedTurn(BORIS.id, [ME.id, ANNA.id, VIKA.id], "mock-p-7"),
    finishedTurn(VIKA.id, [BORIS.id], "mock-p-8"),
  ];

  return {
    ...baseParty(),
    host: hostId,
    status: GAME_STATUS.finished,
    gameState: { state: "game-finished" },
    gameProgress: [round1, round2, []],
    roomEvents: [
      ...drawingEvents(VIKA.id),
      {
        id: nextEventId(),
        type: "game-finished",
        payload: { reason: "no-more-rounds" },
      },
    ],
  };
}

function interpolate(points: [number, number][], step = 6): [number, number][] {
  const out: [number, number][] = [];

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const n = Math.max(2, Math.round(Math.hypot(x2 - x1, y2 - y1) / step));

    for (let j = 0; j < n; j++) {
      const t = j / n;
      out.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]);
    }
  }

  out.push(points[points.length - 1]);
  return out;
}

function circle(cx: number, cy: number, r: number): [number, number][] {
  const dots: [number, number][] = [];

  for (let i = 0; i <= 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    dots.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }

  return dots;
}

// домик с солнцем, чтобы канвас не был пустым
function doodle(): CurrentCanvas {
  return [
    { color: "#8b4513", width: 8, dots: interpolate([[150, 270], [300, 140], [450, 270]]) },
    { color: "#8b4513", width: 8, dots: interpolate([[180, 270], [180, 450], [420, 450], [420, 270]]) },
    { color: "#34495e", width: 8, dots: interpolate([[270, 450], [270, 350], [330, 350], [330, 450]]) },
    { color: "#ffd129", width: 8, dots: circle(505, 95, 40) },
    { color: "#2ecc71", width: 15, dots: interpolate([[40, 480], [560, 480]]) },
  ];
}

// рисунки партии для галереи на финальном экране: разные, чтобы отличать друг от друга
function mockPaintings(): Painting[] {
  const lines = doodle();
  const variants: CurrentCanvas[] = [
    lines,
    [lines[3], lines[4]],
    [lines[0], lines[1], lines[4]],
    [lines[2], lines[3]],
    [lines[1], lines[4]],
    [lines[0], lines[3]],
    [lines[2], lines[4]],
    [lines[0], lines[1], lines[2]],
    [lines[3]],
    [lines[1], lines[2], lines[4]],
  ];
  const words = [
    "носорог",
    "самолёт",
    "радуга",
    "чайник",
    "слон",
    "барабан",
    "ракета",
    "зонт",
    "мельница",
    "велосипед",
  ];

  return words.map((word, i) => ({
    id: `mock-p-${i + 1}`,
    playerId: allPlayers[i % allPlayers.length].id,
    word,
    canvas: variants[i],
  }));
}

export type MockScreen = {
  title: string;
  make: () => {
    party: NewParty;
    canvas: CurrentCanvas;
    paintings?: Painting[];
  };
};

export const mockScreens = {
  prepareHost: {
    title: "Комната: я хост",
    make: () => ({ party: prepareParty(ME.id), canvas: [] }),
  },
  prepareGuest: {
    title: "Комната: я гость",
    make: () => ({ party: prepareParty(ANNA.id), canvas: [] }),
  },
  choosingMe: {
    title: "Выбор слова: я выбираю",
    make: () => ({ party: choosingParty(ME.id), canvas: [] }),
  },
  choosingOther: {
    title: "Выбор слова: другой выбирает",
    make: () => ({ party: choosingParty(ANNA.id), canvas: [] }),
  },
  drawingMe: {
    title: "Рисование: я рисую",
    make: () => ({ party: drawingParty(ME.id), canvas: doodle() }),
  },
  drawingGuess: {
    title: "Рисование: я отгадываю",
    make: () => ({ party: drawingParty(ANNA.id), canvas: doodle() }),
  },
  finished: {
    title: "Финал: я гость",
    make: () => ({
      party: finishedParty(),
      canvas: [],
      paintings: mockPaintings(),
    }),
  },
  finishedHost: {
    title: "Финал: я хост",
    make: () => ({
      party: finishedParty(ME.id),
      canvas: [],
      paintings: mockPaintings(),
    }),
  },
} satisfies Record<string, MockScreen>;
