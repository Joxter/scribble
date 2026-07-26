import React, { useState } from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $partyPaintings } from "../model/game-new.model.ts";
import { ReadOnlyCanvas } from "./ReadOnlyCanvas.tsx";
import { doEventsUndo } from "../model/utils.ts";

// две строки по четыре — столько влезает в панель, остальное по «смотреть всё»
const COLLAPSED_COUNT = 8;

const root = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: hidden;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: start;
  gap: 6px;
  overflow-y: auto;
`;

const gridCollapsed = css`
  flex: none;
  overflow: hidden;
`;

const gridExpanded = css`
  flex: 1;
  min-height: 0;
`;

const item = css`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

const word = css`
  font-size: 10px;
  color: var(--muted);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const more = css`
  flex: none;
  align-self: flex-end;
  font-family: inherit;
  font-size: 11px;
  font-weight: 800;
  color: var(--brand-dark);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const empty = css`
  font-size: 12px;
  color: var(--muted);
`;

export function PaintingsGallery() {
  const paintings = useUnit($partyPaintings);
  const [expanded, setExpanded] = useState(false);

  if (paintings.length === 0) {
    return (
      <div className={root}>
        <p className={empty}>Рисунки не сохранились</p>
      </div>
    );
  }

  const hidden = paintings.length - COLLAPSED_COUNT;
  const shown = expanded ? paintings : paintings.slice(0, COLLAPSED_COUNT);

  return (
    <div className={root}>
      <div className={`${grid} ${expanded ? gridExpanded : gridCollapsed}`}>
        {shown.map((painting) => (
          <div key={painting.id} className={item}>
            <ReadOnlyCanvas
              canvas={doEventsUndo(painting.canvas as any)}
              size={160}
              fill
            />
            <span className={word} title={painting.word}>
              {painting.word}
            </span>
          </div>
        ))}
      </div>

      {hidden > 0 && (
        <button className={more} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Свернуть ↑" : `Смотреть всё (${hidden}) →`}
        </button>
      )}
    </div>
  );
}
