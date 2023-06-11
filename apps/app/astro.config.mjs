import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tour-genie-turbo.vercel.app',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filer: (page) => !page.path.includes('404'),
    }),
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
});
