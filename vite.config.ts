// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      entryRoot: path.resolve(__dirname, 'src'),
      include: ['src'],
      exclude: ['src/main.tsx', 'src/App.tsx'],
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'react-relic',
      fileName: (format) => `react-relic.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      // Don't bundle React and ReactDOM, they are peer dependencies
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: [
              'src/**/*.d.ts',
              'src/App.*',
              'src/main.tsx',
              'index.css',
              'src/assets/**/*.svg',
            ],
          })
          .map((file) => {
            return [
              path.relative(
                'src',
                file.slice(0, file.length - path.extname(file).length)
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ]
          })
      ),
    },
  },
})
