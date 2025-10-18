import { db } from "../DB.ts";
import { combine, createEvent, createStore } from "effector";
import { GAME_STATUS, Party } from "../types.ts";
import { liveQuery } from "../utils.ts";
import { $localId } from "./game.model.ts";
import { newParty } from "./utils.ts";

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

export const $newParty = createStore<Party>(newParty());
export const newPartyLoaded = createEvent<Party>();
$newParty.on(newPartyLoaded, (_, party) => party);

export const $imDrawing = $newParty.map((p) => {
  // return p.status === GAME_STATUS.inProgress &&p.gameState.innerState.state
  return false;
});

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
