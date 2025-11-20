import { useUnit } from "effector-react";
import {
  $debugMode,
  debugModeToggled,
  renderModeChanged,
} from "../model/game.model.ts";
import {
  $renderMode,
  $smoothConf,
  setSmoothConf,
} from "../model/game-new.model.ts";

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

export function DrawParams() {
  const smoothConf = useUnit($smoothConf);
  const renderMode = useUnit($renderMode);
  const debugMode = useUnit($debugMode);

  const handleSmoothingChange = (value: number) => {
    setSmoothConf({ ...smoothConf, smoothing: value });
  };

  const handleThinningChange = (value: number) => {
    setSmoothConf({ ...smoothConf, thinning: value });
  };

  const handleStreamlineChange = (value: number) => {
    setSmoothConf({ ...smoothConf, streamline: value });
  };

  const handleEasingChange = (easingKey: keyof typeof easingFunctions) => {
    setSmoothConf({ ...smoothConf, easing: easingFunctions[easingKey] });
  };

  const currentEasingKey =
    (Object.keys(easingFunctions).find(
      (key) =>
        easingFunctions[key as keyof typeof easingFunctions] ===
        smoothConf.easing,
    ) as keyof typeof easingFunctions) || "linear";

  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        alignContent: "start",
      }}
    >
      <div style={{ display: "flex" }}>
        <label htmlFor="smoothing" style={{ width: "150px" }}>
          Smoothing: {smoothConf.smoothing?.toFixed(2)}
        </label>
        <input
          id="smoothing"
          type="range"
          min="0.01"
          max="1"
          step="0.01"
          value={smoothConf.smoothing}
          onChange={(e) => handleSmoothingChange(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="thinning" style={{ width: "150px" }}>
          Thinning: {smoothConf.thinning?.toFixed(2)}
        </label>
        <input
          id="thinning"
          type="range"
          min="-1"
          max="1"
          step="0.1"
          value={smoothConf.thinning}
          onChange={(e) => handleThinningChange(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="streamline" style={{ width: "150px" }}>
          Streamline: {smoothConf.streamline?.toFixed(2)}
        </label>
        <input
          id="streamline"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={smoothConf.streamline}
          onChange={(e) => handleStreamlineChange(Number(e.target.value))}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <label htmlFor="easingType" style={{ width: "150px" }}>
          Easing:
        </label>
        <select
          id="easingType"
          value={currentEasingKey}
          onChange={(e) =>
            handleEasingChange(e.target.value as keyof typeof easingFunctions)
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
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: "14px" }}>Render:</div>
        <div>
          {(["normal", "polyline", "tldraw"] as const).map((mode) => (
            <label
              key={mode}
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <input
                type="radio"
                name="renderMode"
                value={mode}
                checked={renderMode === mode}
                onChange={(e) =>
                  renderModeChanged(e.target.value as typeof mode)
                }
              />
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label style={{ fontSize: "12px" }}>
          <input
            type="checkbox"
            checked={debugMode}
            onChange={(e) => debugModeToggled(e.target.checked)}
            style={{ marginRight: "6px" }}
          />
          Debug overlay
        </label>
      </div>
    </div>
  );
}
