import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  site: "https://carmel.empire-il.co.il",
  experimental: {
    integrations: true
  },
  integrations: [tailwind(), robotsTxt(), react(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});