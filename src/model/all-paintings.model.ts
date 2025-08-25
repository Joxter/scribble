import { Painting } from "../types.ts";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";

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
