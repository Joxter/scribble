import {
  combine,
  createEvent,
  createStore,
  restore,
  sample,
  Store,
} from "effector";
import { CanvasAndChatHistory, Party, CurrentLine } from "../types.ts";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke, optimizeLine } from "../utils.ts";
import { DEMO_ID, smoothConf } from "../config.ts";
import { db } from "../DB.ts";
import { id, lookup } from "@instantdb/core";
import { getUsername } from "../code-worlds.ts";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";

const setLocalId = createEvent<string>();
export const $localId = restore(setLocalId, "");
db.getLocalId("guest").then((a) => setLocalId(a));

const setParty = createEvent<Party>();
export const $party = restore(setParty, emptyParty());

// Add current user
combine([$localId, $party]).watch(([localId, party]) => {
  if (localId && party.name && party.players) {
    const ps = party.players.map((it) => it.id);

    if (!ps.includes(localId)) {
      db.transact(
        db.tx.party[DEMO_ID].update({
          ...party,
          players: [...party.players, { id: localId, name: getUsername() }],
        }),
      );
    }
  }
});

export const $currentCanvas = createStore<CanvasAndChatHistory[]>([]);
export const $imDrawing = combine($party, $localId, (party, localId) => {
  return party.gameState.drawing === localId;
});
export const $artistName = $party.map((party) => {
  const drawingPlayer = party.players.find(
    (player) => player.id === party.gameState.drawing,
  );
  return drawingPlayer ? drawingPlayer.name : "";
});
export const $myName = combine($party, $localId, (party, localId) => {
  const myPlayer = party.players.find((player) => player.id === localId);
  return myPlayer ? myPlayer.name : "";
});

export const { currentLineChanged, $currentLine, addLine } =
  createCurrentLine($imDrawing);

export const $renderMode = createStore<"normal" | "polyline" | "tldraw">(
  "tldraw",
);
export const $debugMode = createStore(false);

export const setSmoothConf = createEvent<Partial<typeof smoothConf>>();
export const $smoothConf = restore(setSmoothConf, smoothConf);

export const renderModeChanged = createEvent<
  "normal" | "polyline" | "tldraw"
>();
export const debugModeToggled = createEvent<boolean>();
export const makeWeDraw = createEvent<any>();

export const undoClicked = createEvent<any>();
export const clearCanvasClicked = createEvent<any>();
export const addBucket = createEvent<{
  x: number;
  y: number;
  color: string;
}>();

// export const canvasAndChatHistoryLoaded = createEvent<{
//   history: CanvasAndChatHistory[];
//   word: string;
//   currentLine: CurrentLine;
// }>();

export const historyUpdated = createEvent<{
  history: CanvasAndChatHistory[];
}>();

sample({
  source: [$localId, $party] as const,
  clock: makeWeDraw,
  fn: ([id, party]) => {
    return {
      ...party,
      gameState: {
        ...party.gameState,
        drawing: id,
      },
    };
  },
  target: $party,
});

$currentCanvas.on(historyUpdated, (_, { history }) => history);

// $currentCanvas.watch((v) => {
//   console.log("$currentCanvas", v);
// });

$renderMode.on(renderModeChanged, (_, mode) => mode);
$debugMode.on(debugModeToggled, (_, enabled) => enabled);

export const $svgCanvasPaths = combine(
  $currentCanvas,
  $renderMode,
  $smoothConf,
  (lines, renderMode, currentSmoothConf) => {
    const paths: { d: string; color: string }[] = [];

    lines.forEach((it, i) => {
      if (it.type === "line") {
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
      } else if (it.type === "bucket") {
        // todo: calculate area by current "paths" and generate proper "d"
      } else if (it.type === "undo") {
        paths.pop();
      }
    });

    return paths;
  },
);

export const $svgCurrentLine = combine(
  $currentLine,
  $renderMode,
  $smoothConf,
  (currentLine, renderMode, currentSmoothConf) => {
    if (currentLine.dots.length === 0) return null;

    const aaa = svgInk(
      optimizeLine(currentLine.dots).map((it) => new Vec(it[0], it[1])),
      { size: currentLine.width },
    );

    const bbb = getSvgPathFromStroke(
      getStroke(optimizeLine(currentLine.dots), {
        ...currentSmoothConf,
        size: currentLine.width,
      }),
    );

    return {
      d: renderMode === "tldraw" ? aaa : bbb,
      color: currentLine.color,
    };
  },
);

