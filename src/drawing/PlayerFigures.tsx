import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $drawing,
  $guessed,
  $localId,
  $newParty,
  $playerColors,
} from "../model/game-new.model.ts";
import { PlayerFigure } from "../components/PlayerFigure.tsx";

const root = css`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  padding: 10px 16px;
  border-top: 1px solid var(--sunken);
`;

const slot = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const badge = css`
  position: absolute;
  top: -3px;
  right: -6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  color: #fff;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #fff;
`;

const badgeDrawing = css`
  background-color: var(--brand);
`;

const badgeGuessed = css`
  background-color: var(--success);
`;

const meLabel = css`
  font-size: 8px;
  font-weight: 800;
  color: var(--brand-dark);
  letter-spacing: 0.3px;
`;

export function PlayerFigures() {
  const party = useUnit($newParty);
  const drawing = useUnit($drawing);
  const guessed = useUnit($guessed);
  const localId = useUnit($localId);
  const colors = useUnit($playerColors);

  if (!party) return null;

  const artistId = drawing.drawing ? drawing.who : null;
  const chooserId =
    party.gameState.state === "choosing-word" ? party.gameState.playerId : null;

  return (
    <div className={root}>
      {party.newPlayers.map((player) => {
        const isArtist = player.id === artistId || player.id === chooserId;
        const hasGuessed = Boolean(guessed[player.id]);

        return (
          <div key={player.id} className={slot} title={player.name}>
            <PlayerFigure color={colors[player.id]} />
            {isArtist && (
              <span className={`${badge} ${badgeDrawing}`} title="рисует">
                ✎
              </span>
            )}
            {!isArtist && hasGuessed && (
              <span className={`${badge} ${badgeGuessed}`} title="отгадал">
                ✓
              </span>
            )}
            {player.id === localId && <span className={meLabel}>ВЫ</span>}
          </div>
        );
      })}
    </div>
  );
}
