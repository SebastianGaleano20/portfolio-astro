import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
// ↓ Actualizar site con la URL real de tu deploy cuando la tengas
export default defineConfig({
  site: "https://sebastiangaleano.dev",
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
});
