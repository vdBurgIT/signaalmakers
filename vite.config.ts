import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Add babel plugins if needed
        ],
      },
      jsxRuntime: 'automatic',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 512,
      deleteOriginFile: false,
      compressionOptions: { level: 9 },
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 512,
      deleteOriginFile: false,
      compressionOptions: { level: 11 },
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', 'brandmark.png'],
      injectRegister: 'auto',
      devOptions: {
        enabled: false,
      },
      manifest: {
        name: 'SIGNAALMAKERS - ICT & Netwerk Oplossingen',
        short_name: 'SIGNAALMAKERS',
        description: 'Professionele ICT-diensten: WiFi-netwerken, databekabeling en audio-installaties voor bedrijven en particulieren',
        theme_color: '#0E243A',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        orientation: 'any',
        categories: ['business', 'productivity'],
        lang: 'nl-NL',
        icons: [
          {
            src: '/brandmark.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/brandmark.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}'],
        navigateFallback: null,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 90,
              },
            },
          },
          {
            urlPattern: /\.(?:woff|woff2|ttf|otf|eot)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'font-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
          {
            urlPattern: /^https:\/\/www\.googletagmanager\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'gtm-cache',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    esbuildOptions: {
      target: 'esnext',
      legalComments: 'none',
    },
  },
  base: '/',

  build: {
    // Production optimizations
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ecma: 2020,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            if (id.includes('react-router')) {
              return 'react-router';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-helmet-async')) {
              return 'helmet';
            }
            return 'vendor';
          }
          if (id.includes('/pages/services/')) {
            return 'services';
          }
          if (id.includes('/pages/')) {
            return 'pages';
          }
          if (id.includes('/components/')) {
            return 'components';
          }
        },
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    cssMinify: 'lightningcss',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true,
    },
  },

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