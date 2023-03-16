import * as fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'tsup';
import { dependencies, name, version } from './package.json';

export default defineConfig({
  name: 'manage-pkg',
  globalName: 'ManagePkg',
  banner: {
    js: `/**
   * @module ${name}
   * @version  ${version}
   * @copyright ${new Date().getFullYear()} Jonson B.. All rights reserved.
   */
  `
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
  external: [
    ...Object.keys(dependencies)
  ],
  format: ['cjs', 'esm'],
  target: 'node16',
  splitting: false,
  metafile: true,
  tsconfig: './tsconfig.lib.json',
  onSuccess: async () => {
    let content = fs.readFileSync(resolve('./dist/index.mjs'), 'utf8');
    content = content
      .replace(/from "execa"/, 'from "https://cdn.jsdelivr.net/npm/execa@7.1.1/+esm"')
      .replace(/from "@antfu\/ni"/, 'from "https://cdn.jsdelivr.net/npm/@antfu/ni@0.20.0/+esm"');
    fs.writeFileSync(resolve('./dist/index.esm.js'), content, 'utf8');
  }
});
