import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    assetsDir: "assets",    // FORCE assets directory
  },
  server: {
    host: true,
    allowedHosts: [
      'localhost',
      'alive-duck-wildly.ngrok-free.app',
      'horsmen.com',
      'www.horsmen.com'
    ]
  }
})
