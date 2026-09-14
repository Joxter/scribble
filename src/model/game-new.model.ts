import { createEvent, createStore, sample } from "effector";
import { Player2 } from "../types.ts";
import { calcRevealed } from "../utils.ts";
import { mergeLogi } from "./utils.ts";
import { createDrawing } from "./drawing.model.ts";
import { authOrCreateUser, selectWord, sendMessage } from "../db-things.ts";
import { createParty } from "./party.model.ts";

const user = createUser();

export const $player = user.$user;
export const $localId = $player.map((p) => p?.id || "");

export const messageSent = createEvent<{ guess: string }>();
export const newWordSelected = createEvent<string>();

export const log = createEvent<any>();
export const $logi = createStore<any[]>([]);
$logi.on(log, (s, l) => [...s, l]);
export const $logiSmol = $logi.map(mergeLogi);

export const party = createParty($localId);

export const {
  $newParty,
  $partyStatus,
  $allChatEvents,
  $currentPlayers,
  $playerAvatars,
  $playerColors,
  $partyPaintingIds,
  $partyPaintings,
  $lastTurn,
  $lastPainting,
  $guessed,
  $choosingWord,
  $chooseTimeout,
} = party;

const drawing = createDrawing({
  $localId,
  $newParty,
  log,
  $timeout: party.$timeout,
});

export const { $drawing, currentLine } = drawing;

sample({
  source: [$localId, $newParty] as const,
  clock: newWordSelected,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], word]) => {
  if (party) selectWord(localId, party, word);
});

sample({
  source: [$localId, $newParty] as const,
  clock: messageSent,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], { guess }]) => {
  if (!party) return;
  const gameState = party.gameState;
  const secretWord = gameState.state === "drawing" ? gameState.word : null;
  const isRevealed = secretWord ? calcRevealed(secretWord, guess) : "none";
  const alreadyGuessed =
    gameState.state === "drawing" && Boolean(gameState.guessed[localId]);

  sendMessage(localId, party.id, guess, isRevealed, alreadyGuessed);
});

function createUser() {
  const $user = createStore<Player2 | null>(null);
  const setUser = createEvent<Player2 | null>();

  $user.on(setUser, (_, u) => u);
  authOrCreateUser((user) => setUser(user));

  return { $user };
}
