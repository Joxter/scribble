// export const DEMO_ID = "f259a402-be81-4806-ba5b-86a4814fb9b1";

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

export const smoothConf = {
  simulatePressure: false,
  smoothing: 1, // 0.01 +0.99
  thinning: 0.1, // -0.99 +0.99
  streamline: 0, // 0.01 +0.99
  easing: easingFunctions.linear,
};