export const $rawPath = combine($currentCanvas, (lines) => {
  const rawLines: Array<[number, number, any][]> = [];

  lines.forEach((it, i) => {
    if (it.type === "line") {
      rawLines.push(optimizeLine(it.dots));
    } else if (it.type === "bucket") {
      // todo: calculate area by current "paths" and generate proper "d"
    } else if (it.type === "undo") {
      rawLines.pop();
    }
  });

  return rawLines;
});

export const $polylinePaths = combine($currentCanvas, (lines) => {
  const polylines: Array<{
    points: string;
    color: string;
    strokeWidth: number;
  }> = [];

  lines.forEach((it, i) => {
    if (it.type === "line") {
      const optimizedDots = optimizeLine(it.dots);
      const points = optimizedDots.map(([x, y]) => `${x},${y}`).join(" ");
      polylines.push({
        points,
        color: it.color,
        strokeWidth: it.width,
      });
    } else if (it.type === "bucket") {
      // todo: handle bucket for polylines
    } else if (it.type === "undo") {
      polylines.pop();
    }
  });

  return polylines;
});

db.subscribeQuery({ party: { $: { where: { id: DEMO_ID } } } }, (resp) => {
  if (resp.error) console.error(resp.error);
  if (resp.data) setParty(resp.data.party[0] as Party);
});

db.subscribeQuery(
  {
    roomEvent: {
      $: { where: { party: DEMO_ID }, order: { serverCreatedAt: "asc" } },
    },
  },
  (resp) => {
    if (resp.error) console.error(resp.error);
    if (resp.data) {
      historyUpdated({ history: resp.data.roomEvent.map((a) => a.it) });
    }
  },
);

undoClicked.watch(() => {
  db.transact(
    db.tx.roomEvent[id()]
      .create({ it: { type: "undo" } })
      .link({ party: DEMO_ID }),
  );
});

clearCanvasClicked.watch(async () => {
  const { roomEvent } = await db
    .queryOnce({ roomEvent: { $: { where: { party: DEMO_ID } } } })
    .then((it) => it.data);

  console.log("DELETE");
  console.log(roomEvent);

  if (roomEvent.length > 0) {
    db.transact(roomEvent.map((event) => db.tx.roomEvent[event.id].delete()));
  }
});

sample({ source: $party, clock: makeWeDraw }).watch((party) => {
  db.transact(db.tx.party[DEMO_ID].update(party));
});

export async function resetDEMO() {
  console.log("------- RESET All -------");

  let allParties = await db
    .queryOnce({ party: {} })
    .then((it) => it.data.party);
  console.log(`allParties.len`, allParties.length);

  let curretLines = await db
    .queryOnce({ curretLine: {} })
    .then((it) => it.data.curretLine);
  console.log(`curretLines.len`, curretLines.length);

  db.transact([
    ...allParties.map((it) => db.tx.party[it.id].delete()),
    ...curretLines.map((it) => db.tx.curretLine[it.id].delete()),
  ])
    .then(() => {
      console.log(`DELETED`);
      return db.transact([db.tx.party[DEMO_ID].create(emptyParty())]);
    })
    .then(() => {
      console.log(`Created party`, DEMO_ID);
      return db.transact([
        db.tx.curretLine[id()]
          .create({
            dots: [],
            width: 8,
            color: "#34495e",
          })
          .link({ party: DEMO_ID }),
      ]);
    })
    .then(() => {
      console.log("OK, will reload in 3 sec");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
}

function emptyParty(): Party {
  return {
    name: "Алиска",
    players: [],
    gameState: { drawing: "" },
  };
}

function createCurrentLine($imDrawing: Store<boolean>) {
  const $currentLineID = createStore("");

  const $currentLine = createStore<CurrentLine>({
    dots: [],
    color: "#000000",
    width: 8,
  });

  const currentLineChanged = createEvent<Partial<CurrentLine>>();
  const setCurrentLineID = createEvent<string>();
  const addLine = createEvent<CurrentLine>();

  $currentLineID.on(setCurrentLineID, (_, id) => id);

  $currentLine
    .on(currentLineChanged, (s, v) => {
      return { ...s, ...v };
    })
    .on(addLine, (s) => {
      return { ...s, dots: [] };
    });

  combine([$currentLine, $imDrawing, $currentLineID]).watch(
    ([currentLine, imDrawing, lineId]) => {
      if (imDrawing && lineId) {
        db.transact(
          db.tx.curretLine[lineId].update({
            width: currentLine.width,
            dots: currentLine.dots,
            color: currentLine.color,
          }),
        );
      }
    },
  );

  db.subscribeQuery(
    { party: { $: { where: { id: DEMO_ID } }, currentLine: {} } },
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

  addLine.watch((newLine) => {
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
        .link({ party: DEMO_ID }),
    );
  });

  return { $currentLine, currentLineChanged, addLine };
}
