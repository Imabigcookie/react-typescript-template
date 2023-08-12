import { defineConfig, mergeConfig } from 'vite';

import { commonConfig } from './common.config';

const productionConfig = defineConfig({
  build: {
    outDir: 'build',
  },
  css: {
    modules: {
      generateScopedName: '[hash:base64:3]',
    },
  },
});

export default mergeConfig(commonConfig, productionConfig);
