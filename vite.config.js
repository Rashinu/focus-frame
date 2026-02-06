import { defineConfig } from "vite";
import inject from "vite-plugin-html-inject";

export default defineConfig({
    base: "/focus-frame/", // Correct base path for GitHub Pages
    plugins: [
        inject()
    ],
    root: "./",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: "index.html",
            },
        },
    },
});
