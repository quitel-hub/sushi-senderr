import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so built files work when served from a subpath or locally
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Listen on localhost only to avoid network interface errors
    host: '127.0.0.1',
    // https: false,
    port: 5190,
    strictPort: false,
    proxy: {
      "/api": "http://127.0.0.1:3000",
    },
  },
  preview: {
    host: true,
    port: 5191,
  },
});
