import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astro/tailwind'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind()]
});
