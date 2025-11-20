import { combine, createEvent, createStore, restore, sample } from "effector";
import { CurrentCanvas, CanvasLine } from "../types.ts";
import { colors, smoothConf, widths } from "../config.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";

export function createCurrentLine() {
  const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
  const $smoothConf = restore(setSmoothConf, smoothConf);

  const $currentLineParams = createStore<Omit<CanvasLine, "dots">>({
    color: colors[1],
    width: widths[1],
  });

  const $currentDrawing = createStore<CurrentCanvas>([]);

  const lineParamsChanged = createEvent<Partial<Omit<CanvasLine, "dots">>>();
  const lineStarted = createEvent<[x: number, y: number]>();
  const lineExtended = createEvent<[x: number, y: number]>();
  const saveCanvasToPaining = createEvent();
  const undoClicked = createEvent<any>();

  const $lineExtendedTimes = createStore<number[]>([]);
  const $lineExtendedCount = $lineExtendedTimes.map((times) => times.length);

  const somebodyDrawing = createEvent<CurrentCanvas>();
  const initLoad = createEvent<CurrentCanvas>();
  const newRound = createEvent<any>();

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

  $currentDrawing
    .on(newRound, () => [])
    .on(somebodyDrawing, (_, draw) => draw)
    .on(initLoad, (_, draw) => draw)
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

  const $svgCanvasPaths = combine($currentDrawing, (lines) => {
    const paths: { d: string; color: string }[] = [];

    lines.forEach((it) => {
      const aaa = svgInk(
        it.dots.map((it) => new Vec(it[0], it[1])),
        { size: it.width },
      );

      paths.push({ d: aaa, color: it.color });
    });

    return paths;
  });

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

  return {
    $currentDrawing,
    $currentLineParams,
    lineParamsChanged,
    undoClicked,
    initLoad,
    newRound,
    lineStarted,
    lineExtended,
    somebodyDrawing,
    $svgCanvasPaths,
    $polylinePaths,
    $lineExtendedCount,
    $smoothConf,
    setSmoothConf,
    saveCanvasToPaining,
  };
}
