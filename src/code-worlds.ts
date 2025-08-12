function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getUsername() {
  return randomFrom(adjectives) + " " + randomFrom(nouns);
}

export const nouns = [
  "cat",
  "dog",
  "sun",
  "sky",
  "tree",
  "bird",
  "fish",
  "hand",
  "foot",
  "ball",
  "star",
  "book",
  "car",
  "bed",
  "toy",
  "hat",
  "cup",
  "box",
  "map",
  "pen",
];

export const verbs = [
  "run",
  "eat",
  "see",
  "fly",
  "hop",
  "sit",
  "swim",
  "play",
  "read",
  "draw",
  "sing",
  "jump",
  "look",
  "bake",
  "kick",
  "open",
  "clap",
  "pull",
  "push",
  "walk",
];

export const adjectives = [
  "big",
  "hot",
  "red",
  "old",
  "wet",
  "new",
  "sad",
  "tall",
  "cold",
  "fat",
  "dry",
  "fun",
  "shy",
  "blue",
  "cute",
  "kind",
  "dark",
  "loud",
  "warm",
  "fast",
];
