// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/core";

const _schema = i.schema({
  entities: {
    party: i.entity({
      name: i.string().unique().indexed(),
      players: i.any().optional(),
    }),
    roomEvent: i.entity({
      it: i.any(),
    }),
    curretLine: i.entity({
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
