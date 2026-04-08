import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

let base = process.env?.CI
  ? '/comfy-web-utils/'
  : '/';

export default defineConfig({
  base: base,
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 50000000
      },
      manifest: {
        "theme_color": "#0F172A",
        "background_color": "#f5f8fa",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Comfy Prompt Reader - A prompt extractor for ComfyUI",
        "short_name": "Comfy Prompt Reader",
        "description": "A prompt extractor for ComfyUI",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
