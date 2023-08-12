import { defineConfig, mergeConfig } from 'vite';

import { commonConfig } from './common.config';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const devConfig = defineConfig({
  mode: 'development',
  server: {
    port: PORT,
    strictPort: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:3]',
    },
  },
});

export default mergeConfig(commonConfig, devConfig);
