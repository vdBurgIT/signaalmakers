import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  base: '/', // Voor custom domain signaalmakers.nl

  server: {
    host: true,              // bind op 0.0.0.0 (extern bereikbaar op LAN)
    port: 3001,              // kies je poort voor deze site
    allowedHosts: ['dev.kevinfroger.nl'], // je publieke host via tunnel
    hmr: {
      host: 'dev.kevinfroger.nl', // HMR via je HTTPS domein
      clientPort: 443,
      protocol: 'wss',
    },
    origin: 'https://dev.kevinfroger.nl',
    cors: true,
    headers: { 'Cache-Control': 'no-cache' },
    strictPort: true,
  },
});
6