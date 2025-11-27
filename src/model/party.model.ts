import { combine, createEvent, createStore, Store } from "effector";
import { GAME_STATUS, Party } from "../types.ts";
import { newParty } from "./utils.ts";
import { liveQuery } from "../utils.ts";
import { firstLoadForCanvas } from "../db-things.ts";
import { db } from "../DB.ts";

export function createParty($localId: Store<string>) {
  const newPartyLoaded = createEvent<Party>();

  const $newParty = createStore<Party>(newParty());
  $newParty.on(newPartyLoaded, (_, party) => party);

  const $allChatEvents = $newParty.map((p) => p.roomEvents);

  const $currentPlayers = $newParty.map((p) => {
    return Object.fromEntries(p.players.map((it) => [it.id, it]));
  });

  const $partyPaintingIds = $newParty.map((p) => {
    return p.gameProgress.flatMap((round) =>
      round.flatMap((res) => res.paintingId),
    );
  });

  const $guessed = $newParty.map((p) => {
    return p.gameState.state === "drawing" ? p.gameState.guessed : {};
  });

  const $choosingWord = combine($localId, $newParty, (localId, p) => {
    if (p.status !== GAME_STATUS.inProgress) return { choose: false };

    if (p.gameState.state === "choosing-word") {
      if (localId === p.gameState.playerId) {
        return {
          choose: true,
          iam: true,
          who: p.gameState.playerId,
          words: p.gameState.words,
        };
      }
      return {
        choose: true,
        iam: false,
        who: p.gameState.playerId,
        words: [],
      };
    }

    return { choose: false };
  });

  liveQuery($localId, (localId) => {
    if (!localId) return () => {};

    firstLoadForCanvas(localId);

    return db.subscribeQuery(
      {
        party: {
          $: {
            where: { "players.id": localId },
            order: {
              serverCreatedAt: "desc",
            },
            limit: 1,
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
            console.log(party.gameState);
            return;
          }
        }
        console.warn("Something went wrong");
        console.log(resp);
      },
    );
  });

  return {
    newPartyLoaded,
    $newParty,
    $allChatEvents,
    $currentPlayers,
    $partyPaintingIds,
    $guessed,
    $choosingWord,
  };
}
