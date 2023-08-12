import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export const commonConfig = defineConfig({
  plugins: [
    react(),
  ],
  envDir: path.resolve(process.cwd(), './src/shared/config/env'),
  envPrefix: 'APP_',
  resolve: {
    alias: {
      app: path.resolve(process.cwd(), './src/app'),
      pages: path.resolve(process.cwd(), './src/pages'),
      features: path.resolve(process.cwd(), './src/features'),
      shared: path.resolve(process.cwd(), './src/shared'),
      widgets: path.resolve(process.cwd(), './src/widgets'),
      entities: path.resolve(process.cwd(), './src/entities'),
    },
  },
});
