import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import {
  $drawing,
  $guessed,
  $localId,
  $newParty,
  $playerAvatars,
  $selectedPlayerId,
  kickPrompted,
  playerTileClicked,
} from "../model/game-new.model.ts";
import { FigureTile } from "../components/FigureTile.tsx";
import { Button } from "../components/Button.tsx";
import { calculateTotalScores } from "../utils.ts";
import { GAME_STATUS } from "../types.ts";

const root = css`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--sunken);
`;

const row = css`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  padding: 2px 12px 6px;
`;

const tileButton = css`
  font: inherit;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: var(--sunken);
  }
`;

const card = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 12px 0;
  padding: 6px 8px;
  background-color: var(--sunken);
  border-radius: 10px;
  font-size: 13px;

  & b {
    font-weight: 800;
  }
`;

const score = css`
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12px;
  color: var(--muted);
  margin-right: auto;
`;

const close = css`
  font: inherit;
  font-size: 16px;
  line-height: 1;
  color: var(--muted);
  background: transparent;
  border: none;
  padding: 2px 4px;
  cursor: pointer;
`;

export function PlayerFigures() {
  const party = useUnit($newParty);
  const drawing = useUnit($drawing);
  const guessed = useUnit($guessed);
  const localId = useUnit($localId);
  const avatars = useUnit($playerAvatars);
  const selectedId = useUnit($selectedPlayerId);
  // события берём через useUnit: иначе в форкнутом скоупе (страница /dev)
  // клик уходит мимо скоупа и ничего не меняет
  const [selectPlayer, promptKick] = useUnit([playerTileClicked, kickPrompted]);

  if (!party) return null;

  const artistId = drawing.drawing ? drawing.who : null;
  const chooserId =
    party.gameState.state === "choosing-word" ? party.gameState.playerId : null;

  const selected = party.newPlayers.find((p) => p.id === selectedId);
  // кикать можно только по ходу игры: в лобби для этого свой список,
  // а в законченной партии убирать уже некого
  const canKick =
    party.host === localId &&
    party.status === GAME_STATUS.inProgress &&
    selectedId !== localId;

  return (
    <div className={root}>
      {selected && (
        <div className={card}>
          <b>{selected.name}</b>
          <span className={score}>
            {calculateTotalScores(party.gameProgress)[selected.id] || 0} очков
          </span>
          {canKick && (
            <Button
              variant="danger"
              size={1}
              onClick={() => promptKick(selected.id)}
            >
              Кикнуть
            </Button>
          )}
          <button
            className={close}
            onClick={() => selectPlayer(selected.id)}
          >
            ×
          </button>
        </div>
      )}

      <div className={row}>
        {party.newPlayers.map((player) => (
          <button
            key={player.id}
            className={tileButton}
            onClick={() => selectPlayer(player.id)}
          >
            <FigureTile
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
          </button>
        ))}
      </div>
    </div>
  );
}
