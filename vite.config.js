import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions:{
      input: {
        Index: resolve(__dirname, 'index.html'),
        pages: resolve(__dirname, 'pages/index.html'),
      },
    },

  },
  plugins: [react()],
})
