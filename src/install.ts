/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

import { execa } from 'execa';
import type { Options } from './types';
import { checkPackageStatus } from './check';

function mapAsync<T, U>(array: T[], callbackFn: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
  return Promise.all(array.map(callbackFn));
}

async function filterAsync<T>(array: T[], callbackFn: (value: T, index: number, array: T[]) => Promise<any>): Promise<T[]> {
  const filterMap = await mapAsync(array, callbackFn);
  return array.filter((value, index) => filterMap[index]);
}

export async function installPackage(names: string | string[], options: Options = {}) {
  if (!Array.isArray(names)) {
    names = [names];
  }

  const nNames = await filterAsync(names, async n => !(await checkPackageStatus(n)));

  if (!nNames.length) {
    if (!options.silent) {
      console.log('Nothing to install');
    }
    return Promise.resolve();
  }

  const args = options.additionalArgs || [];

  return execa(
    'ni',
    [
      options.dev ? '-D' : '',
      ...args,
      ...nNames
    ].filter(Boolean),
    {
      stdio: options.silent ? 'ignore' : 'inherit',
      cwd: options.cwd
    }
  );
}
