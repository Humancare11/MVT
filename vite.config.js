import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    // Bundle visualizer: generates stats.html in dist for analysis
    visualizer({ filename: 'dist/bundle-stats.html', open: false }),
  ],
  build: {
    // Use default chunking to remain compatible with the configured bundler
    // Custom manualChunks removed because `rolldown-vite` expects a function.
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
