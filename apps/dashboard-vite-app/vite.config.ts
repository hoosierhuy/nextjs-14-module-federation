/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/dashboard-vite-app',
  base: '/dashboard',
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: 'dashboard-app',
      remotes: {
        'shared-app': 'http://localhost:4300/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'jotai'],
    }),
  ],

  build: {
    outDir: '../../dist/apps/dashboard-vite-app',
    modulePreload: false,
    target: 'esnext',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
