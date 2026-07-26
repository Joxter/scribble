import React, { useMemo, useState } from "react";
import { fork } from "effector";
import { Provider } from "effector-react";
import { css } from "@linaria/core";
import {
  $newParty,
  $partyPaintings,
  $player,
  currentLine,
  party,
} from "../model/game-new.model.ts";
import { mockScreens, ME, MockScreen } from "../dev/mocks.ts";
import { PaperTweaker } from "../dev/PaperTweaker.tsx";
import { PartyPrepare } from "./PartyPrepare.page.tsx";
import { HomePage } from "./Home.page.tsx";

const bar = css`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 4px 6px;
  background-color: #fff3cd;
  border-bottom: 1px solid #e0c96f;
`;

const screenButton = css`
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.2;
  padding: 3px 6px;
  border: 1px solid #d7dce2;
  border-radius: 5px;
  background-color: #fff;
  color: var(--slate);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const screenButtonActive = css`
  background-color: var(--ink);
  border-color: var(--ink);
  color: #fff;

  &:hover {
    background-color: var(--ink);
  }
`;

type ScreenKey = keyof typeof mockScreens;

export function DevPage() {
  const [screenKey, setScreenKey] = useState<ScreenKey>("start");

  const screen: MockScreen = mockScreens[screenKey];

  const scope = useMemo(() => {
    const { party: mockParty, canvas, paintings, myParties } = screen.make();

    return fork({
      values: [
        [$player, { id: ME.id, name: ME.name }],
        [$newParty, mockParty],
        [currentLine.$currentDrawing, canvas],
        [$partyPaintings, paintings || []],
        [party.$allMyParties, myParties || []],
      ],
    });
  }, [screenKey]);

  return (
    <div>
      <div className={bar}>
        {Object.entries(mockScreens).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={`${screenButton} ${key === screenKey ? screenButtonActive : ""}`}
            onClick={() => setScreenKey(key as ScreenKey)}
          >
            {value.title}
          </button>
        ))}
      </div>
      <PaperTweaker />
      <Provider key={screenKey} value={scope}>
        {screen.page === "start" ? <HomePage /> : <PartyPrepare />}
      </Provider>
    </div>
  );
}
