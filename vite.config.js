import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{ts,js,tsx}'
    })
  ],
  base: '/typescript-starter/',
  root: 'src',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  }
});
