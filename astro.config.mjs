import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

// https://astro.build/config
export default defineConfig({
  site: "https://shader-cubicle.yend.dev",
  trailingSlash: "always",
  vite: {
    plugins: [glsl()],
  },
});
