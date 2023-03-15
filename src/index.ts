/*
 * Copyright (c) 2022. Jonson B. <https://github.com/who-jonson>
 */

export * from './check';
export * from './install';
export * from './uninstall';

export interface Options {
  cwd?: string;
  dev?: boolean;
  silent?: boolean;
  additionalArgs?: string[];
}
