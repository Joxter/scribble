import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $newParty, $playerColors } from "../model/game-new.model.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";
import { calculateTotalScores } from "../utils.ts";

const root = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
`;

const row = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const name = css`
  font-size: 13px;
  font-weight: 800;
  color: var(--slate);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const score = css`
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
`;

const winnerName = css`
  font-weight: 900;
  color: var(--ink);
`;

const winnerScore = css`
  color: var(--ink);
`;

export function FinalStandings() {
  const party = useUnit($newParty);
  const colors = useUnit($playerColors);

  if (!party) return null;

  const totals = calculateTotalScores(party.gameProgress);

  const ranked = party.newPlayers
    .map((p) => ({
      id: p.id,
      name: p.name,
      color: colors[p.id],
      score: totals[p.id] || 0,
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className={root}>
      {ranked.map((player, i) => (
        <div key={player.id} className={row}>
          <PlayerFigure color={player.color} height={26} />
          <span className={`${name} ${i === 0 ? winnerName : ""}`}>
            {player.name}
          </span>
          <span className={`${score} ${i === 0 ? winnerScore : ""}`}>
            {player.score}
          </span>
        </div>
      ))}
    </div>
  );
}
