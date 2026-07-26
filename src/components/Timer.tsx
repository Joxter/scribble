import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { party } from "../model/game-new.model.ts";

const URGENT_SEC = 10;

const root = css`
  font-size: 20px;
  font-weight: 800;
  color: var(--slate);
  background-color: var(--sunken);
  border-radius: 10px;
  padding: 2px 12px;
  font-variant-numeric: tabular-nums;
`;

const urgent = css`
  color: var(--danger);
`;

function format(sec: number) {
  const mm = Math.floor(sec / 60);
  const ss = sec % 60;

  return `${mm}:${String(ss).padStart(2, "0")}`;
}

export function Timer() {
  const timeout = useUnit(party.$timeout);

  if (timeout === null) return null;

  return (
    <span
      className={`${root} ${timeout.left <= URGENT_SEC ? urgent : ""}`}
      title="осталось времени"
    >
      {format(timeout.left)}
    </span>
  );
}
