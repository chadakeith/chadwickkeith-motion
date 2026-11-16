import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://chadakeith.github.io",
  base: "/chadwickkeith-motion",
  trailingSlash: "ignore",
  build: {
    format: "file",
  },
});
