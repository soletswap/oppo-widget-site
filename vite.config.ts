import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/oppo-widget-site/',
  server: {
    port: 5173
  }
});