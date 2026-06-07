import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, // You can choose any port that is not already in use
    strictPort: true, // Fail if the port is already in use
  },

  proxy: {
      '/api': {
        target: 'http://backend:8000',
        changeOrigin: true,
      }
    }
})