import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  build: {},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
