import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'app.html',
      precompress: false,
      strict: true
    }),
    csp: {
      mode: 'hash',
      directives: {
        'script-src': ['self', 'wasm-unsafe-eval'],
        'object-src': ['self']
      }
    },
    appDir: 'app',
    files: {
      assets: 'static',
      lib: 'src/lib',
      routes: 'src/routes'
    },
    prerender: {
      entries: ['/popup', '/sidepanel'],
      handleMissingId: 'ignore',
      crawl: false
    }
  }
}; 