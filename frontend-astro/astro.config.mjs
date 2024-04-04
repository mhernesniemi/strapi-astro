import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  build: {
    format: "file",
  },
  integrations: [react(), tailwind(), pagefind(), db()],
});
