import React, { useState, useEffect } from "react";
import { getUrl } from "./utils.ts";
import { getAllPaintings, $player } from "./model/game.model.ts";
import { Painting } from "./types.ts";
import { ReadOnlyCanvas } from "./ReadOnlyCanvas.tsx";
import { useUnit } from "effector-react";

export function PaintingsPage() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const player = useUnit($player);

  useEffect(() => {
    getAllPaintings()
      .then(setPaintings)
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
              gap: "20px",
            }}
          >
            {paintings.map((painting) => (
              <PaintingCard key={painting.id} painting={painting} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <div
      style={{
        border: "1px solid #dee2e6",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <ReadOnlyCanvas canvas={painting.canvas} size={200} />
      
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
          {painting.word}
        </h4>
        <p style={{ margin: 0, color: "#6c757d", fontSize: "14px" }}>
          Автор: {painting.playerId}
        </p>
      </div>
    </div>
  );
}