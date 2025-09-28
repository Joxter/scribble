import React, { useState, useEffect } from "react";
import { getUrl } from "./utils.ts";
import { getAllPlayers } from "./model/game.model.ts";
import { Painting, Player } from "./types.ts";
import { ReadOnlyCanvas } from "./components/ReadOnlyCanvas.tsx";
import { doEventsUndo } from "./model/utils.ts";
import {
  getAllPaintings,
  deletePainting,
} from "./model/all-paintings.model.ts";
import { Link } from "wouter";

export function PaintingsPage() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaintings, setSelectedPaintings] = useState<Set<string>>(
    new Set(),
  );
  const [deleting, setDeleting] = useState(false);

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

  const handlePaintingSelect = (paintingId: string, selected: boolean) => {
    const newSelected = new Set(selectedPaintings);
    if (selected) {
      newSelected.add(paintingId);
    } else {
      newSelected.delete(paintingId);
    }
    setSelectedPaintings(newSelected);
  };

  const handleDeleteSelected = async () => {
    if (selectedPaintings.size === 0) return;

    setDeleting(true);
    try {
      await Promise.all(
        Array.from(selectedPaintings).map((paintingId) =>
          deletePainting(paintingId),
        ),
      );
      setPaintings((prev) => prev.filter((p) => !selectedPaintings.has(p.id)));
      setSelectedPaintings(new Set());
    } catch (error) {
      console.error("Failed to delete paintings:", error);
      alert("Ошибка при удалении картин");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "20px" }}>
        <div>
          <Link href={getUrl()}>Главная</Link>
          <h1>Все картины</h1>
        </div>
        <p>Загрузка...</p>
      </div>
    );
  }
  const deleteDisabled = deleting || selectedPaintings.size === 0;

  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <div>
        <Link href={getUrl()}>Главная</Link>
        <h1>Все картины</h1>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <h3>Картины ({paintings.length}):</h3>
          <button
            onClick={handleDeleteSelected}
            disabled={deleteDisabled}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              pointerEvents: deleteDisabled ? "none" : "initial",
              border: "none",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: deleteDisabled ? "not-allowed" : "pointer",
              fontSize: "14px",
              opacity: deleteDisabled ? 0.6 : 1,
            }}
          >
            {deleting ? `Удаление...` : `Удалить ${selectedPaintings.size}`}
          </button>
        </div>
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
            {paintings.map((painting) => {
              return (
                <PaintingCard
                  key={painting.id}
                  painting={painting}
                  author={playersObj[painting.playerId]}
                  selected={selectedPaintings.has(painting.id)}
                  onSelectionChange={(selected) =>
                    handlePaintingSelect(painting.id, selected)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function PaintingCard({
  painting,
  author,
  selected,
  onSelectionChange,
}: {
  painting: Painting;
  author: Player;
  selected: boolean;
  onSelectionChange: (selected: boolean) => void;
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
        display: "flex",
        flexDirection: "column",
        lineHeight: "1",
        gap: "8px",
        position: "relative",
      }}
      onClick={() => {
        const str = JSON.stringify(
          lines.map((it) => {
            it.dots = it.dots.map(([x, y]) => [+x.toFixed(1), +y.toFixed(1)]);
            return it;
          }),
        );

        console.log(str);
        console.log(str.length);
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelectionChange(e.target.checked)}
          style={{ cursor: "pointer" }}
        />
        <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
          {painting.word}
        </h4>
      </label>
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
