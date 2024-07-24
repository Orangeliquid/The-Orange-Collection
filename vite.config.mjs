import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        theme_color: "#000000"
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
  },
  assetsInclude: [
    "**/*.PNG",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
  ],
  optimizeDeps: {
    include: ['@tsparticles/react', '@tsparticles/engine'],
    exclude: ['react-icons/fa'],
  },
});
