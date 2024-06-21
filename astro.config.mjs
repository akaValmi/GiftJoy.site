import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  pages: [
    {
      path: "/posts/[...slug].astro",
      component: "./src/pages/posts/[...slug].astro",
    },
  ],
});
