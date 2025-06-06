import { defineConfig } from 'vite'
import * as path from 'path'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components':path.resolve(__dirname, './src/components'),
      '@interfaces':path.resolve(__dirname, './src/interfaces'),
    },
  },
})