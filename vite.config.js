import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// Konfigurasi Asas Vite (Tanpa plugin pelik-pelik)
export default defineConfig({
  plugins: [react(), cloudflare()],
})