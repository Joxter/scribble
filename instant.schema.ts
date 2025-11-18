// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/core";
import { Party } from "./src/types.ts";

const _schema = i.schema({
  entities: {
    party: i.entity({
      name: i.string().unique().indexed(), // url
      host: i.string().optional(),
      gameState: i.json<Party["gameState"]>().optional(),
      gameParams: i.json<Party["gameParams"]>().optional(),
      status: i.string(),
    }),
    roomEvent: i.entity({
      type: i.string(),
      payload: i.any(),
    }),
    players: i.entity({
      localId: i.string().unique().indexed(),
      name: i.string(),
      avatar: i.string(),
    }),
    paintings: i.entity({
      canvas: i.any(), // (line | undo)[]
      playerId: i.string(),
      word: i.string(),
    }),
    words: i.entity({
      word: i.string().unique().indexed(),
      lang: i.string(),
      category: i.string().optional(),
      hidden: i.boolean().optional(),
    }),
  },
  links: {
    partyRoomEvents: {
      forward: { on: "party", has: "many", label: "roomEvents" },
      reverse: { on: "roomEvent", has: "one", label: "party" },
    },
    partyPlayers: {
      forward: { on: "party", has: "many", label: "players" },
      reverse: { on: "players", has: "many", label: "parties" },
    },
  },
  rooms: {
    party: {
      presence: i.entity({
        user: i.any().optional(),
      }),
      topics: {
        currentCanvas: i.entity({
          currentDrawing: i.any().optional(),
        }),
      },
    },
  },
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
