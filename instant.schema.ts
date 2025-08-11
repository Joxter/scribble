import { id, i, init, InstaQLEntity } from "@instantdb/core";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

const _schema = i.schema({
  entities: {
    party: i.entity({
      name: i.string().unique().indexed(),
    }),
    roomEvent: i.entity({
      it: i.json(),
      // timestamp: i.date(),
    }),
    curretLine: i.entity({
      dots: i.json(),
      width: i.number(),
      color: i.string(),
    }),
  },
  links: {
    roomEvents: {
      forward: { on: "party", has: "many", label: "roomEvents" },
      reverse: { on: "roomEvent", has: "one", label: "party" },
    },
    roomCurrentLines: {
      forward: { on: "party", has: "one", label: "currentLine" },
      reverse: { on: "curretLine", has: "one", label: "party" },
    },
  },
});

type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };

export default schema;
