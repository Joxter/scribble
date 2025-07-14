import { id, i, init, InstaQLEntity } from "@instantdb/react";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

const _schema = i.schema({
  entities: {
    party: i.entity({
      canvas: i.json(),
    }),
  },
});

type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };

export default schema;
