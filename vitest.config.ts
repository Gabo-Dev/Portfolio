import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    pool: 'forks',
  },
  resolve: {
    alias: {
      '@app': resolve(__dirname, './src/app'),
      '@core': resolve(__dirname, './src/app/core'),
      '@pages': resolve(__dirname, './src/app/pages'),
      '@shared': resolve(__dirname, './src/app/shared'),
      '@layout': resolve(__dirname, './src/app/layout'),
    },
  },
});
