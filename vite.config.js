import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: "production"
    }
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "Widget",
      fileName: (format) => `widget.${format}.js`,
    },
    target: "esnext",
  }
})
