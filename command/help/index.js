const { Logger } = require('../../utils');
const verModule = require('../version');

const helps = {
  _: `
  用法 Usage:
    ${'ipalfish-cli [command] [options]'.bold}

  命令 Commands:
    h, help         帮助文档
    ytj             YApi to js，通过YApi生成api文件

  具体命令可使用 ${'ipalfish-cli help [command]'.brightWhite} 查看.
  `,

  ytj: `
  用法 Usage:
    ${'ipalfish-cli ytj [options]'.bold}

  说明:
  YApi to js，通过YApi生成api文件

  参数 Options:
    --token       YApi项目token
    --name        当前项目接口分类名称
    --path        文件目录，默认为 ./api.js
  `,
};

module.exports = {
  main(args) {
    let command = args._[1];
    let helpText = helps._;
    if (helps[command]) {
      helpText = helps[command];
    }
    Logger.log(`${helpText}`);
    verModule.main();
  },
  alias: 'h'
};
