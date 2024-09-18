/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/shared-app',

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
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
    federation({
      name: 'shared-app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthenticatedTemplate': './src/components/AuthenticatedTemplate.tsx',
        './UnauthenticatedTemplate':
          './src/components/UnauthenticatedTemplate.tsx',
        './useAuthentication': './src/hooks/useAuthentication.ts',
      },
      shared: ['react', 'react-dom', 'jotai'],
    }),
  ],
  build: {
    outDir: '../../dist/apps/shared-app',
    target: 'esnext',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    modulePreload: false,
  },
});
