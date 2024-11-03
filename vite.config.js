import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/luxnaovaEcommerce/', // This must match your GitHub repo name exactly
  build: {
    outDir: 'dist', // Ensure the output folder is 'dist'
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js', // This should create 'index.js' in 'assets'
        assetFileNames: 'assets/[name][extname]', // Ensures 'index.css' is in 'assets'
      },
    },
  },
});
