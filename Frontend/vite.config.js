import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['axios'],  // ✅ Ensure axios is optimized
    force: true          // ✅ Force Vite to re-optimize
  }
})
