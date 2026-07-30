import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/react-router-dom|\breact\b|react-dom/.test(id)) return "vendor-react";
          if (id.includes("swiper")) return "vendor-swiper";
          if (id.includes("i18next")) return "vendor-i18n";
          if (id.includes("lucide-react") || id.includes("react-icons")) return "vendor-icons";
        },
      },
    },
  },
});
