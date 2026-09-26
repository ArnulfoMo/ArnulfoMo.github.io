import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // El repositorio de usuario se publica desde https://arnulfomo.github.io/.
  base: '/',
  plugins: [react(), tailwindcss()],
})
