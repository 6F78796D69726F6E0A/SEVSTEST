import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://www.sevs.com.au',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] }
});
