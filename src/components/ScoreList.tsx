import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $lastTurn,
  $localId,
  $newParty,
  $playerAvatars,
} from "../model/game-new.model.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";
import { calculateTotalScores, calculateTurnPoints } from "../utils.ts";

const root = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 20px;
  align-content: start;
`;

const row = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
`;

const figureSlot = css`
  width: 20px;
  display: flex;
  justify-content: center;
`;

const name = css`
  font-weight: 800;
  font-size: 15px;
  line-height: 1.2;
`;

const points = css`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.3;
`;

const delta = css`
  color: var(--success-text);
`;

const deltaZero = css`
  color: #aab0b8;
`;

const empty = css`
  grid-column: 1 / -1;
  font-size: 14px;
  font-weight: 700;
  color: var(--muted);
  text-align: center;
  padding: 16px 0;
`;

export function ScoreList() {
  const party = useUnit($newParty);
  const lastTurn = useUnit($lastTurn);
  const localId = useUnit($localId);
  const avatars = useUnit($playerAvatars);

  if (!party) return null;

  const turnPoints = lastTurn ? calculateTurnPoints(lastTurn) : {};
  const totals = calculateTotalScores(party.gameProgress);

  const rows = party.newPlayers
    .map((p) => ({
      id: p.id,
      name: p.name,
      avatar: avatars[p.id],
      delta: turnPoints[p.id] || 0,
      total: totals[p.id] || 0,
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className={root}>
      {!lastTurn && <p className={empty}>Очки появятся после первого хода</p>}
      {lastTurn &&
        rows.map((r) => (
          <div key={r.id} className={row}>
            <div className={figureSlot}>
              <PlayerFigure
                color={r.avatar?.color}
                shape={r.avatar?.shape}
                height={28}
              />
            </div>
            <div>
              <div className={name}>
                {r.name}
                {r.id === localId ? " (вы)" : ""}
              </div>
              <div className={points}>
                <span className={r.delta > 0 ? delta : deltaZero}>
                  +{r.delta}
                </span>{" "}
                · {r.total}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
