import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {run} from "vite-plugin-run";
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        run([
            {
                name: "lact",
                run: ["php", "artisan", "lact:build-actions"],
                pattern: ["routes/**/*.php"],
            },
        ]),
    ],
    resolve: {
        alias: {
            '@actions': resolve(__dirname, 'vendor/msamgan/lact/resources/action'),
        },
    },
});
