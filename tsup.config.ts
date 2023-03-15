/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'manage-pkg',
  banner: {
    js: '/* \n * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson> \n */'
  },
  clean: true,
  dts: {
    compilerOptions: {
      composite: false,
      moduleResolution: 'bundler'
    }
  },
  entry: [
    './src/index.ts'
  ],
  format: ['cjs', 'esm'],
  target: 'node14',
  splitting: false,
  tsconfig: './tsconfig.lib.json',
  esbuildOptions(options) {
    options.metafile = true;
  }
});
