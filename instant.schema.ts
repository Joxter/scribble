import { id, i, init, InstaQLEntity } from "@instantdb/core";

const APP_ID = "59599101-16e7-493b-8644-ccb75b6cb032";

const _schema = i.schema({
  entities: {
    party: i.entity({
      canvas: i.json(), // currentCanvas
    }),
  },
});
// canvas: {
//   currentLine: {
//     points: [],
//     color: currentLine.color,
//     size: currentLine.size,
//   },
//   word: "fake word",
//   history: [
//     ...currentCanvas,
//     {
//       type: "line",
//       dots: newLine.points,
//       color: newLine.color,
//       width: newLine.size,
//     },
//   ],
// }
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };

export default schema;
// {
//   players: string[];
//   id: string;
//   link: string;
//   gamestage: "wait-players" | "ongoing" | "done";
//   settings: {
//     timer: number;
//     suggestionsNumber: number;
//     wordList: string;
//   };
//   history: HistoryItem[];
//   canvas: {
//     size: number;
//     history: CanvasHistory[];
//     word: string;
//   };
// }
