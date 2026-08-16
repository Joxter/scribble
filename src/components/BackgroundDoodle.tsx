import React, { useEffect, useRef, useState } from "react";
import { css } from "@linaria/core";
import { useUnit } from "effector-react";
import { svgInk } from "../freehand/svgInk.ts";
import { Vec } from "../freehand/Vec.ts";
import { colors, doodleWidths } from "../config.ts";
import { ColorSelector } from "./ColorSelector.tsx";
import { WidthSelector } from "./WidthSelector.tsx";
import { Button } from "./Button.tsx";
import { $doodleEnabled } from "../model/doodle.model.ts";

const PIXEL_RATIO = window.devicePixelRatio || 1;

type Point = [x: number, y: number];
type Stroke = { dots: Point[]; color: string; width: number };
type Viewport = { width: number; height: number };

function setupCanvas(
  canvas: HTMLCanvasElement,
  viewport: Viewport,
  ratio = PIXEL_RATIO,
) {
  const ctx = canvas.getContext("2d")!;

  canvas.width = viewport.width * ratio;
  canvas.height = viewport.height * ratio;
  ctx.scale(ratio, ratio);
  ctx.clearRect(0, 0, viewport.width, viewport.height);

  return ctx;
}

function paintStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
  ctx.fillStyle = stroke.color;

  // тычок без движения: svgInk не строит контур по одной точке, рисуем кляксу
  if (stroke.dots.length < 2) {
    const [x, y] = stroke.dots[0];

    ctx.beginPath();
    ctx.arc(x, y, stroke.width / 2, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  const d = svgInk(
    stroke.dots.map(([x, y]) => new Vec(x, y)),
    { size: stroke.width },
  );

  ctx.fill(new Path2D(d));
}

// экспорт идёт мимо экранных канвасов: там нет интерфейса сайта,
// зато нужен запас по плотности пикселей на дисплеях без ретины
function exportPng(strokes: Stroke[], viewport: Viewport) {
  const canvas = document.createElement("canvas");
  const ctx = setupCanvas(canvas, viewport, Math.max(2, PIXEL_RATIO));

  strokes.forEach((it) => paintStroke(ctx, it));

  canvas.toBlob((blob) => {
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `scribble-${Date.now()}.png`;
    link.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

// на этих элементах жест — это клик по интерфейсу, а не штрих по фону
const UI_SELECTOR = "button, a, input, select, textarea, label, [data-ui]";

// каракули живут в координатах вьюпорта и лежат под всей вёрсткой.
// события ловим на window: канвас лежит под #app, хит-тест до него не доходит
const layer = css`
  position: fixed;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const panel = css`
  position: fixed;
  z-index: 40;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: var(--panel);
  border: 1px solid var(--line-strong);
  border-radius: 18px;
  box-shadow: 0 18px 34px -20px rgba(30, 40, 50, 0.55);
  padding: 12px 14px;

  @media (max-width: 807px) {
    left: 12px;
    right: 12px;
    transform: none;
    flex-direction: column;
    align-items: stretch;
  }
`;

/* по фону рисуют протяжкой, поэтому выделение текста только мешает */
const drawingMode = css`
  user-select: none;
  cursor: crosshair;

  & input,
  & [data-ui] {
    user-select: auto;
    cursor: auto;
  }
`;

const palette = css`
  width: 300px;

  @media (max-width: 807px) {
    width: auto;
  }
`;

const tools = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export function BackgroundDoodle() {
  const paintedRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<HTMLCanvasElement>(null);
  const strokeRef = useRef<Stroke | null>(null);
  const paramsRef = useRef({ color: "", width: 0 });

  const [viewport, setViewport] = useState<Viewport>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [stroke, setStroke] = useState<Stroke | null>(null);
  const [params, setParams] = useState({
    color: colors[9],
    width: doodleWidths[1],
  });
  const enabled = useUnit($doodleEnabled);

  paramsRef.current = params;

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add(drawingMode);
    return () => document.body.classList.remove(drawingMode);
  }, [enabled]);

  useEffect(() => {
    function onResize() {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function startStroke(e: PointerEvent) {
      const target = e.target as Element | null;
      if (e.button !== 0 || target?.closest(UI_SELECTOR)) return;

      // без этого жест превращается в выделение текста
      e.preventDefault();
      strokeRef.current = {
        dots: [[e.clientX, e.clientY]],
        ...paramsRef.current,
      };
      setStroke(strokeRef.current);
    }

    function extendStroke(e: PointerEvent) {
      const current = strokeRef.current;
      if (!current) return;

      strokeRef.current = {
        ...current,
        dots: [...current.dots, [e.clientX, e.clientY]],
      };
      setStroke(strokeRef.current);
    }

    function finishStroke() {
      const current = strokeRef.current;
      if (!current) return;

      strokeRef.current = null;
      setStroke(null);
      setStrokes((prev) => [...prev, current]);
    }

    window.addEventListener("pointerdown", startStroke);
    window.addEventListener("pointermove", extendStroke);
    window.addEventListener("pointerup", finishStroke);
    window.addEventListener("pointercancel", finishStroke);

    return () => {
      window.removeEventListener("pointerdown", startStroke);
      window.removeEventListener("pointermove", extendStroke);
      window.removeEventListener("pointerup", finishStroke);
      window.removeEventListener("pointercancel", finishStroke);
      finishStroke();
    };
  }, [enabled]);

  useEffect(() => {
    const ctx = setupCanvas(paintedRef.current!, viewport);
    strokes.forEach((it) => paintStroke(ctx, it));
  }, [strokes, viewport]);

  useEffect(() => {
    const ctx = setupCanvas(liveRef.current!, viewport);
    if (stroke) {
      paintStroke(ctx, stroke);
    }
  }, [stroke, viewport]);

  return (
    <>
      <canvas ref={paintedRef} className={layer} />
      <canvas ref={liveRef} className={layer} />

      {enabled && (
        <div className={panel} data-ui>
          <div className={palette}>
            <ColorSelector
              value={params.color}
              onChange={(color) => setParams({ ...params, color })}
            />
          </div>
          <div className={tools}>
            <WidthSelector
              value={params.width}
              options={doodleWidths}
              onChange={(width) => setParams({ ...params, width })}
            />
            <Button
              variant="secondary"
              size={1}
              disabled={strokes.length === 0}
              onClick={() => setStrokes(strokes.slice(0, -1))}
            >
              ↶ Отменить
            </Button>
            <Button
              variant="secondary"
              size={1}
              disabled={strokes.length === 0}
              onClick={() => exportPng(strokes, viewport)}
            >
              ⬇ PNG
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
