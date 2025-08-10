// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import bun from "@nurodev/astro-bun";

// https://astro.build/config
export default defineConfig({
  // adapter: node({
  //   mode: 'standalone'
  // }),
  adapter: bun(),
  output: "server",
  vite: {
      plugins: [tailwindcss()]
  },
  integrations: [react({
      include: ['**/react/*']
    },
  )]
});