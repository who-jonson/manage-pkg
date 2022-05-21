# manage-pkg

<p>
  <a href="https://www.npmjs.com/package/@whoj/manage-pkg">
    <img src="https://badgen.net/npm/v/@whoj/manage-pkg?icon=npm&color=green&label=" alt="Version">
  </a>
  <a href="#">
    <img src="https://badgen.net/npm/types/@whoj/manage-pkg?color=blue&icon=typescript&label=" alt="Typings">
  </a>
  <a href="https://github.com/who-jonson/manage-pkg">
    <img src="https://badgen.net/github/checks/node-formidable/node-formidable/master/macos?icon=github&label=" alt="Linting Status">
  </a>
  <a href="https://github.com/who-jonson/manage-pkg/blob/master/LICENSE">
    <img src="https://badgen.net/npm/license/@whoj/manage-pkg" alt="License">
  </a>
</p>

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
