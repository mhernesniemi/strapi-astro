import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind(), react()],
  output: "hybrid",
  adapter: cloudflare(),
  site: "https://strapi-astro.pages.dev/",
});
