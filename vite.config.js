import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensures '@' points to 'src'
    },
  },
  build: {
    outDir: "dist", // Default output directory for Vite builds
  },
  server: {
    open: true, // Opens the app in the browser when running locally
  },
});
