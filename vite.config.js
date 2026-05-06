import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi Asas Vite (Tanpa plugin pelik-pelik)
export default defineConfig({
  plugins: [react()],
})