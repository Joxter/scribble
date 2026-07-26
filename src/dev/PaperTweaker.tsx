import React, { useEffect, useState } from "react";
import { css } from "@linaria/core";
import { getBasePath } from "../utils.ts";

const FALLBACK = {
  baseFrequency: 0.0128,
  numOctaves: 6,
  surfaceScale: 3,
  tile: 1080,
  color: "#fdfcf0",
  seed: 1,
};

type Params = typeof FALLBACK;

const PAPER_URL = `${getBasePath()}paper.svg`;

function num(source: string, attr: string, fallback: number) {
  const found = source.match(new RegExp(`${attr}="([\\d.]+)"`));
  return found ? Number(found[1]) : fallback;
}

// читаем текущие значения из файла, чтобы панель показывала реальный фон
function parsePaperSvg(svg: string): Params {
  return {
    baseFrequency: num(svg, "baseFrequency", FALLBACK.baseFrequency),
    numOctaves: num(svg, "numOctaves", FALLBACK.numOctaves),
    surfaceScale: num(svg, "surfaceScale", FALLBACK.surfaceScale),
    tile: num(svg, "width", FALLBACK.tile),
    color: svg.match(/fill="(#[0-9a-fA-F]+)"/)?.[1] || FALLBACK.color,
    seed: num(svg, "seed", FALLBACK.seed),
  };
}

function paperSvg(p: Params) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${p.tile}" height="${p.tile}" viewBox="0 0 ${p.tile} ${p.tile}">`,
    `<defs><filter id="p" x="0" y="0" width="100%" height="100%">`,
    `<feTurbulence type="fractalNoise" baseFrequency="${p.baseFrequency}" numOctaves="${p.numOctaves}" seed="${p.seed}" result="noise"/>`,
    `<feDiffuseLighting in="noise" lighting-color="#ffffff" surfaceScale="${p.surfaceScale}" result="diffuse">`,
    `<feDistantLight azimuth="45" elevation="45"/>`,
    `</feDiffuseLighting>`,
    `<feComposite in="diffuse" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.85" k3="0.3" k4="0"/>`,
    `</filter></defs>`,
    `<rect width="100%" height="100%" fill="${p.color}"/>`,
    `<rect width="100%" height="100%" fill="${p.color}" filter="url(#p)"/>`,
    `</svg>`,
  ].join("");
}

const panel = css`
  position: fixed;
  right: 12px;
  top: 100px;
  z-index: 60;
  width: 300px;
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  box-shadow: 0 20px 40px -28px rgba(30, 40, 50, 0.5);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const title = css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 900;
`;

const toggle = css`
  position: fixed;
  right: 12px;
  top: 100px;
  z-index: 60;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--slate);
  background-color: #fff;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
`;

const row = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > span {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
    color: var(--slate);
  }

  & > span b {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--ink);
  }

  & input[type="range"] {
    width: 100%;
    accent-color: var(--brand);
  }
`;

const hint = css`
  font-size: 11px;
  color: var(--muted);
  line-height: 1.4;
`;

const source = css`
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--slate);
  background-color: var(--sunken);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 8px;
  max-height: 90px;
  overflow: auto;
  word-break: break-all;
  white-space: pre-wrap;
`;

const buttons = css`
  display: flex;
  gap: 8px;

  & button {
    flex: 1;
    font-family: inherit;
    font-size: 12px;
    font-weight: 800;
    color: var(--ink);
    background-color: #fff;
    border: 1px solid var(--line-strong);
    border-bottom: 2px solid var(--keycap-edge);
    border-radius: 9px;
    padding: 7px 10px;
    cursor: pointer;
  }
`;

function clearOverride() {
  const root = document.documentElement;

  root.style.backgroundColor = "";
  root.style.backgroundImage = "";
  root.style.backgroundSize = "";
  root.style.backgroundRepeat = "";
}

export function PaperTweaker() {
  const [open, setOpen] = useState(false);
  const [fileParams, setFileParams] = useState<Params>(FALLBACK);
  const [params, setParams] = useState<Params>(FALLBACK);
  // пока не тронули ползунки — показываем фон из файла, а не свой
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);

  const svg = paperSvg(params);

  useEffect(() => {
    fetch(PAPER_URL)
      .then((r) => r.text())
      .then((text) => {
        const parsed = parsePaperSvg(text);
        setFileParams(parsed);
        setParams((current) => (touched ? current : parsed));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!touched) {
      clearOverride();
      return;
    }

    const root = document.documentElement;

    root.style.backgroundColor = params.color;
    root.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    root.style.backgroundSize = `${params.tile}px ${params.tile}px`;
    root.style.backgroundRepeat = "repeat";
  }, [svg, params.tile, params.color, touched]);

  useEffect(() => clearOverride, []);

  function set<K extends keyof Params>(key: K, value: Params[K]) {
    setTouched(true);
    setParams((p) => ({ ...p, [key]: value }));
  }

  if (!open) {
    return (
      <button className={toggle} onClick={() => setOpen(true)}>
        Бумага ◄
      </button>
    );
  }

  return (
    <div className={panel}>
      <div className={title}>
        Бумага
        <button
          style={{
            marginLeft: "auto",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>

      <label className={row}>
        <span>
          Зернистость <b>{params.baseFrequency.toFixed(4)}</b>
        </span>
        <input
          type="range"
          min={0.004}
          max={0.2}
          step={0.001}
          value={params.baseFrequency}
          onChange={(e) => set("baseFrequency", Number(e.target.value))}
        />
        <span className={hint}>больше значение — мельче зерно</span>
      </label>

      <label className={row}>
        <span>
          Глубина рельефа <b>{params.surfaceScale}</b>
        </span>
        <input
          type="range"
          min={0}
          max={10}
          step={0.5}
          value={params.surfaceScale}
          onChange={(e) => set("surfaceScale", Number(e.target.value))}
        />
        <span className={hint}>контраст текстуры</span>
      </label>

      <label className={row}>
        <span>
          Слоёв шума <b>{params.numOctaves}</b>
        </span>
        <input
          type="range"
          min={1}
          max={6}
          step={1}
          value={params.numOctaves}
          onChange={(e) => set("numOctaves", Number(e.target.value))}
        />
        <span className={hint}>больше — крупные разводы поверх зерна</span>
      </label>

      <label className={row}>
        <span>
          Размер плитки <b>{params.tile}px</b>
        </span>
        <input
          type="range"
          min={200}
          max={2000}
          step={20}
          value={params.tile}
          onChange={(e) => set("tile", Number(e.target.value))}
        />
        <span className={hint}>
          на зерно не влияет; мелкая плитка заметнее повторяется
        </span>
      </label>

      <label className={row}>
        <span>
          Цвет <b>{params.color}</b>
        </span>
        <input
          type="color"
          value={params.color}
          onChange={(e) => set("color", e.target.value)}
        />
      </label>

      <div className={source}>{svg}</div>

      <div className={buttons}>
        <button
          onClick={() => {
            navigator.clipboard.writeText(svg).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          }}
        >
          {copied ? "Скопировано ✓" : "Копировать SVG"}
        </button>
        <button
          onClick={() => {
            setParams(fileParams);
            setTouched(false);
          }}
        >
          Как в файле
        </button>
      </div>

      <p className={hint}>
        {touched
          ? "Показан ваш вариант. Подобрали — вставьте SVG целиком в public/paper.svg, размер плитки подхватится сам."
          : "Показан фон из public/paper.svg. Двиньте любой ползунок, чтобы примерить свой вариант."}
      </p>
    </div>
  );
}
