/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

import type { Options } from 'tsup';

export default <Options>{
  name: 'manage-pkg',
  banner: {
    js: '/* \n * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson> \n */'
  },
  clean: true,
  dts: true,
  entry: [
    './src/index.ts'
  ],
  format: ['cjs', 'esm'],
  platform: 'node',
  splitting: false
};
