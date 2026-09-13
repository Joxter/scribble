// Разовая миграция: проставить рисункам их комнату (связь partyPaintings).
// Рисунки, созданные до неё, знают о комнате только через party.gameProgress,
// а его обнуляет restartParty — так что запускать это имеет смысл один раз и
// поскорее. Что не нашлось, так и останется без комнаты: восстановить нечем.
//
//   node --env-file=.env backend/link-paintings.ts [--apply]
//
// Без --apply только считает и печатает.
import { init } from "@instantdb/admin";
import schema from "../instant.schema.ts";
import type { GameProgress } from "../src/types.ts";

const db = init({
  appId: process.env.INSTANT_APP_ID!,
  adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
  schema,
});

const apply = process.argv.includes("--apply");

const { party, paintings } = await db.query({
  party: {},
  paintings: { party: {} },
});

// has: one приезжает объектом или null, но у admin SDK это местами массив —
// проверка держит оба варианта
const linked = new Set(
  paintings
    .filter((p) => {
      const room = p.party as unknown;
      return Array.isArray(room) ? room.length > 0 : Boolean(room);
    })
    .map((p) => p.id),
);

const rooms = new Map<string, string>();
party.forEach((room) => {
  (room.gameProgress as GameProgress).forEach((round) =>
    round.forEach((turn) => {
      if (turn.paintingId) rooms.set(turn.paintingId, room.id);
    }),
  );
});

const todo = paintings.filter((p) => !linked.has(p.id) && rooms.has(p.id));
const orphans = paintings.filter((p) => !linked.has(p.id) && !rooms.has(p.id));

console.log(`рисунков: ${paintings.length}`);
console.log(`уже со связью: ${linked.size}`);
console.log(`свяжем сейчас: ${todo.length}`);
console.log(`некуда привязать: ${orphans.length}`);

if (!apply) {
  console.log("\nэто сухой прогон, для записи добавь --apply");
} else if (todo.length) {
  await db.transact(
    todo.map((p) => db.tx.paintings[p.id].link({ party: rooms.get(p.id)! })),
  );
  console.log("готово");
}
