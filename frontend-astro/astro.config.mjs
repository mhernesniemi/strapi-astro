import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [sitemap(), tailwind(), react(), pagefind()],
  output: "hybrid",
  adapter: cloudflare(),
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "fi",
    },
  },
});
