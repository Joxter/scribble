import { WidthSelector } from "../components/WidthSelector.tsx";
import {
  undoClicked,
  $currentLine,
  currentLineChanged,
} from "../model/game.model.ts";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelector } from "../components/ColorSelector.tsx";
import { useStoreMap } from "effector-react";

export function Tools() {
  const width = useStoreMap($currentLine, (s) => s.width);
  const color = useStoreMap($currentLine, (s) => s.color);

  return (
    <div
      style={{
        display: "grid",
        alignContent: "start",
        padding: "8px",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={undoClicked}>
          <img style={{ width: "20px" }} src={arrowArcLeftSrc} />
        </button>

        <WidthSelector
          value={width}
          onChange={(width) => currentLineChanged({ width })}
        />
      </div>
      <div>
        <ColorSelector
          value={color}
          onChange={(color) => currentLineChanged({ color })}
        />
      </div>
    </div>
  );
}
