import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const isVercel = process.env.VERCEL === '1';
  return {
    plugins: [react()],
    base: isVercel ? '/' : '/oppo-widget-site/',
    server: {
      port: 5173,
    },
  };
});