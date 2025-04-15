import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import { run } from 'vite-plugin-run'
import { resolve } from 'node:path'
import { execSync } from 'node:child_process'

function preBuildPlugin() {
    return {
        name: 'pre-build-plugin',
        async buildStart() {
            execSync('php artisan lact:build-actions', { stdio: 'inherit' })
        },
    }
}

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
                run: ['php', 'artisan', 'lact:build-actions'],
                pattern: ['routes/**/*.php', 'app/**/Http/Controllers/**/*.php'],
            },
        ]),
        preBuildPlugin(),
    ],
    resolve: {
        alias: {
            '@actions': resolve(__dirname, 'vendor/msamgan/lact/resources/action'),
        },
    },
})
