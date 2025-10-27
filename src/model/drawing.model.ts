import {
  combine,
  createEvent,
  createStore,
  restore,
  sample,
  Store,
} from "effector";
import {
  CanvasAndChatHistory,
  CurrentCanvas,
  CanvasLine,
  LineEvent,
} from "../types.ts";
import { colors, smoothConf, widths } from "../config.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { liveQuery } from "../utils.ts";
import { Vec } from "../freehand/Vec.ts";
import { findLastEventIndex } from "./utils.ts";
import { db } from "../DB.ts";
import { id } from "@instantdb/core";
import { $roomId } from "./game.model.ts";

/*
export function createDrawing(
  {
    // $renderMode,
    // $allRoomEvents,
    // $currentLine,
  }: {
    $renderMode: Store<"normal" | "polyline" | "tldraw">;
    $allRoomEvents: Store<CanvasAndChatHistory[]>;
    $currentLine: Store<CanvasLine>;
  },
) {
  const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
  const $smoothConf = restore(setSmoothConf, smoothConf);

  /!*
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

      return {
        d: tldrAlg,
        color: currentLine.color,
        perf: { newTime },
      };
    },
  );

  *!/
  const $rawPath = $canvasLines;

  undoClicked.watch(() => {
    console.log("undoClicked, not implemented");
    // db.transact(
    //   db.tx.roomEvent[id()]
    //     .create({ it: { type: "undo" } })
    //     .link({ party: $roomId.getState() }),
    // );
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
*/

export function createCurrentLine(
  $roomId: Store<string>,
  $imDrawing: Store<unknown | false>,
  $renderMode: Store<"normal" | "polyline" | "tldraw">,
) {
  const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
  const $smoothConf = restore(setSmoothConf, smoothConf);

  // const $currentLine = createStore<CanvasLine["dots"]>([]);
  const $currentLineParams = createStore<Omit<CanvasLine, "dots">>({
    color: colors[1],
    width: widths[1],
  });

  const $currentDrawing = createStore<CurrentCanvas>([]);

  const lineParamsChanged = createEvent<Partial<Omit<CanvasLine, "dots">>>();
  const lineStarted = createEvent<[x: number, y: number]>();
  const lineExtended = createEvent<[x: number, y: number]>();
  // const lineEnded = createEvent<[x: number, y: number]>();
  const undoClicked = createEvent<any>();

  const $lineExtendedTimes = createStore<number[]>([]);
  const $lineExtendedCount = $lineExtendedTimes.map((times) => times.length);

  // const setCurrentLineID = createEvent<string>();
  const addLine = createEvent<CanvasLine>();
  const somebodyDrawing = createEvent<CurrentCanvas>();

  // $currentLineID.on(setCurrentLineID, (_, id) => id);

  $lineExtendedTimes.on(lineExtended, (times) => {
    const now = Date.now();
    const before1000ms = now - 1000;

    const filtered = times.filter((t) => t > before1000ms);
    filtered.push(now);

    return filtered;
  });

  $currentLineParams.on(lineParamsChanged, (s, v) => {
    return { ...s, ...v };
  });

  /*
    .on(lineStarted, (s, dot) => {
      return { ...s, dots: [dot] };
    })
    .on(lineExtended, (s, dot) => {
      return { ...s, dots: [...s.dots, dot] };
    })
    .on(addLine, (s) => {
      return { ...s, dots: [] };
    });
  */

  $currentDrawing
    .on(somebodyDrawing, (_, draw) => draw)
    // .on(lineStarted, (s, dot) => {
    //   return [...s, { dots: [] }];
    // })
    .on(lineExtended, (s, dot) => {
      const newS = [...s];
      const last = newS.at(-1)!;
      last.dots = [...last.dots, dot];

      return newS;
    })
    .on(undoClicked, (s, dot) => {
      const newS = [...s];
      newS.pop();
      return newS;
    });

  sample({
    source: [$currentDrawing, $currentLineParams] as const,
    clock: lineStarted,
    fn: ([drawing, { color, width }], dot) => {
      return [...drawing, { dots: [dot], color, width }];
    },
    target: $currentDrawing,
  });

  const $svgCanvasPaths = combine(
    $currentDrawing,
    $renderMode,
    $smoothConf,
    (lines, renderMode, currentSmoothConf) => {
      const paths: { d: string; color: string }[] = [];

      lines.forEach((it) => {
        const aaa = svgInk(
          it.dots.map((it) => new Vec(it[0], it[1])),
          { size: it.width },
        );

        paths.push({ d: aaa, color: it.color });
      });

      return paths;
    },
  );

  const $polylinePaths = combine($currentDrawing, (lines) => {
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

  /*
  sample({
    source: $currentLine,
    clock: lineEnded,
    fn: (currentLine, ended) => {
      return {
        dots: [...currentLine.dots, ended],
        color: currentLine.color,
        width: currentLine.width,
      };
    },
    target: addLine,
  });
  */

  /*
  let loading = false;
  combine([$currentLine, $imDrawing, $currentLineID]).watch(
    ([currentLine, imDrawing, lineId]) => {
      if (imDrawing && lineId) {
        // if (loading) {
        return;
        // }

        console.log("db.transact $currentLine");
        loading = true;
        // const start = Date.now();
        db.transact(
          [],
          // db.tx.curretLine[lineId].update({
          //   width: currentLine.width,
          //   dots: currentLine.dots,
          //   color: currentLine.color,
          // }),
        )
          // .then(() => {
          //   return delay(1000);
          // })
          .finally(() => {
            loading = false;
          });
        // console.log(Date.now() - start);
      }
    },
  );
  */

  // const myTopic = createEvent<any>();
  // const onTopic = createEvent<any>();
  // const $topic = createStore<any>({});

  // $topic.on(onTopic, (s, ev) => ev);

  addLine.watch((newLine) => {
    console.warn("todo addLine");
    // db.transact(
    //   db.tx.roomEvent[id()]
    //     .create({
    //       it: {
    //         type: "line",
    //         dots: newLine.dots,
    //         color: newLine.color,
    //         width: newLine.width,
    //       },
    //     })
    //     .link({ party: $roomId.getState() }),
    // );
  });

  return {
    $currentDrawing,
    $currentLineParams,
    lineParamsChanged,
    addLine,
    undoClicked,
    lineStarted,
    lineExtended,
    somebodyDrawing,
    // lineEnded,
    $svgCanvasPaths,
    $polylinePaths,
    $lineExtendedCount,

    // $topic,
    // myTopic,
  };
}
