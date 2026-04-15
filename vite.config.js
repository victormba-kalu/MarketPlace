import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/MarketPlace/', // ← This is the most important line
  darkMode: 'class',
});
