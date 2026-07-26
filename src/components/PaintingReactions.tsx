import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $lastTurn } from "../model/game-new.model.ts";
import { Placeholder } from "./Placeholder.tsx";

const root = css`
  margin: 12px 16px 0;
`;

const row = css`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const thumb = css`
  width: 64px;
  height: 64px;
  flex: none;
  background-color: var(--canvas);
  border-radius: 12px;
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
  font-size: 15px;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 6px 12px;
`;

const EMOJI = ["😂", "😮", "🔥"];

export function PaintingReactions() {
  const lastTurn = useUnit($lastTurn);

  if (!lastTurn) return null;

  return (
    <Placeholder className={root} note="миниатюра рисунка и реакции">
      <div className={row}>
        <div className={thumb}>рисунок</div>
        <div className={reactions}>
          {EMOJI.map((emoji) => (
            <span key={emoji} className={chip}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </Placeholder>
  );
}
