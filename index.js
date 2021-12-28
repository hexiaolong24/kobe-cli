#!/usr/bin/env node

// 终端颜色配置
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const argv = require('minimist')(process.argv.slice(2));
require('./deps/colors');
const { _command } = require('./tools');
const { Logger } = require('./utils');

// 命令列表
const commanderList = _command();

// 命令注册器
const commanderRegister = {};

// 注册命令
function loadSubModule() {
  commanderList.forEach((moduleName, index) => {
    try {
      fs.statSync(path.join(`${__dirname}/command`, moduleName)); // 未找到相关index会进入catch
      const subModule = require(`./command/${moduleName}`);

      // 子模块必须有 main 入口函数
      if (typeof subModule.main === 'function') {
        commanderRegister[moduleName] = subModule;
        // 查找是否有别名，有的则加上
        if (subModule.alias) {
          commanderRegister[subModule.alias] = subModule;
        }
      }
    } catch (error) {
      Logger.log(error);
    }
  });
}

function invokeCommand(name = 'help', options = {}) {
  const subM = commanderRegister[name];
  if (subM) {
    subM['main'](options);
  } else {
    inquirer
      .prompt([
        {
          type: 'list',
          message: `未能正确执行 ${name.red} ，您可执行以下命令`,
          name: 'cmd',
          choices: commanderList,
        },
      ])
      .then((res) => {
        let cmd = res.cmd.match(/^\w+/)[0];
        let selectM = commanderRegister[cmd];
        selectM['main'](options)
          .then((e) => {})
          .catch((err) => {
            Logger.log(err);
          });
      });
  }
}

loadSubModule();

const command = argv._[0];

// 调用命令
invokeCommand(command, argv);
