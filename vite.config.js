import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin() // Injecte le CSS dans le JS
  ],
  build: {
    rollupOptions: {
      output: {
        // On force le nom du fichier de sortie
        entryFileNames: `cmp-bundle.js`,
        chunkFileNames: `cmp-bundle.js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
