import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import { run } from 'vite-plugin-run'
import { resolve } from 'node:path'
import { lactPreBuild } from './vendor/msamgan/lact/resources/methods';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        run([
            {
                name: 'lact',
                run: ['php', 'artisan', 'lact:run'],
                pattern: ['routes/**/*.php', 'app/**/Http/Controllers/**/*.php'],
            },
        ]),
        lactPreBuild(),
    ],
    resolve: {
        alias: {
            '@actions': resolve(__dirname, 'vendor/msamgan/lact/resources/action'),
        },
    },
})
