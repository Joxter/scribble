import React, { useEffect, useState } from "react";
import { ColorSelector } from "./drawing/ColorSelector";

type DrawingOptions = {
  size: number;
  smoothing: number;
  thinning: number;
  streamline: number;
  easing: (t: number) => number;
};

const easingFunctions = {
  cubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t: number) => t * t * t * t,
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  easeInOutQuart: (t: number) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInSine: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t: number) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t: number) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t: number) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInCirc: (t: number) => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t: number) => Math.sqrt(1 - (t - 1) * (t - 1)),
  easeInBack: (t: number) => 2.7 * t * t * t - 1.7 * t * t,
  easeOutBack: (t: number) =>
    1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2),
  elastic: (t: number) =>
    t === 0 || t === 1
      ? t
      : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI),
  bounce: (t: number) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  wave: (t: number) => 0.5 + 0.5 * Math.sin(6 * Math.PI * t),
  zigzag: (t: number) => Math.abs(((t * 8) % 2) - 1),
  step: (t: number) => Math.floor(t * 5) / 4,
  wobble: (t: number) => t + 0.3 * Math.sin(8 * Math.PI * t) * (1 - t),
  spiral: (t: number) =>
    t + 0.2 * Math.sin(16 * Math.PI * t) * Math.cos(12 * Math.PI * t),
  chaos: (t: number) =>
    t + 0.4 * (Math.random() - 0.5) * (1 - Math.abs(2 * t - 1)),
  heartbeat: (t: number) => {
    const beat = Math.sin(t * Math.PI * 12);
    return t + 0.3 * beat * Math.exp(-t * 5);
  },
  tornado: (t: number) => t * (1 + 0.5 * Math.sin(t * t * 20 * Math.PI)),
  drunk: (t: number) =>
    t + 0.2 * Math.sin(t * 15) * Math.cos(t * 23) * Math.sin(t * 7),
};

const STORAGE_KEY = "canvasSmooth-settings";

const loadSettingsFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveSettingsToStorage = (settings: any) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Silently fail if localStorage is not available
  }
};

export function DrawParams() {
  const storedSettings = loadSettingsFromStorage();
  const [color, setColor] = useState(storedSettings.color || "#000000");
  const [size, setSize] = useState(storedSettings.size || 10);
  const [smoothing, setSmoothing] = useState(storedSettings.smoothing || 0.9);
  const [thinning, setThinning] = useState(storedSettings.thinning || 0.1);
  const [streamline, setStreamline] = useState(
    storedSettings.streamline || 0.0,
  );
  const [simulatePressure, setSimulatePressure] = useState(
    storedSettings.simulatePressure || false,
  );
  const [easingType, setEasingType] = useState<keyof typeof easingFunctions>(
    storedSettings.easingType || "cubic",
  );

  useEffect(() => {
    const settings = {
      color,
      size,
      smoothing,
      thinning,
      streamline,
      simulatePressure,
      easingType,
    };
    saveSettingsToStorage(settings);
  }, [
    color,
    size,
    smoothing,
    thinning,
    streamline,
    simulatePressure,
    easingType,
  ]);

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <ColorSelector value={color} onChange={setColor} />
      <div style={{ display: "flex" }}>
        <label htmlFor="size" style={{ width: "150px" }}>
          Size: {size}
        </label>
        <input
          id="size"
          type="range"
          min="1"
          max="30"
          step="1"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="smoothing" style={{ width: "150px" }}>
          Smoothing: {smoothing.toFixed(2)}
        </label>
        <input
          id="smoothing"
          type="range"
          min="0.01"
          max="1"
          step="0.01"
          value={smoothing}
          onChange={(e) => setSmoothing(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="thinning" style={{ width: "150px" }}>
          Thinning: {thinning.toFixed(2)}
        </label>
        <input
          id="thinning"
          type="range"
          min="-1"
          max="1"
          step="0.1"
          value={thinning}
          onChange={(e) => setThinning(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="streamline" style={{ width: "150px" }}>
          Streamline: {streamline.toFixed(2)}
        </label>
        <input
          id="streamline"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={streamline}
          onChange={(e) => setStreamline(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div>
        <label htmlFor="simulatePressure">
          <input
            id="simulatePressure"
            type="checkbox"
            checked={simulatePressure}
            onChange={(e) => setSimulatePressure(e.target.checked)}
            style={{ marginRight: "8px" }}
          />
          Simulate Pressure
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="easingType" style={{ width: "150px" }}>
          Easing:
        </label>
        <select
          id="easingType"
          value={easingType}
          onChange={(e) =>
            setEasingType(e.target.value as keyof typeof easingFunctions)
          }
          style={{ marginLeft: "8px", padding: "2px 4px" }}
        >
          {Object.keys(easingFunctions).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
