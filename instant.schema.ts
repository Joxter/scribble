// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/core";

const _schema = i.schema({
  entities: {
    // room ?
    party: i.entity({
      name: i.string().unique().indexed(),
      players: i.any().optional(),
      gameState: i.any().optional(),
    }),
    roomEvent: i.entity({
      it: i.any(),
    }),
    // roomEvent: i.entity({
    //   type: i.string(),
    //   payload: i.any(),
    // }),
    players: i.entity({
      localId: i.string().unique().indexed(),
      name: i.string(),
      avatar: i.string(),
    }),
    // paintings: i.entity({
    //   canvas: i.any(), // event[]
    //   word: i.string(),
    // }),
    words: i.entity({
      word: i.string().unique().indexed(),
      lang: i.string(),
      category: i.string().optional(),
    }),
    curretLine: i.entity({
      // remove "curretLine"
      color: i.string(),
      dots: i.any(),
      width: i.number(),
    }),
  },
  links: {
    partyRoomEvents: {
      forward: { on: "party", has: "many", label: "roomEvents" },
      reverse: { on: "roomEvent", has: "one", label: "party" },
    },
    partyPlayers: {
      forward: { on: "party", has: "many", label: "players2" },
      reverse: { on: "players", has: "many", label: "parties" },
    },
    partyCurrentLine: {
      forward: { on: "party", has: "one", label: "currentLine" },
      reverse: { on: "curretLine", has: "one", label: "party" },
    },
  },
  rooms: {},
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
