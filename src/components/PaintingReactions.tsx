import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $lastPainting, $lastTurn, $localId } from "../model/game-new.model.ts";
import { ReadOnlyCanvas } from "./ReadOnlyCanvas.tsx";
import { doEventsUndo } from "../model/utils.ts";
import { addReaction } from "../db-things.ts";
import { countReactions } from "../utils.ts";

const root = css`
  margin: 12px 16px 0;
`;

const row = css`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const thumb = css`
  flex: none;
`;

const thumbEmpty = css`
  width: 64px;
  height: 64px;
  flex: none;
  background-color: var(--canvas);
  border-radius: 9px;
  box-shadow: inset 0 0 0 1px var(--canvas-edge);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 9px;
  color: #b3a488;
  text-align: center;
`;

const reactions = css`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const chip = css`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
  font-size: 15px;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  line-height: 1.2;

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  & b {
    font-size: 13px;
    font-weight: 800;
    color: var(--slate);
    font-variant-numeric: tabular-nums;
  }
`;

const EMOJI = ["😂", "😮", "🔥"];

export function PaintingReactions() {
  const [lastTurn, painting, localId] = useUnit([
    $lastTurn,
    $lastPainting,
    $localId,
  ]);

  if (!lastTurn) return null;

  const totals = countReactions(painting?.reactions);

  return (
    <div className={root}>
      <div className={row}>
        {painting ? (
          <ReadOnlyCanvas
            className={thumb}
            canvas={doEventsUndo(painting.canvas as any)}
            size={64}
          />
        ) : (
          <div className={thumbEmpty}>рисунок не сохранился</div>
        )}

        <div className={reactions}>
          {EMOJI.map((emoji) => (
            <button
              key={emoji}
              className={chip}
              disabled={!painting}
              title={painting ? `нажимать можно сколько угодно раз` : undefined}
              onClick={() => painting && addReaction(painting, localId, emoji)}
            >
              {emoji}
              {totals[emoji] > 0 && <b>{totals[emoji]}</b>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
