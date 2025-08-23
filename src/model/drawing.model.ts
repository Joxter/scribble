import { combine, createEvent, restore, Store } from "effector";
import { CanvasAndChatHistory, CurrentLine, LineEvent } from "../types.ts";
import { smoothConf } from "../config.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { getSvgPathFromStroke, optimizeLine } from "../utils.ts";
import { Vec } from "../freehand/Vec.ts";
import getStroke from "perfect-freehand";
import { findLastEventIndex } from "./utils.ts";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";
import { $roomId } from "./game.model.ts";

export function createDrawing({
  $renderMode,
  $allRoomEvents,
  $currentLine,
}: {
  $renderMode: Store<"normal" | "polyline" | "tldraw">;
  $allRoomEvents: Store<CanvasAndChatHistory[]>;
  $currentLine: Store<CurrentLine>;
}) {
  const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
  const $smoothConf = restore(setSmoothConf, smoothConf);

  const undoClicked = createEvent<any>();

  const $canvasLines = $allRoomEvents.map((events) => {
    const last = findLastEventIndex(events, (it) => it.type === "new-word");
    if (!last) return [];

    const lines: LineEvent[] = [];

    events.slice(last.i).forEach((it) => {
      if (it.type === "line") {
        lines.push(it);
      } else if (it.type === "undo") {
        lines.pop();
      }
    });

    return lines;
  });

  const $svgCanvasPaths = combine(
    $canvasLines,
    $renderMode,
    $smoothConf,
    (lines, renderMode, currentSmoothConf) => {
      const paths: { d: string; color: string }[] = [];

      lines.forEach((it) => {
        const aaa = svgInk(
          optimizeLine(it.dots).map((it) => new Vec(it[0], it[1])),
          { size: it.width },
        );

        const bbb = getSvgPathFromStroke(
          getStroke(optimizeLine(it.dots), {
            ...currentSmoothConf,
            size: it.width,
          }),
        );

        paths.push({
          d: renderMode === "tldraw" ? aaa : bbb,
          color: it.color,
        });
      });

      return paths;
    },
  );

  const $svgCurrentLine = combine(
    $currentLine,
    $renderMode,
    $smoothConf,
    (currentLine, renderMode, currentSmoothConf) => {
      if (currentLine.dots.length === 0) return null;

      let start = performance.now();
      const tldrAlg = svgInk(
        currentLine.dots.map((it) => new Vec(it[0], it[1])),
        { size: currentLine.width },
      );
      let newTime = performance.now() - start;

      let start2 = performance.now();
      const freehand = getSvgPathFromStroke(
        getStroke(currentLine.dots, {
          ...currentSmoothConf,
          size: currentLine.width,
        }),
      );
      let oldTime = performance.now() - start2;

      return {
        d: renderMode === "tldraw" ? tldrAlg : freehand,
        color: currentLine.color,
        perf: { oldTime, newTime },
      };
    },
  );

  const $rawPath = $canvasLines;

  const $polylinePaths = combine($canvasLines, (lines) => {
    const polylines: Array<{
      points: string;
      color: string;
      strokeWidth: number;
    }> = [];

    lines.forEach((it, i) => {
      const optimizedDots = it.dots;
      const points = optimizedDots.map(([x, y]) => `${x},${y}`).join(" ");
      polylines.push({
        points,
        color: it.color,
        strokeWidth: it.width,
      });
    });

    return polylines;
  });

  undoClicked.watch(() => {
    db.transact(
      db.tx.roomEvent[id()]
        .create({ it: { type: "undo" } })
        .link({ party: $roomId.getState() }),
    );
  });

  return {
    $svgCanvasPaths,
    $svgCurrentLine,
    $rawPath,
    $polylinePaths,
    undoClicked,
    $smoothConf,
    setSmoothConf,
  };
}
