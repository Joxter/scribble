import { Painting } from "../types.ts";
import { db } from "../DB.ts";
import { createEvent, createStore } from "effector";
import type { InstaQLResult } from "@instantdb/core";
import type { AppSchema } from "../../instant.schema.ts";

// Рисунки игрока по всем комнатам — для страницы профиля. Не подписка:
// профиль открывают редко, а слушать все свои картины на каждой странице
// незачем. Стор, а не useState, чтобы dev-страница подсунула моки.
function myPaintingsQuery(playerId: string) {
  return {
    paintings: {
      $: {
        where: { playerId },
        order: { serverCreatedAt: "desc" },
      },
      // комната рисунка: связь живёт на нём самом, см. partyPaintings в схеме
      party: {},
    },
  } as const;
}

export type MyPainting = InstaQLResult<
  AppSchema,
  ReturnType<typeof myPaintingsQuery>
>["paintings"][number];

export const $myPaintings = createStore<MyPainting[]>([]);
const myPaintingsLoaded = createEvent<MyPainting[]>();
$myPaintings.on(myPaintingsLoaded, (_, list) => list);

export function loadMyPaintings(playerId: string) {
  return db
    .queryOnce(myPaintingsQuery(playerId))
    .then((res) => myPaintingsLoaded(res.data.paintings));
}

export async function getAllPaintings(): Promise<Painting[]> {
  const res = await db.queryOnce({ paintings: {} });

  return res.data.paintings as Painting[];
}

export function deletePainting(id: string) {
  return db.transact([db.tx.paintings[id].delete()]);
}
