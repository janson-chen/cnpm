# cnpmjs.org: Private npm registry and web for Company

So `cnpm` is meaning: **Company npm**.


## Usage

use our npm client [cnpm](https://github.com/cnpm/cnpm)(More suitable with cnpmjs.org and gzip support), you can get our client through npm:

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

Or you can alias NPM to use it:

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/mirrors/node \
--userconfig=$HOME/.cnpmrc"

#Or alias it in .bashrc or .zshrc
$ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \
  --cache=$HOME/.npm/.cache/cnpm \
  --disturl=https://npm.taobao.org/mirrors/node \
  --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc
```

### install

Install package from [r.cnpmjs.org](//r.cnpmjs.org). When installing a package or version does not exist, it will try to install from the official registry([registry.npmjs.org](https://registry.npmjs.org)), and sync this package to cnpm in the backend.

```bash
$ cnpm install [name]
```

### sync

Only `cnpm` cli has this command. Meaning sync package from source npm.

```bash
$ cnpm sync connect
```

sync package on web: [sync/connect](/sync/connect)

```bash
$ open http://registry.npm.taobao.org/sync/connect
```

### publish / unpublish

Only `admin` user can publish / unpublish package to private registry.

```bash
$ cnpm publish [name]
$ cnpm unpublish [name]
```

### Other commands

Support all the other npm commands. e.g.:

```bash
$ cnpm info cnpm
```
