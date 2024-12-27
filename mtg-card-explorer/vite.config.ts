import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist", // Specificera output-katalogen
		sourcemap: true, // Lägg till för att underlätta felsökning
	},
});
