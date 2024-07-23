import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

// Determine the base URL based on the environment
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/The-Orange-Collection/' : '/',
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        theme_color: "#ffffff" // Add your theme color here
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
