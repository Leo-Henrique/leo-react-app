import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), viteSvgr({ exportAsDefault: true })],
    base: "./",
});
