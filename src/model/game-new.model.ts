import { combine, createEvent, createStore, sample } from "effector";
import { Player2 } from "../types.ts";
import { calcRevealed } from "../utils.ts";
import { mergeLogi } from "./utils.ts";
import { createDrawing } from "./drawing.model.ts";
import {
  authOrCreateUser,
  gameFinished,
  selectWord,
  sendMessage,
  transitionToNextPlayer,
} from "../db-things.ts";
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
  $allChatEvents,
  $currentPlayers,
  $partyPaintingIds,
  $guessed,
  $choosingWord,
} = party;

const drawing = createDrawing({ $localId, $newParty, log });

export const { $drawing, $isServer, currentLine } = drawing;

sample({
  source: [$localId, $newParty] as const,
  clock: newWordSelected,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], word]) => {
  if (party) selectWord(localId, party.id, word);
});

// when every guessed
combine($guessed, $newParty, $isServer).watch(([guessed, party, isServer]) => {
  if (!party) return;

  const { newPlayers, staticPlayerIds, gameState, gameProgress, gameParams } =
    party;

  if (isServer && gameState.state === "drawing") {
    // ВСЕ УГАДАЛИ

    if (Object.keys(guessed).length === staticPlayerIds.length - 1) {
      const artist = gameState.playerId;
      const nextPlayerI = newPlayers.findIndex((p) => p.id === artist) + 1;

      if (gameProgress.length === 0) {
        gameProgress.push([]);
      }

      gameProgress.at(-1)!.push({
        paintingId: gameState.drawingId,
        whoDrawId: gameState.playerId,
        scores: gameState.guessed,
      });

      if (newPlayers[nextPlayerI]) {
        // продолжается текущий круг
        transitionToNextPlayer(
          newPlayers[nextPlayerI].id,
          gameState,
          party.id,
          gameProgress,
        );
      } else {
        // начинаем следующий круг

        gameProgress.push([]);
        if (gameProgress.length < gameParams.rounds) {
          log(`nextPlayerChoosingWord: ${newPlayers[0].id}`);
          // если ещё есть место для раундов
          transitionToNextPlayer(
            newPlayers[0].id,
            gameState,
            party.id,
            gameProgress,
          );
        } else {
          log("game finished!");
          gameFinished(party.id, gameProgress);
        }
      }
    }
  }
});

combine($newParty, $isServer, party.$timeout).watch(
  ([party, isServer, timeout]) => {
    if (!party) return;
    if (!isServer) return;

    const { newPlayers, gameState, gameProgress, gameParams } = party;

    if (gameState.state !== "drawing") return;
    if (timeout === null || timeout > 0) return;

    const artist = gameState.playerId;
    const nextPlayerI = newPlayers.findIndex((p) => p.id === artist) + 1;

    if (gameProgress.length === 0) {
      gameProgress.push([]);
    }

    gameProgress.at(-1)!.push({
      paintingId: gameState.drawingId,
      whoDrawId: gameState.playerId,
      scores: gameState.guessed,
    });

    if (newPlayers[nextPlayerI]) {
      // продолжается текущий круг
      transitionToNextPlayer(
        newPlayers[nextPlayerI].id,
        gameState,
        party.id,
        gameProgress,
        true,
      );
    } else {
      // начинаем следующий круг

      gameProgress.push([]);
      if (gameProgress.length < gameParams.rounds) {
        log(`nextPlayerChoosingWord: ${newPlayers[0].id}`);
        // если ещё есть место для раундов
        transitionToNextPlayer(
          newPlayers[0].id,
          gameState,
          party.id,
          gameProgress,
          true,
        );
      } else {
        log("game finished!");
        gameFinished(party.id, gameProgress);
      }
    }
  },
);

sample({
  source: [$localId, $newParty] as const,
  clock: messageSent,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], { guess }]) => {
  if (!party) return;
  const gameState = party.gameState;
  const secretWord = gameState.state === "drawing" ? gameState.word : null;
  const isRevealed = secretWord ? calcRevealed(secretWord, guess) : "none";

  sendMessage(localId, party.id, guess, isRevealed);
});

function createUser() {
  const $user = createStore<Player2 | null>(null);
  const setUser = createEvent<Player2 | null>();

  $user.on(setUser, (_, u) => u);
  authOrCreateUser((user) => setUser(user));

  return { $user };
}
