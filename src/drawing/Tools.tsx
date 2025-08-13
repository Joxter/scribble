import { LineWidthSelector } from "./LineWidthSelector";
import {
  resetDEMO,
  undoClicked,
  clearCanvasClicked,
  $renderMode,
  $party,
  $imDrawing,
  $artistName,
  $myName,
} from "../game.model";
import arrowArcLeftSrc from "./ArrowArcLeft.svg";
import { ColorSelectorOld } from "./ColorSelectorOld";

export function Tools() {
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
        <button onClick={clearCanvasClicked}>
          Clear
        </button>
        <LineWidthSelector />
      </div>
      <div
        style={
          {
            //
          }
        }
      >
        <ColorSelectorOld />
      </div>
    </div>
  );
}
