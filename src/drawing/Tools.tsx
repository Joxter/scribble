import React from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { WidthSelector } from "../components/WidthSelector.tsx";
import { ColorSelector } from "../components/ColorSelector.tsx";
import { Button } from "../components/Button.tsx";
import { currentLine } from "../model/game-new.model.ts";

/* высота общая с полем отгадки: под холстом ничего не прыгает при смене роли */
const root = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 2px 4px 0;
  height: var(--row-under);
  flex: none;

  @media (max-width: 807px) {
    height: auto;
    min-height: var(--row-under);
  }
`;

const bottomRow = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const undoButton = css`
  margin-left: auto;
`;

export function Tools() {
  const { width, color } = useUnit(currentLine.$currentLineParams);

  return (
    <div className={root}>
      <ColorSelector
        value={color}
        onChange={(color) => currentLine.lineParamsChanged({ color })}
      />
      <div className={bottomRow}>
        <WidthSelector
          value={width}
          onChange={(width) => currentLine.lineParamsChanged({ width })}
        />
        <Button
          variant="secondary"
          size={1}
          className={undoButton}
          onClick={() => currentLine.undoClicked(null)}
        >
          ↶ Отменить
        </Button>
      </div>
    </div>
  );
}
