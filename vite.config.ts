import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@app': fileURLToPath(new URL('./app', import.meta.url)),
      '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
      '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
      '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
      '@shared': fileURLToPath(new URL('./shared', import.meta.url))
    }
  }
});
