import { db } from "../DB.ts";
import { combine, createEvent, createStore, sample } from "effector";
import { GAME_STATUS, UserMessageEvent, Party, NewWord } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { $localId } from "./game.model.ts";
import { newParty } from "./utils.ts";
import { id } from "@instantdb/core";
import { createCurrentLine } from "./drawing.model.ts";

export const $renderMode = createStore<"normal" | "polyline" | "tldraw">(
  "tldraw",
);

export async function getMyParty() {
  const localId = await db.getLocalId("guest");

  const { players } = await db
    .queryOnce({
      players: {
        $: { where: { id: localId } },
        parties: { $: { where: { status: "prepare" } } },
      },
    })
    .then((it) => it.data);
  // console.log(players[0]);

  return players[0]?.parties?.[0] || null;
}

export const newPartyLoaded = createEvent<Party>();

export const $newParty = createStore<Party>(newParty());
$newParty.on(newPartyLoaded, (_, party) => party);

export const $allChatEvents = createStore<Party["roomEvents"]>([]);
$allChatEvents.on(newPartyLoaded, (_, party) => party.roomEvents);

export const messageSent = createEvent<{ guess: string }>();
export const newWordSelected = createEvent<string>();

export const log = createEvent<any>();
export const $logi = createStore<any[]>([]);
$logi.on(log, (s, l) => [...s, l]);
export const $logiSmol = $logi.map((logs) => {
  if (logs.length === 0) return [];

  const merged: string[] = [];
  let currentLog: any = null;
  let count = 0;

  for (const log of logs) {
    if (typeof log === "string" && log === currentLog) {
      count++;
    } else {
      if (currentLog !== null) {
        merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
      }
      currentLog = log;
      count = 1;
    }
  }

  // Don't forget the last entry
  if (currentLog !== null) {
    merged.push(count > 1 ? `${currentLog} ${count}` : currentLog);
  }

  return merged;
});

export const $drawing = combine($localId, $newParty, (loadId, p) => {
  if (
    p.status === GAME_STATUS.inProgress &&
    p.gameState.innerState.state === "drawing"
  ) {
    const s = p.gameState.innerState;

    return {
      drawing: true,
      iam: loadId === s.playerId,
      who: s.playerId,
      word: s.word,
    };
  }

  return { drawing: false };
});

const $roomId = $newParty.map((p) => {
  return p.id;
});

const $imDrawing = $drawing.map((t) => {
  return t.drawing && t.iam;
});

export const {
  lineParamsChanged,
  // $currentLine,
  addLine,
  $currentLineParams,
  lineStarted,
  somebodyDrawing,
  // lineEnded,
  lineExtended,
  $lineExtendedCount,
  undoClicked,
  $svgCanvasPaths,
  $currentDrawing,
  $polylinePaths,
} = createCurrentLine($roomId, $imDrawing, $renderMode);

export const $choosingWord = combine($localId, $newParty, (localId, p) => {
  if (p.status !== GAME_STATUS.inProgress) return { choose: false };

  if (p.gameState.innerState.state === "choosing-word") {
    if (localId === p.gameState.innerState.playerId) {
      return {
        choose: true,
        iam: true,
        who: p.gameState.innerState.playerId,
        words: p.gameState.innerState.words,
      };
    }
    return {
      choose: true,
      iam: false,
      who: p.gameState.innerState.playerId,
      words: [],
    };
  }

  return { choose: false };
});

liveQuery($newParty, (party) => {
  if (!party.id) return () => [];

  log(`join.. ${party.id}`);
  const room = db.joinRoom("party", party.id);
  log(`joined`);

  const uns = $currentDrawing.watch((currentDrawing) => {
    if ($imDrawing.getState()) {
      log(`publishTopic`);
      console.log("publishTopic");
      room.publishTopic("currentCanvas", { currentDrawing });
    }
  });

  const unsubscribeTopic = room.subscribeTopic("currentCanvas", (ev) => {
    // console.log("currentCanvas", ev);
    log(`currentCanvas`);
    if (!$imDrawing.getState()) {
      console.log("somebodyDrawing", ev.currentDrawing);
      somebodyDrawing(ev.currentDrawing);
    }
  });

  return () => {
    uns();
    unsubscribeTopic();
    room.leaveRoom();
  };
});

liveQuery($localId, (localId) => {
  if (!localId) return () => {};

  return db.subscribeQuery(
    {
      party: {
        $: {
          where: {
            or: [
              {
                and: [
                  { status: GAME_STATUS.prepare },
                  { "players.id": localId },
                ],
              },
              {
                and: [
                  { status: GAME_STATUS.inProgress },
                  { "players.id": localId },
                ],
              },
            ],
          },
        },
        players: {},
        roomEvents: {},
      },
    },
    (resp) => {
      if (resp.data) {
        const party = resp.data.party?.[0];

        if (party) {
          newPartyLoaded(party as Party);
          return;
        }
      }
      console.warn("Something went wrong");
      console.log(resp);
    },
  );
});

sample({
  source: [$localId, $newParty] as const,
  clock: newWordSelected,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], word]) => {
  const event: Omit<NewWord, "id"> = {
    type: "new-selected-word",
    payload: { playerId: localId, word },
  };

  // todo create paint? (topic ? )
  db.transact([
    db.tx.roomEvent[id()]
      //
      .create(event)
      .link({ party: party.id }),
    db.tx.party[party.id].update({
      gameState: {
        ...party.gameState,
        innerState: {
          state: "drawing",
          playerId: localId,
          word: word,
        },
      },
    }),
  ]);
});

sample({
  source: [$localId, $newParty] as const,
  clock: messageSent,
  fn: (a, b) => [a, b] as const,
}).watch(([[localId, party], { guess }]) => {
  const data: Omit<UserMessageEvent, "id"> = {
    type: "user-message",
    payload: {
      text: guess,
      playerId: localId,
      // TODO isRevealed: isRevealed(gameState.state.word, guess),
      isRevealed: "none",
    },
  };

  db.transact(
    db.tx.roomEvent[id()]
      //
      .create(data)
      .link({ party: party.id }),
  );
});
