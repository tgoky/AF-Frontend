import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      $lib: resolve('./src/lib'),
    },
  },
};
