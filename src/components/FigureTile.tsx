import React from "react";
import { css } from "@linaria/core";
import { PlayerAvatar } from "../types.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";

type Props = {
  avatar: PlayerAvatar;
  // роль красит плитку, отгадка — только жетон
  role?: "drawing" | "choosing";
  guessed?: boolean;
  isMe?: boolean;
  offline?: boolean;
  title?: string;
};

const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

/* черта над головой: метка «вы», живёт вместе с любым статусом */
const meSlot = css`
  height: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const meMark = css`
  width: 12px;
  height: 3px;
  border-radius: 999px;
  background-color: var(--ink);
`;

const tile = css`
  position: relative;
  width: 30px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1px;
`;

const tileDrawing = css`
  background-color: #e2f0fa;
`;

const tileChoosing = css`
  background-color: var(--warn-bg);
`;

const offlineFigure = css`
  opacity: 0.4;
  filter: grayscale(1);
`;

const badge = css`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #fff;
`;

const badgeDrawing = css`
  background-color: var(--brand);
  color: #fff;
`;

const badgeChoosing = css`
  background-color: #ffd129;
  color: var(--ink);
`;

const badgeGuessed = css`
  background-color: var(--success);
  color: #fff;
`;

function getBadge(role: Props["role"], guessed: boolean) {
  if (role === "drawing") return { sign: "✎", className: badgeDrawing };
  if (role === "choosing") return { sign: "★", className: badgeChoosing };
  if (guessed) return { sign: "✓", className: badgeGuessed };

  return null;
}

export function FigureTile({
  avatar,
  role,
  guessed = false,
  isMe = false,
  offline = false,
  title,
}: Props) {
  const sign = getBadge(role, guessed);
  const tileRole =
    role === "drawing" ? tileDrawing : role === "choosing" ? tileChoosing : "";

  return (
    <div className={root} title={title}>
      <div className={meSlot}>{isMe && <span className={meMark} />}</div>

      <div className={`${tile} ${tileRole}`}>
        <span className={offline ? offlineFigure : ""}>
          <PlayerFigure color={avatar.color} shape={avatar.shape} />
        </span>
        {sign && (
          <span className={`${badge} ${sign.className}`}>{sign.sign}</span>
        )}
      </div>
    </div>
  );
}
