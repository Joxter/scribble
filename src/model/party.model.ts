import { combine, createEvent, createStore, Store } from "effector";
import { GAME_STATUS, Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { firstLoadForCanvas } from "../db-things.ts";
import { db } from "../DB.ts";

type DbParty = Pick<Party, "id" | "name" | "status">;

export function createParty($localId: Store<string>) {
  const $newParty = createStore<Party | null>(null);
  const newPartyLoaded = createEvent<Party>();
  $newParty.on(newPartyLoaded, (_, parties) => parties);

  const allPartiesLoaded = createEvent<DbParty[]>();
  const $allMyParties = createStore<DbParty[]>([]);
  $allMyParties.on(allPartiesLoaded, (_, parties) => parties);
  $allMyParties.watch((p) => {
    console.log("$allMyParties", p);
  });

  const $allChatEvents = $newParty.map((p) => p?.roomEvents || []);

  const $currentPlayers = $newParty.map((p) => {
    return Object.fromEntries(p?.newPlayers.map((it) => [it.id, it]) || []);
  });

  const $partyPaintingIds = $newParty.map((p) => {
    if (!p) return [];
    return p.gameProgress.flatMap((round) =>
      round.flatMap((res) => res.paintingId),
    );
  });

  const $guessed = $newParty.map((p) => {
    if (!p) return {};
    return p.gameState.state === "drawing" ? p.gameState.guessed : {};
  });

  const $choosingWord = combine($localId, $newParty, (localId, p) => {
    if (!p) return { choose: false };
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
            where: { "newPlayers.id": localId },
            order: {
              serverCreatedAt: "desc",
            },
          },
        },
      },
      (resp) => {
        if (resp.data) {
          if (resp.data.party) {
            allPartiesLoaded(
              resp.data.party.map((p) => {
                return { id: p.id, name: p.name, status: p.status };
              }),
            );
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
    $allMyParties,
    $allChatEvents,
    $currentPlayers,
    $partyPaintingIds,
    $guessed,
    $choosingWord,
  };
}
