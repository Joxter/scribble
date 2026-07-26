import React, { useState } from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { Link } from "wouter";
import {
  currentLine,
  $localId,
  $logiSmol,
  $newParty,
} from "../model/game-new.model.ts";

// поверх страницы, чтобы не сдвигать игровую раскладку
const root = css`
  position: fixed;
  left: 12px;
  bottom: 12px;
  z-index: 50;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 8px;
`;

const toggle = css`
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--slate);
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const panel = css`
  width: 360px;
  max-width: calc(100vw - 24px);
  max-height: 70vh;
  overflow: auto;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  padding: 12px;
  font-size: 12px;

  pre {
    white-space: pre-wrap;
    word-break: break-all;
  }
`;

export function DeveloperTools() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const localId = useUnit($localId);
  const party = useUnit($newParty);
  const currentDrawing = useUnit(currentLine.$currentDrawing);
  const logiSmol = useUnit($logiSmol);

  if (!party) return null;

  return (
    <div className={root}>
      <button className={toggle} onClick={() => setIsCollapsed(!isCollapsed)}>
        Dev {isCollapsed ? "▲" : "▼"}
      </button>

      {!isCollapsed && (
        <div className={panel}>
          <div>
            {logiSmol.map((v, i) => {
              return <p key={i}>{JSON.stringify(v)}</p>;
            })}
          </div>
          <p>dots.len: {currentDrawing.at(-1)?.dots.length}</p>
          <p>color: {currentDrawing.at(-1)?.color}</p>
          <p>width: {currentDrawing.at(-1)?.width}</p>
          <pre>{JSON.stringify(party.gameState, null, 2)}</pre>
          <div>
            <Link href="https://joxter.github.io/scribble/" target="_blank">
              website
            </Link>
          </div>
          <p>localId: {localId}</p>

          <pre>{JSON.stringify(party, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
