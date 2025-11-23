import { i } from "@instantdb/core";
import { CurrentCanvas, GameProgress, GameState, Party } from "./src/types.ts";

const _schema = i.schema({
  entities: {
    party: i.entity({
      name: i.string().unique().indexed(), // url
      host: i.string().optional(),
      gameState: i.json<GameState>().optional(),
      gameProgress: i.json<GameProgress>().optional(),
      gameParams: i.json<Party["gameParams"]>().optional(),
      staticPlayerIds: i.json<string[]>().optional(),
      status: i.string(),
    }),
    roomEvent: i.entity({
      // type AllChatMessages
      type: i.string(),
      payload: i.any(),
    }),
    players: i.entity({
      localId: i.string().unique().indexed(),
      name: i.string(),
      avatar: i.string(),
    }),
    paintings: i.entity({
      canvas: i.json<CurrentCanvas>(), // (line | undo)[]
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
