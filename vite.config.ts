import { fileURLToPath, URL } from 'node:url';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    checker({
      // 启用 TypeScript 检查
      typescript: true,
      // vueTsc: {
      //   tsconfigPath: './tsconfig.json'
      // },
      enableBuild: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@app': fileURLToPath(new URL('./app', import.meta.url)),
      '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
      '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
      '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
      '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
    },
  },
});
