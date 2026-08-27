import React from "react";
import { css } from "@linaria/core";
import { avatarColors, avatarShapes } from "../config.ts";
import { PlayerAvatar } from "../types.ts";
import { PlayerFigure } from "./PlayerFigure.tsx";

type Props = {
  value: PlayerAvatar;
  onChange: (avatar: PlayerAvatar) => void;
};

const root = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const preview = css`
  width: 74px;
  height: 84px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sunken);
  border: 1px solid var(--line);
  border-radius: 16px;
`;

const controls = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const shapeRow = css`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const shapeButton = css`
  width: 38px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 0;
  cursor: pointer;

  &:hover {
    border-color: var(--brand);
  }
`;

const shapeSelected = css`
  border-color: var(--brand);
  box-shadow: inset 0 0 0 1px var(--brand);
`;

const colorRow = css`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 6px;

  @media (max-width: 807px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`;

const swatch = css`
  aspect-ratio: 1;
  border: none;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px var(--desk);
`;

const swatchSelected = css`
  box-shadow:
    inset 0 0 0 1px var(--desk),
    0 0 0 2px #fff,
    0 0 0 4px var(--brand);
`;

export function AvatarPicker({ value, onChange }: Props) {
  return (
    <div className={root}>
      <div className={preview}>
        <PlayerFigure color={value.color} shape={value.shape} height={64} />
      </div>

      <div className={controls}>
        <div className={shapeRow}>
          {avatarShapes.map((shape) => (
            <button
              key={shape}
              type="button"
              title={shape}
              className={`${shapeButton} ${shape === value.shape ? shapeSelected : ""}`}
              onClick={() => onChange({ ...value, shape })}
            >
              <PlayerFigure color="var(--ink)" shape={shape} height={30} />
            </button>
          ))}
        </div>

        <div className={colorRow}>
          {avatarColors.map((color) => (
            <button
              key={color}
              type="button"
              className={`${swatch} ${color === value.color ? swatchSelected : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => onChange({ ...value, color })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
