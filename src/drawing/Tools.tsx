import { WidthSelector } from "../components/WidthSelector.tsx";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelector } from "../components/ColorSelector.tsx";
import { useStoreMap, useUnit } from "effector-react";
import {
  $currentLineParams,
  lineParamsChanged,
  undoClicked,
} from "../model/game-new.model.ts";

export function Tools() {
  const { width, color } = useUnit($currentLineParams);

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
          onChange={(width) => lineParamsChanged({ width })}
        />
      </div>
      <div>
        <ColorSelector
          value={color}
          onChange={(color) => lineParamsChanged({ color })}
        />
      </div>
    </div>
  );
}
