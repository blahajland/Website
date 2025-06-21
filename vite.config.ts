import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/blahaj': {
        target: 'https://assets.blahaj.land',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/blahaj/, '')
      },
      '/api/opencollective': {
        target: 'https://api.opencollective.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/opencollective/, '')
      }
    }
  }
})
