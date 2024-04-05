import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true }), sitemap(), tailwind()],
  output: "hybrid",
  adapter: cloudflare(),
  site: "https://strapi-astro.pages.dev/",
});
