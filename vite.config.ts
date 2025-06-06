import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
  server: {
    port: 3000,
    open: true, // Abre el navegador al iniciar
  },

  build: {
    minify: 'terser',
    terserOptions: {
      compress: { 
        drop_console: true,
        pure_funcs: ['console.info'],
      }, // Ejemplo: eliminar console.log
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },
})