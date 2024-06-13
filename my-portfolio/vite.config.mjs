import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss'; // Import tailwindcss directly
import autoprefixer from 'autoprefixer'; // Import autoprefixer directly

export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      // your PWA options
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Use tailwindcss directly
        autoprefixer(), // Use autoprefixer directly
      ],
    },
  },
});
