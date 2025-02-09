import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' folder
    // You can add other optimizations like minification or CSS splitting here
  },
  server: {
    // Vite's dev server setup (usually for local dev, can leave as default for most cases)
    port: 3000,
    open: true,  // Automatically open the app in the browser when running locally
  }
})
