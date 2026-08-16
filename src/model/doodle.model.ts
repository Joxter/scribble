import { createEvent, createStore } from "effector";

const STORAGE_KEY = "scribble:background-doodle";

function readEnabled() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

function saveEnabled(enabled: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  } catch {
    // приватный режим — переживём без запоминания
  }
}

export const doodleToggled = createEvent();

export const $doodleEnabled = createStore(readEnabled()).on(
  doodleToggled,
  (enabled) => !enabled,
);

$doodleEnabled.updates.watch(saveEnabled);
