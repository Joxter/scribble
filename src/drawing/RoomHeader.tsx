import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { $newParty } from "../model/game-new.model.ts";
import { GAME_STATUS } from "../types.ts";

const root = css`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px;
`;

const name = css`
  font-size: 20px;
  font-weight: 900;
  color: var(--ink);
`;

const rounds = css`
  margin-left: auto;
  font-size: 20px;
  font-weight: 800;
  color: var(--slate);
  background-color: var(--sunken);
  border-radius: 10px;
  padding: 2px 12px;
  white-space: nowrap;
`;

export function RoomHeader() {
  const party = useUnit($newParty);

  if (!party) return null;

  const round = (party.gameProgress || []).length;

  return (
    <div className={root}>
      <span className={name}>{party.name}</span>
      <span className={rounds}>
        {party.status === GAME_STATUS.finished
          ? "финал"
          : `${round} / ${party.gameParams.rounds}`}
      </span>
    </div>
  );
}
