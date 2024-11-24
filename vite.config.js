import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $static: resolve('./src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.js'),
        contentScript: resolve(__dirname, 'src/contentScript.js')
      },
      external: [/^@sveltejs\/kit/],
    }
  },
  experimental: {
    renderBuiltUrl(filename) {
      return filename.replace(/^\//, '');
    }
  }
}); 