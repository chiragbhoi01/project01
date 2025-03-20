import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false, // Disable sourcemaps for production build
  },
  server: {
    sourcemap: false, // Optionally disable source maps for dev as well
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});
