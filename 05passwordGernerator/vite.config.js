import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// Import your framework's plugin if necessary (e.g., react(), vue())

export default defineConfig({
  plugins: [
    tailwindcss(),
    // other plugins
  ],
});
