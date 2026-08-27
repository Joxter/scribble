import React from "react";
import { css } from "@linaria/core";
import { colors } from "../config.ts";

type Props = {
  value: string;
  onChange: (color: string) => void;
};

const root = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 6px;

  @media (max-width: 815px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
`;

const swatch = css`
  aspect-ratio: 1;
  border: none;
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  /* светлые маркеры не теряются на белом */
  box-shadow: inset 0 0 0 1px var(--desk);
`;

const selected = css`
  box-shadow:
    inset 0 0 0 1px var(--desk),
    0 0 0 2px #fff,
    0 0 0 4px var(--brand);
`;

export function ColorSelector({ value, onChange }: Props) {
  return (
    <div className={root}>
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          title={color}
          onClick={() => onChange(color)}
          className={`${swatch} ${color === value ? selected : ""}`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
