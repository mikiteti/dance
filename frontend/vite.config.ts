import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://localhost:8080',
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
