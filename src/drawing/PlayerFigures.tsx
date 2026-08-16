import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $drawing,
  $guessed,
  $localId,
  $newParty,
  $playerAvatars,
} from "../model/game-new.model.ts";
import { FigureTile } from "../components/FigureTile.tsx";

const root = css`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  padding: 2px 12px 6px;
  border-top: 1px solid var(--sunken);
`;

export function PlayerFigures() {
  const party = useUnit($newParty);
  const drawing = useUnit($drawing);
  const guessed = useUnit($guessed);
  const localId = useUnit($localId);
  const avatars = useUnit($playerAvatars);

  if (!party) return null;

  const artistId = drawing.drawing ? drawing.who : null;
  const chooserId =
    party.gameState.state === "choosing-word" ? party.gameState.playerId : null;

  return (
    <div className={root}>
      {party.newPlayers.map((player) => (
        <FigureTile
          key={player.id}
          avatar={avatars[player.id]}
          role={
            player.id === artistId
              ? "drawing"
              : player.id === chooserId
                ? "choosing"
                : undefined
          }
          guessed={Boolean(guessed[player.id])}
          isMe={player.id === localId}
          title={player.name}
        />
      ))}
    </div>
  );
}
