import React, { useState, useEffect } from "react";
import { getUrl } from "./utils.ts";
import { getAllPaintings, getAllPlayers } from "./model/game.model.ts";
import { Painting, Player } from "./types.ts";
import { ReadOnlyCanvas } from "./components/ReadOnlyCanvas.tsx";
import { doEventsUndo } from "./model/utils.ts";

export function PaintingsPage() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  const playersObj = Object.fromEntries(
    players.map((it) => {
      return [it.id, it];
    }),
  );

  useEffect(() => {
    getAllPaintings()
      .then(setPaintings)
      .then(() => {
        return getAllPlayers().then(setPlayers);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <div>
          <a href={getUrl()}>Главная</a>
          <h1>Все картины</h1>
        </div>
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <div>
        <a href={getUrl()}>Главная</a>
        <h1>Все картины</h1>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        <h3>Картины ({paintings.length}):</h3>
        {paintings.length === 0 ? (
          <p>Нет картин</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {paintings.map((painting) => (
              <PaintingCard
                key={painting.id}
                painting={painting}
                author={playersObj[painting.playerId]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PaintingCard({
  painting,
  author,
}: {
  painting: Painting;
  author: Player;
}) {
  const lines = doEventsUndo(painting.canvas);
  const allEventsCnt = painting.canvas.length;
  const linesAfterUndo = lines.length;
  const totalDots = lines
    .map((it) => it.dots.length)
    .reduce((acc, l) => acc + l, 0);

  return (
    <div
      style={{
        // border: "1px solid #dee2e6",
        // borderRadius: "8px",
        // padding: "12px",
        // backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        lineHeight: "1",
        gap: "8px",
      }}
    >
      <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
        {painting.word}
      </h4>
      <ReadOnlyCanvas canvas={painting.canvas} size={200} />

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <p style={{ margin: 0, color: "#6c757d", fontSize: "14px" }}>
          Автор: {author.name}
        </p>
        <p style={{ margin: 0, color: "#6c757d", fontSize: "14px" }}>
          Линий {linesAfterUndo}
          {allEventsCnt !== linesAfterUndo ? `(${allEventsCnt})` : ""}, точек{" "}
          {totalDots}
        </p>
      </div>
    </div>
  );
}
