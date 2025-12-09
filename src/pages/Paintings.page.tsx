import React, { useState, useEffect } from "react";
import { Painting, Player } from "../types.ts";
import { ReadOnlyCanvas } from "../components/ReadOnlyCanvas.tsx";
import { doEventsUndo } from "../model/utils.ts";
import {
  getAllPaintings,
  deletePainting,
} from "../model/all-paintings.model.ts";
import { PageLayout } from "../components/PageLayout.tsx";
import { css } from "@linaria/core";
import { getAllPlayers } from "../db-things.ts";

const container = css`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const header = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const deleteButton = css`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const deleteButtonDisabled = css`
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
`;

const paintingsGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

const paintingCard = css`
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;
  position: relative;
`;

const paintingLabel = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const paintingCheckbox = css`
  cursor: pointer;
`;

const paintingTitle = css`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const paintingInfo = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const paintingMeta = css`
  margin: 0;
  color: #6c757d;
  font-size: 14px;
`;

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
      <PageLayout>
        <div className={container}>
          <p>Загрузка...</p>
        </div>
      </PageLayout>
    );
  }
  const deleteDisabled = deleting || selectedPaintings.size === 0;

  return (
    <PageLayout>
      <div className={container}>
        <div className={header}>
          <h3>Картины ({paintings.length}):</h3>
          <button
            onClick={handleDeleteSelected}
            disabled={deleteDisabled}
            className={`${deleteButton} ${deleteDisabled ? deleteButtonDisabled : ""}`}
          >
            {deleting ? `Удаление...` : `Удалить ${selectedPaintings.size}`}
          </button>
        </div>
        {paintings.length === 0 ? (
          <p>Нет картин</p>
        ) : (
          <div className={paintingsGrid}>
            {paintings.toReversed().map((painting) => {
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
    </PageLayout>
  );
}

type Props = {
  painting: Painting;
  author?: Player;
  selected: boolean;
  onSelectionChange: (selected: boolean) => void;
};

function PaintingCard({
  painting,
  author,
  selected,
  onSelectionChange,
}: Props) {
  const lines = doEventsUndo(painting.canvas as any);
  const allEventsCnt = painting.canvas.length;
  const linesAfterUndo = lines.length;
  const totalDots = lines
    .map((it) => it.dots.length)
    .reduce((acc, l) => acc + l, 0);

  return (
    <div className={paintingCard}>
      <label className={paintingLabel}>
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => onSelectionChange(e.target.checked)}
          className={paintingCheckbox}
        />
        <h4 className={paintingTitle}>{painting.word}</h4>
      </label>
      <ReadOnlyCanvas
        canvas={doEventsUndo(painting.canvas as any)}
        size={200}
      />

      <div className={paintingInfo}>
        <p className={paintingMeta}>Автор: {author?.name || "???"}</p>
        <p className={paintingMeta}>
          Линий {linesAfterUndo}
          {allEventsCnt !== linesAfterUndo ? `(${allEventsCnt})` : ""}, точек{" "}
          {totalDots}
        </p>
      </div>
    </div>
  );
}
