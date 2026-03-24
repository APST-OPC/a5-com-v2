import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ hostname: "https://localhost:5173/", readable: true }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "public/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
    imagetools(),
  ],
  assetsInclude: ["**/.svg"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: true,
  },
});
