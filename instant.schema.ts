import { i } from "@instantdb/core";
import type {
  CurrentCanvas,
  GameProgress,
  GameState,
  Party,
  PaintingReactions,
  PlayerAvatar,
} from "./src/types.ts";

const _schema = i.schema({
  entities: {
    $users: i.entity({
      name: i.string().optional(),
      type: i.string().optional(),
      avatar: i.json<PlayerAvatar>().optional(),
    }),
    // 1 party = 1 game session
    party: i.entity({
      name: i.string().unique().indexed(), // url
      host: i.string().optional(),
      gameState: i.json<GameState>(),
      gameProgress: i.json<GameProgress>(),
      gameParams: i.json<Party["gameParams"]>(),
      staticPlayerIds: i.json<string[]>(),
      status: i.string<Party["status"]>(),
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
      // indexed: страница профиля выбирает рисунки игрока по всем комнатам
      playerId: i.string().indexed(),
      word: i.string(),
      // { [playerId]: { [emoji]: сколько раз нажал } }
      reactions: i.json<PaintingReactions>().optional(),
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
    partyNewPlayers: {
      forward: { on: "party", has: "many", label: "newPlayers" },
      reverse: { on: "$users", has: "many", label: "parties" },
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
