import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@images': '/src/images',
      '@configs': '/src/configs',
      '@util': '/src/util',
    }
  }
})
