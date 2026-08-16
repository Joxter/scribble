import { combine, createEvent, createStore, Store } from "effector";
import {
  AllChatMessages,
  GAME_STATUS,
  Painting,
  Party,
  PlayerAvatar,
} from "../types.ts";
import { liveQuery } from "../utils.ts";
import { parseAvatar } from "../avatar.ts";
import { interval } from "patronum";
import { db } from "../DB.ts";
import { AppSchema } from "../../instant.schema.ts";
import { InstaQLResult } from "@instantdb/core";

type DbParty = Pick<Party, "id" | "name" | "status">;

function createTickStore() {
  let startTimer_ = createEvent();
  const tickInterval = interval({ timeout: 1000, start: startTimer_ });
  startTimer_();
  let $tickStore = createStore(0);

  $tickStore.on(tickInterval.tick, (s) => s + 1);

  return $tickStore;
}

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
export type NewParty = Omit<NewParty_, "roomEvents"> & {
  roomEvents: AllChatMessages[];
};

export function createParty($localId: Store<string>) {
  const $pagePartyName = createStore("");
  const pageOpened = createEvent<string>();
  $pagePartyName.on(pageOpened, (_, p) => p);

  const $newParty = createStore<NewParty | null>(null);
  const newPartyLoaded = createEvent<NewParty>();
  const partyNotFound = createEvent();
  $newParty.on(newPartyLoaded, (_, parties) => parties);
  $newParty.on(partyNotFound, () => null);
  // при переходе в другую комнату старые данные показывать нельзя
  $newParty.on($pagePartyName.updates, () => null);

  // пока база не ответила, комнату нельзя считать несуществующей
  const $partyStatus = createStore<"idle" | "loading" | "found" | "missing">(
    "idle",
  );
  $partyStatus.on($pagePartyName.updates, () => "loading");
  $partyStatus.on(newPartyLoaded, () => "found");
  $partyStatus.on(partyNotFound, () => "missing");

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

  // человечек игрока: форма и цвет живут в его профиле, у старых игроков
  // поля нет — parseAvatar выдаёт стабильный вариант по id
  const $playerAvatars = $newParty.map((p) => {
    const entries =
      p?.newPlayers.map((pl) => [pl.id, parseAvatar(pl.avatar, pl.id)]) || [];

    return Object.fromEntries(entries) as Record<string, PlayerAvatar>;
  });

  const $playerColors = $playerAvatars.map((avatars) => {
    const entries = Object.entries(avatars).map(([id, a]) => [id, a.color]);

    return Object.fromEntries(entries) as Record<string, string>;
  });

  const $partyPaintingIds = $newParty.map((p) => {
    if (!p) return [];
    return p.gameProgress.flatMap((round) =>
      round.flatMap((res) => res.paintingId),
    );
  });

  // последний завершённый ход: в начале нового раунда он лежит в предыдущем
  const $lastTurn = $newParty.map((p) => {
    if (!p) return null;
    const { gameProgress } = p;
    return gameProgress.at(-1)?.at(-1) || gameProgress.at(-2)?.at(-1) || null;
  });

  // рисунки партии: в gameProgress лежат только id, сами картины — отдельная сущность
  const $partyPaintings = createStore<Painting[]>([]);
  const partyPaintingsLoaded = createEvent<Painting[]>();
  $partyPaintings.on(partyPaintingsLoaded, (_, list) => list);

  // подписываемся по строковому ключу: массив id пересоздаётся на каждый апдейт party
  const $paintingIdsKey = $partyPaintingIds.map((ids) => ids.join(","));

  liveQuery($paintingIdsKey, (key) => {
    const ids = key ? key.split(",") : [];

    if (!ids.length) {
      partyPaintingsLoaded([]);
      return () => {};
    }

    return db.subscribeQuery(
      { paintings: { $: { where: { id: { $in: ids } } } } },
      (resp) => {
        if (resp.data?.paintings) {
          partyPaintingsLoaded(resp.data.paintings as Painting[]);
        }
      },
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

      let msec =
        p.gameParams.drawTime - (Date.now() - drawingState.startedAt) / 1000;
      let left = Math.max(Math.floor(msec), 0);

      return {
        left,
        passed: p.gameParams.drawTime - left,
      };
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
        if (resp.data?.party) {
          const found = resp.data.party[0];

          if (found) {
            newPartyLoaded(found as NewParty);
          } else {
            partyNotFound();
          }
          return;
        }
        // ошибку тоже показываем как «комнаты нет», иначе экран висит в загрузке
        partyNotFound();
        console.warn("Something went wrong");
        console.log(resp);
      },
    );
  });

  return {
    newPartyLoaded,
    $newParty,
    $partyStatus,
    $allMyParties,
    $allChatEvents,
    $currentPlayers,
    $playerAvatars,
    $playerColors,
    $partyPaintingIds,
    $partyPaintings,
    $lastTurn,
    $guessed,
    $choosingWord,
    $drawingState,
    $timeout,
    $pagePartyName,
    pageOpened,
  };
}
