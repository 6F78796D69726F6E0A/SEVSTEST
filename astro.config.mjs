import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://6F78796D69726F6E0A.github.io',
  base: '/SEVSTEST',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] }
});
