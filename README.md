### 1. 目录说明

```text
├── command
│   ├── build
│   ├── compressImg
│   ├── demo
│   ├── help
│   ├── init
│   ├── install
│   ├── lint
│   ├── push
│   ├── update
│   └── version
├── deps
├── rules
└── utils
```

其中

1. `command/` 目录中为`ipalfish-cli`命令，命令会按照文件名命名解析，命令命名尽量使用 **小写单个单词**。
2. `rules/` 目录为工具依赖的规则文件，如：`eslint.js`、`.eslintignore` 等文件。
3. `utils/` 为函数 `ipalfish-cli` 源码中依赖的函数库。
4. `deps/` 为 `ipalfish-cli` 命令中依赖的三方插件及实现。

### 2. 命令扩展

每个命令的相关文件写入 `command/` 下的单独的文件夹内,   
入口文件统一为 `index.js`,   
入口函数为 `main` 函数，接收传入的参数。  
命令别名为 `alias` 属性，类型为字符串。

### 3. 如何本地调式

首先进入 ipalfish-cli 本地的项目目录

1. 创建全局软链

```bash
ln -s `pwd`/index.js /usr/local/bin/ipalfish-cli
```

2. 修改 index.js 文件执行权限

```bash
chmod 755 index.js
```

