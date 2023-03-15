import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: '/src/components',
      UI: '/src/UI',
      assets: '/src/assets',
      pages: '/src/pages',
    },
  },
});
