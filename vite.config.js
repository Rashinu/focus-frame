import { defineConfig } from "vite";
import inject from "vite-plugin-html-inject";

export default defineConfig({
    base: "/focus-frame/", // 👈 BUNU EKLE
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
