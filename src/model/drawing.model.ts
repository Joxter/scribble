import {
  combine,
  createEvent,
  createStore,
  restore,
  sample,
  Store,
} from "effector";
import { CanvasAndChatHistory, CurrentLine, LineEvent } from "../types.ts";
import { colors, smoothConf, widths } from "../config.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { liveQuery } from "../utils.ts";
import { Vec } from "../freehand/Vec.ts";
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
          it.dots.map((it) => new Vec(it[0], it[1])),
          { size: it.width },
        );

        paths.push({ d: aaa, color: it.color });
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

      return {
        d: tldrAlg,
        color: currentLine.color,
        perf: { newTime },
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
    console.log("db.transact undoClicked");
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

export function createCurrentLine(
  $roomId: Store<string>,
  $imDrawing: Store<unknown | false>,
) {
  const $currentLineID = createStore("");

  const $currentLine = createStore<CurrentLine>({
    dots: [],
    color: colors[1],
    width: widths[1],
  });

  const currentLineChanged = createEvent<Partial<CurrentLine>>();
  const lineStarted = createEvent<[x: number, y: number]>();
  const lineExtended = createEvent<[x: number, y: number]>();
  const lineEnded = createEvent<[x: number, y: number]>();

  const $lineExtendedTimes = createStore<number[]>([]);
  const $lineExtendedCount = $lineExtendedTimes.map((times) => times.length);

  const setCurrentLineID = createEvent<string>();
  const addLine = createEvent<CurrentLine>();

  $currentLineID.on(setCurrentLineID, (_, id) => id);

  $lineExtendedTimes.on(lineExtended, (times) => {
    const now = Date.now();
    const before1000ms = now - 1000;

    const filtered = times.filter((t) => t > before1000ms);
    filtered.push(now);

    return filtered;
  });

  $currentLine
    .on(currentLineChanged, (s, v) => {
      return { ...s, ...v };
    })
    .on(lineStarted, (s, dot) => {
      return { ...s, dots: [dot] };
    })
    .on(lineExtended, (s, dot) => {
      return { ...s, dots: [...s.dots, dot] };
    })
    .on(addLine, (s) => {
      return { ...s, dots: [] };
    });

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
          db.tx.curretLine[lineId].update({
            width: currentLine.width,
            dots: currentLine.dots,
            color: currentLine.color,
          }),
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

  const room = db.joinRoom("drawing", "d12bccaf-efb4-4481-b4e9-b51fc3b3e547");

  let i = 0;
  const myPresence = createEvent<any>();
  const onPresence = createEvent<any>();
  const $pres = createStore<any>({});

  const unsubscribePresence = room.subscribePresence({}, (ev) => {
    // console.log("presence", ev);
    onPresence(ev);
  });

  $currentLine.watch((currentLine) => {
    // console.log("myPresence.watch", arr);
    room.publishPresence({ currentLine });
  });

  $pres.on(onPresence, (s, ev) => ev);

  liveQuery($roomId, (roomId) => {
    if (!roomId) return () => {};

    return db.subscribeQuery(
      { party: { $: { where: { id: roomId } }, currentLine: {} } },
      (resp) => {
        if (resp.error) console.error(resp.error);
        if (resp.data) {
          const party = resp.data.party[0];
          if (party?.currentLine) {
            setCurrentLineID(party.currentLine.id);
            if (!$imDrawing.getState()) {
              currentLineChanged(party.currentLine);
            }
          }
        }
      },
    );
  });

  addLine.watch((newLine) => {
    console.log("db.transact addLine");
    db.transact(
      db.tx.roomEvent[id()]
        .create({
          it: {
            type: "line",
            dots: newLine.dots,
            color: newLine.color,
            width: newLine.width,
          },
        })
        .link({ party: $roomId.getState() }),
    );
  });

  return {
    $currentLine,
    currentLineChanged,
    addLine,
    lineStarted,
    lineExtended,
    lineEnded,
    $lineExtendedCount,
    $pres,
    myPresence,
  };
}
