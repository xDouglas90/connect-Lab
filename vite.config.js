import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@atoms': path.resolve(__dirname, './src/components/atoms/index.js'),
      '@molecules': path.resolve(
        __dirname,
        './src/components/molecules/index.js'
      ),
      '@organisms': path.resolve(
        __dirname,
        './src/components/organisms/index.js'
      ),
      '@pages': path.resolve(__dirname, './src/components/pages/index.js'),
      '@templates': path.resolve(
        __dirname,
        './src/components/templates/index.js'
      ),
      '@fonts': path.resolve(__dirname, './src/assets/fonts/index.js'),
      '@images': path.resolve(__dirname, './src/assets/images/index.js'),
      '@icons': path.resolve(__dirname, './src/assets/icons/index.js'),
      '@styles': path.resolve(__dirname, './src/styles/index.js'),
      '@themes': path.resolve(__dirname, './src/styles/themes/index.js'),
      '@hooks': path.resolve(__dirname, './src/hooks/index.js'),
      '@service': path.resolve(__dirname, './src/service/index.js'),
      '@utils': path.resolve(__dirname, './src/utils/index.js'),
      '@router': path.resolve(__dirname, './src/router/index.js'),
      '@contexts': path.resolve(__dirname, './src/contexts/index.js'),
    },
  },
  plugins: [react(), eslint()],
  server: {
    port: 4000,
    host: true,
  },
});
