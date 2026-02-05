import { defineConfig } from 'vite';
import inject from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [
        inject()
    ],
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
