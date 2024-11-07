import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./Travel-Tales-Front-end/travel-tales",
  plugins: [react()],
})
