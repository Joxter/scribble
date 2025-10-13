// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/core";

const _schema = i.schema({
  entities: {
    party: i.entity({
      name: i.string().unique().indexed(), // url
      host: i.string().optional(), //
      gameState: i.any().optional(),
      // gameParams: {
      //   rounds: number,
      //   wordSuggestions: number // количество слов на выбор
      // }
      gameParams: i.any().optional(),
      status: i.string(), // GAME_STATUS
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
    // curretLine: i.entity({
    //   color: i.string(),
    //   dots: i.any(),
    //   width: i.number(),
    // }),
  },
  links: {
    // partyRoomEvents: {
    //   forward: { on: "party", has: "many", label: "roomEvents" },
    //   reverse: { on: "roomEvent", has: "one", label: "party" },
    // },
    partyPlayers: {
      forward: { on: "party", has: "many", label: "players" },
      reverse: { on: "players", has: "many", label: "parties" },
    },
    // partyCurrentLine: {
    //   forward: { on: "party", has: "one", label: "currentLine" },
    //   reverse: { on: "curretLine", has: "one", label: "party" },
    // },
  },
  rooms: {
    party: {
      presence: i.entity({
        user: i.any().optional(),
      }),
      topics: {
        currentCanvas: i.entity({
          currentLineTopic: i.any().optional(),
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
