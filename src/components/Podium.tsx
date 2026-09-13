import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $newParty, $playerAvatars } from "../model/game-new.model.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";
import { calculateTotalScores, rankByScore } from "../utils.ts";

const root = css`
  flex: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
`;

const place = css`
  width: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const winnerPlace = css`
  width: 74px;
`;

const name = css`
  font-weight: 800;
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const winnerName = css`
  font-weight: 900;
  font-size: 13px;
`;

const step = css`
  width: 100%;
  border-radius: 9px 9px 0 0;
  background-color: var(--sunken);
  border: 1px solid var(--desk);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 900;
  color: var(--muted);
`;

const winnerStep = css`
  border-color: var(--warn-border);
  background-color: #fff6e2;
  font-size: 18px;
  color: var(--warn-text);
`;

const cup = css`
  font-size: 15px;
  line-height: 1;
`;

const STEP_HEIGHT = [38, 24, 18];

export function Podium() {
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

  // ступеньки честны, только когда места 1-2-3 заняты по одному игроку: при
  // ничьей (1, 2, 2, 4) вторая ступенька врёт. Тогда пьедестала нет вообще —
  // места видно в списке слева, он есть всегда
  if (!ranked.every((p, i) => i > 3 || p.place === i + 1)) return null;

  const top = ranked.slice(0, 3);

  // 2-е место слева, 1-е в центре, 3-е справа
  const order = [top[1], top[0], top[2]].filter(Boolean);

  return (
    <div className={root}>
      {order.map((player) => {
        const rank = top.indexOf(player);
        const isWinner = rank === 0;

        return (
          <div
            key={player.id}
            className={`${place} ${isWinner ? winnerPlace : ""}`}
          >
            {isWinner && <span className={cup}>🏆</span>}
            <PlayerFigure
              color={player.avatar?.color}
              shape={player.avatar?.shape}
              height={isWinner ? 32 : 28}
            />
            <span className={`${name} ${isWinner ? winnerName : ""}`}>
              {player.name}
            </span>
            <div
              className={`${step} ${isWinner ? winnerStep : ""}`}
              style={{ height: `${STEP_HEIGHT[rank]}px` }}
            >
              {rank + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}
