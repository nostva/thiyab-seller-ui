import { lingui } from '@lingui/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      autoCodeSplitting: true,
      routesDirectory: path.join(__dirname, 'src/app/routes'),
      generatedRouteTree: path.join(__dirname, 'src/app/routeTree.gen.ts'),
    }),
    react({
      babel: {
        plugins: ['@lingui/babel-plugin-lingui-macro'],
      },
    }),
    lingui(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/lib'),
    },
  },
})
