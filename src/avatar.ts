import { AvatarShape, avatarColors, avatarShapes } from "./config.ts";
import { PlayerAvatar } from "./types.ts";

function isShape(value: unknown): value is AvatarShape {
  return avatarShapes.includes(value as AvatarShape);
}

// у игроков, созданных до аватаров, поля нет: выдаём стабильный вариант по id,
// чтобы человечек не прыгал по цветам между перерисовками
function fallbackAvatar(seed: string): PlayerAvatar {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  return {
    shape: avatarShapes[hash % avatarShapes.length],
    color: avatarColors[(hash >> 8) % avatarColors.length],
  };
}

export function randomAvatar(): PlayerAvatar {
  return {
    shape: avatarShapes[Math.floor(Math.random() * avatarShapes.length)],
    color: avatarColors[Math.floor(Math.random() * avatarColors.length)],
  };
}

export function parseAvatar(raw: unknown, seed: string): PlayerAvatar {
  if (raw && typeof raw === "object") {
    const { shape, color } = raw as Partial<PlayerAvatar>;

    if (isShape(shape) && typeof color === "string" && color) {
      return { shape, color };
    }
  }

  return fallbackAvatar(seed);
}
