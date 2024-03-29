/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

import { execaSync } from 'execa';
import { detect } from '@antfu/ni';
import type { Options } from './types';

export async function detectAgent(cwd: string = process.cwd()) {
  return await detect({ autoInstall: true, cwd }) || 'npm';
}

export async function checkPackageStatus(name: string, opts: Options = {}): Promise<string | boolean> {
  const cwd = opts?.cwd || process.cwd();
  const agent = await detectAgent(cwd);
  const args = opts.additionalArgs || [];

  const { stderr, stdout } = await execaSync(
    agent,
    [
      'ls',
      ...(agent === 'yarn' ? ['--pattern', name] : [name]),
      opts.dev ? '-D' : '',
      '--json',
      ...args
    ].filter(Boolean),
    {
      cwd,
      buffer: false,
      serialization: 'advanced',
      stdio: 'pipe'
    }
  );

  if (stderr?.length) {
    throw new Error(stderr);
  }

  let output = JSON.parse(stdout);
  output = Array.isArray(output) ? output[0] : output;
  output = { ...(output?.dependencies || {}), ...(output?.devDependencies || {}) };

  for (const pkg in output) {
    if (pkg === name) {
      return output[pkg].version;
    }
  }
  return false;
}
