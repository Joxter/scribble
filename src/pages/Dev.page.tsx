import React, { useMemo, useState } from "react";
import { fork } from "effector";
import { Provider } from "effector-react";
import { css } from "@linaria/core";
import { $newParty, $player, currentLine } from "../model/game-new.model.ts";
import { mockScreens, ME } from "../dev/mocks.ts";
import { PartyPrepare } from "./PartyPrepare.page.tsx";

const bar = css`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  background-color: #fff3cd;
  border-bottom: 1px solid #e0c96f;
`;

const screenButton = css`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const screenButtonActive = css`
  background-color: #1f2937;
  border-color: #1f2937;
  color: #fff;

  &:hover {
    background-color: #1f2937;
  }
`;

type ScreenKey = keyof typeof mockScreens;

export function DevPage() {
  const [screenKey, setScreenKey] = useState<ScreenKey>("prepareHost");

  const scope = useMemo(() => {
    const { party, canvas } = mockScreens[screenKey].make();

    return fork({
      values: [
        [$player, { id: ME.id, name: ME.name }],
        [$newParty, party],
        [currentLine.$currentDrawing, canvas],
      ],
    });
  }, [screenKey]);

  return (
    <div>
      <div className={bar}>
        {Object.entries(mockScreens).map(([key, screen]) => (
          <button
            key={key}
            type="button"
            className={`${screenButton} ${key === screenKey ? screenButtonActive : ""}`}
            onClick={() => setScreenKey(key as ScreenKey)}
          >
            {screen.title}
          </button>
        ))}
      </div>
      <Provider key={screenKey} value={scope}>
        <PartyPrepare />
      </Provider>
    </div>
  );
}
