import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://makaiabootcamp.github.io/Turistea-project-frontend-7/",
  plugins: [react()],
})