import { defineConfig } from "vite";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  base: "/scribble",
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __BUILD_TIMESTAMP__: JSON.stringify(Date.now()),
  },
  test: {
    globals: true,
  },
});
