/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

import { execa } from 'execa';
import type { Options } from './types';

export async function uninstallPackage(names: string | string[], options: Options = {}) {
  if (!Array.isArray(names)) {
    names = [names];
  }

  if (!names.length) {
    return Promise.resolve();
  }

  const args = options.additionalArgs || [];

  return execa(
    'nun',
    [
      options.dev ? '-D' : '',
      ...args,
      ...names
    ].filter(Boolean),
    {
      stdio: options.silent ? 'ignore' : 'inherit',
      cwd: options.cwd
    }
  );
}
