import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    configFile: 'svelte.config.js',
    compilerOptions: {
      css: "external",
      cssOutputFilename: "bundle.css",
      customElement: true,
    },
  })],
  build: {
    outDir: "dist", rollupOptions: {
      output: {
        entryFileNames: "assets/bundle.js",
        assetFileNames: "assets/bundle.css"
      }
    }
  }
})
