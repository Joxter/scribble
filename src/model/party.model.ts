import { combine, createEvent, createStore, Store } from "effector";
import { GAME_STATUS, Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { firstLoadForCanvas } from "../db-things.ts";
import { db } from "../DB.ts";
import { AppSchema } from "../../instant.schema.ts";
import { InstaQLResult } from "@instantdb/core";

type DbParty = Pick<Party, "id" | "name" | "status">;

export function createParty($localId: Store<string>) {
  const $pagePartyName = createStore("");
  const pageOpened = createEvent<string>();
  $pagePartyName.on(pageOpened, (_, p) => p);

  type NewParty = InstaQLResult<
    AppSchema,
    {
      party: {
        $: { where: { name: string }; limit: 1 };
        newPlayers: {};
        roomEvents: {};
      };
    }
  >["party"][number];

  const $newParty = createStore<NewParty | null>(null);
  const newPartyLoaded = createEvent<NewParty>();
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

    return db.subscribeQuery(
      {
        party: {
          $: {
            where: { "newPlayers.id": localId },
            order: { serverCreatedAt: "desc" },
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

  liveQuery($pagePartyName, (partyName) => {
    if (!partyName) return () => {};

    // firstLoadForCanvas(localId);

    return db.subscribeQuery(
      {
        party: {
          $: {
            where: { name: partyName },
            limit: 1,
          },
          newPlayers: {},
          roomEvents: {},
        },
      },
      (resp) => {
        if (resp.data) {
          if (resp.data.party) {
            newPartyLoaded(resp.data.party[0]);
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
    $pagePartyName,
    pageOpened,
  };
}
