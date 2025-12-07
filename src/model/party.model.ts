import { combine, createEvent, createStore, Store } from "effector";
import { AllChatMessages, GAME_STATUS, Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { interval } from "patronum";
import { db } from "../DB.ts";
import { AppSchema } from "../../instant.schema.ts";
import { InstaQLResult } from "@instantdb/core";

type DbParty = Pick<Party, "id" | "name" | "status">;

function createTickStore() {
  let startTimer_ = createEvent();
  const tickInterval = interval({ timeout: 100, start: startTimer_ });
  startTimer_();
  let $tickStore = createStore(0);

  $tickStore.on(tickInterval.tick, (s) => s + 1);

  return $tickStore;
}

export function createParty($localId: Store<string>) {
  const $pagePartyName = createStore("");
  const pageOpened = createEvent<string>();
  $pagePartyName.on(pageOpened, (_, p) => p);

  type NewParty_ = InstaQLResult<
    AppSchema,
    {
      party: {
        $: { where: { name: string }; limit: 1 };
        newPlayers: {};
        roomEvents: {};
      };
    }
  >["party"][number];
  type NewParty = Omit<NewParty_, "roomEvents"> & {
    roomEvents: AllChatMessages[];
  };

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

  let $tickStore = createTickStore();

  const $drawingState = combine($localId, $newParty, (localId, p) => {
    if (!p) return null;
    if (p.status !== GAME_STATUS.inProgress) return null;
    if (p.gameState.state !== "drawing") return null;

    return p.gameState;
  });

  const $timeout = combine(
    $drawingState,
    $newParty,
    $tickStore,
    (drawingState, p) => {
      if (!p || !drawingState) return null;

      let msec = p.gameParams.drawTime - (Date.now() - drawingState.startedAt);

      return Math.max(Math.floor(msec / 1000), 0);
    },
  );

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
            newPartyLoaded(resp.data.party[0] as NewParty);
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
    $drawingState,
    $timeout,
    $pagePartyName,
    pageOpened,
  };
}
