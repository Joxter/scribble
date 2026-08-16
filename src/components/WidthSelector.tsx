import React from "react";
import { css } from "@linaria/core";
import { widths } from "../config.ts";

type Props = {
  value: number;
  onChange: (width: number) => void;
  options?: number[];
};

const root = css`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 8px 14px;
`;

const slot = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const dot = css`
  background-color: var(--ink);
  border-radius: 50%;
`;

const selected = css`
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 4px var(--brand);
`;

// толщина линии на канвасе крупнее, чем читаемая точка в панели
const DOT_SIZES = [4, 7, 11, 15, 20];

export function WidthSelector({ value, onChange, options = widths }: Props) {
  return (
    <div className={root}>
      {options.map((width, i) => {
        const size = DOT_SIZES[i] || DOT_SIZES.at(-1)!;

        return (
          <button
            key={width}
            type="button"
            title={`${width} px`}
            onClick={() => onChange(width)}
            className={slot}
          >
            <span
              className={`${dot} ${width === value ? selected : ""}`}
              style={{ width: `${size}px`, height: `${size}px` }}
            />
          </button>
        );
      })}
    </div>
  );
}
