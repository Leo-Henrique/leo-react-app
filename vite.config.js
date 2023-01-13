import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";

const viteSvgrConfigs = { exportAsDefault: true };

export default defineConfig({
    plugins: [
		react(), 
		viteSvgr(viteSvgrConfigs)
	]
});
