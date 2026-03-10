import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', 'umbrel.local'],
  },
})
