import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $newParty, $playerAvatars } from "../model/game-new.model.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";
import { calculateTotalScores, rankByScore } from "../utils.ts";

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

/* место — колонка фиксированной ширины: при ничьей номера повторяются
   (1, 2, 2, 4), и без неё строки разъезжались бы */
const place = css`
  width: 18px;
  flex: none;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
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
  const avatars = useUnit($playerAvatars);

  if (!party) return null;

  const totals = calculateTotalScores(party.gameProgress);

  const ranked = rankByScore(
    party.newPlayers.map((p) => ({
      id: p.id,
      name: p.name,
      avatar: avatars[p.id],
      score: totals[p.id] || 0,
    })),
  );

  return (
    <div className={root}>
      {ranked.map((player) => {
        const first = player.place === 1;

        return (
          <div key={player.id} className={row}>
            <span className={place}>{player.place}.</span>
            <PlayerFigure
              color={player.avatar?.color}
              shape={player.avatar?.shape}
              height={26}
            />
            <span className={`${name} ${first ? winnerName : ""}`}>
              {player.name}
            </span>
            <span className={`${score} ${first ? winnerScore : ""}`}>
              {player.score}
            </span>
          </div>
        );
      })}
    </div>
  );
}
