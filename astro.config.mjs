import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jardineria-yanez.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
