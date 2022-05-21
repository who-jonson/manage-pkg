# manage-pkg

[![NPM version](https://img.shields.io/npm/v/@whoj/manage-pkg?color=a1b858&label=)](https://www.npmjs.com/package/@antfu/install-pkg)

Install / Uninstall package(s) programmatically. Detect package managers automatically (`npm`, `yarn` and `pnpm`).
Skips already installed packages. Powered by [@antfu/ni](https://github.com/antfu/ni)

```bash
npm i @whoj/manage-pkg
```

### Install Package
```ts
import { installPackage } from '@whoj/manage-pkg';

await installPackage('unplugin', { dev: true });
```


### Uninstall Package
```ts
import { uninstallPackage } from '@whoj/manage-pkg';

await uninstallPackage('unplugin', { silent: true });
```


### Check if installed or not
```ts
import { checkPackageStatus } from '@whoj/manage-pkg';

// This will return false OR package's installed version number
await checkPackageStatus('unplugin');
```



## License

[MIT](./LICENSE) License © 2022 [Jonson B.](https://github.com/who-jonson)
