import schema from "../instant.schema";
import { init } from "@instantdb/core";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

export const db = init({ appId: APP_ID, schema });
