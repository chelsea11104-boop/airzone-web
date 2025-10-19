import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti "airzone-web" dengan nama repository GitHub kamu persis
export default defineConfig({
  plugins: [react()],
  base: '/airzone-web/', 
})
