import { WidthSelector } from "../components/WidthSelector.tsx";
import {
  undoClicked,
  clearCanvasClicked,
  $currentLine,
  currentLineChanged,
} from "../game.model";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelector } from "../components/ColorSelector.tsx";
import { useUnit } from "effector-react";

export function Tools() {
  const currentLine = useUnit($currentLine);

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

        <button onClick={clearCanvasClicked}>Clear</button>
        <WidthSelector
          value={currentLine.width}
          onChange={(width) => currentLineChanged({ width })}
        />
      </div>
      <div>
        <ColorSelector
          value={currentLine.color}
          onChange={(color) => currentLineChanged({ color })}
        />
      </div>
    </div>
  );
}
