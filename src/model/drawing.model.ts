import {
  combine,
  createEvent,
  createStore,
  restore,
  sample,
  Store,
} from "effector";
import { CanvasLine, CurrentCanvas, GAME_STATUS, Party } from "../types.ts";
import { colors, smoothConf, widths } from "../config.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";
import { liveQuery } from "../utils.ts";
import { db } from "../DB.ts";
import { saveCanvas } from "../db-things.ts";

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

export function createDrawing(params: {
  $localId: Store<string>;
  $newParty: Store<Party | null>;
  log: (data: any) => any;
  $timeout: Store<{ left: number; passed: number } | null>;
}) {
  const { $localId, $newParty, log, $timeout } = params;

  const $drawing = combine($localId, $newParty, $timeout, (loadId, p, timeout) => {
    if (!p) return { drawing: false } as const;

    if (
      p.status === GAME_STATUS.inProgress &&
      p.gameState.state === "drawing"
    ) {
      const s = p.gameState;

      // Calculate current clue based on time passed
      let currentClue = s.allClues[0].clue;
      if (timeout) {
        for (const clueEntry of s.allClues) {
          if (timeout.passed >= clueEntry.time) {
            currentClue = clueEntry.clue;
          } else {
            break;
          }
        }
      }

      return {
        gameState: p.gameState,
        drawing: true,
        iam: loadId === s.playerId,
        who: s.playerId,
        word: s.word,
        clue: currentClue,
      } as const;
    }

    return { drawing: false } as const;
  });

  const $imDrawing = $drawing.map((t) => {
    return t.drawing && t.iam;
  });

  const $isServer = $imDrawing;

  const currentLine = createCurrentLine();

  const $currentDrawingId = $newParty.map((p) => {
    if (p && p.gameState.state === "drawing") {
      return p.gameState.drawingId;
    } else {
      return null;
    }
  });

  sample({ clock: $currentDrawingId, target: currentLine.newRound });

  liveQuery($newParty, (party) => {
    if (!party) return () => [];

    log(`joinRoom ${party.id}`);
    const room = db.joinRoom("party", party.id);
    log(`joined`);

    const uns = currentLine.$currentDrawing.watch((currentDrawing) => {
      if ($imDrawing.getState()) {
        log(`publishTopic`);
        room.publishTopic("currentCanvas", { currentDrawing });
      }
    });

    const unsubscribeTopic = room.subscribeTopic("currentCanvas", (ev) => {
      log(`currentCanvas`);
      if (!$imDrawing.getState()) {
        currentLine.somebodyDrawing(ev.currentDrawing);
      }
    });

    return () => {
      log(`unsubscribe`);
      uns();
      unsubscribeTopic();
      room.leaveRoom();
    };
  });

  // сохранить рисунок в базу
  const a = sample({
    source: [currentLine.$currentDrawing, $newParty] as const,
    clock: currentLine.saveCanvasToPaining,
  });
  a.watch(([canvas, p]) => {
    if (p?.gameState.state === "drawing") {
      saveCanvas(p.gameState.drawingId, canvas);
    }
  });

  return {
    $drawing,
    $isServer,
    currentLine,
    $currentDrawingId,
  };
}
