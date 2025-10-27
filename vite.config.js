import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5001'
    }
  },
  plugins: [
    tailwindcss(),
    react()],
    base: process.env.VITE_BASE_PATH || "/flight_booking_system"
})
