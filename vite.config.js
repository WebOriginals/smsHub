import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
import path from "path"

const options = {pretty: true} // FIXME: pug pretty is deprecated!
const locals = {name: "My Pug"}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => ['trix-editor'].indexOf(tag) !== -1
            }
        },
    }), pugPlugin(options, locals)],
    optimizeDeps: {
        include: [
            'nouislider',
            'wnumb',
            'trix'
        ]
    },
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url))
            '@': path.resolve(__dirname, "public/assets/")
        }
    },
    build: {
        // путь к билду
        outDir: 'dist',
        //
        sourcemap: true,
        // перед сборкой все удаляется
        emptyOutDir: true,
        // минифицировать код
        minify: "terser",

        rollupOptions: {
            output: {
                assetFileNames: '[ext]/[name][extname]',
                chunkFileNames: 'chunks/[name].[hash].js',
                entryFileNames: 'js/[name].js',
            },
        },
    }
})
