import { Painting } from "../types.ts";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";
import { createEvent, createStore } from "effector";

// Рисунки игрока по всем комнатам — для страницы профиля. Не подписка:
// профиль открывают редко, а слушать все свои картины на каждой странице
// незачем. Стор, а не useState, чтобы dev-страница подсунула моки.
export const $myPaintings = createStore<Painting[]>([]);
const myPaintingsLoaded = createEvent<Painting[]>();
$myPaintings.on(myPaintingsLoaded, (_, list) => list);

export function loadMyPaintings(playerId: string) {
  return db
    .queryOnce({
      paintings: {
        $: {
          where: { playerId },
          order: { serverCreatedAt: "desc" },
        },
      },
    })
    .then((res) => myPaintingsLoaded(res.data.paintings as Painting[]));
}

export async function getAllPaintings(): Promise<Painting[]> {
  const res = await db.queryOnce({ paintings: {} });

  return res.data.paintings as Painting[];
}

export function createPainting(data: Omit<Painting, "id">) {
  return db.transact([db.tx.paintings[id()].create(data)]);
}

export function deletePainting(id: string) {
  return db.transact([db.tx.paintings[id].delete()]);
}
