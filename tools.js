const fs = require('fs');
const ora = require('ora');
const { exec } = require('child_process');
const axios = require('axios');
const { privateToken, domain } = require('./config');
const { Logger } = require('./utils/log');

// 获取命令 -- （规则：文件夹名字就是命令）
const _command = () => {
  let command = [];
  const files = fs.readdirSync(`${__dirname}/command`);
  files.forEach((item) => {
    let stat = fs.lstatSync(`${__dirname}/command/${item}`);
    if (stat.isDirectory() === true) {
      command.push(item);
    }
  });
  return command;
};

// 封装loading
const FetchLoding = (fn, message) => async (...args) => {
  const spinner = ora(message);
  spinner.start(); // 开始loading
  const r = await fn(...args);
  if (r === null) {
    spinner.stop();
    let msg = '失败';
    Logger.log(`${message}${msg.red}`);
    return null;
  } else {
    spinner.succeed(); // 结束loading
    return r;
  }
};

/**
 * 拉取gitLab 文件
 * @param {*} id  gitLab项目ID
 * @param {*} path 文件目录
 * @param {*} ref 分支（默认master）
 * @param {*} url 代码仓库域名
 */
const getProjectsFiles = async (id, path, ref = 'master') => {
  let url = `http://${domain}/api/v4/projects/${id}/repository/files/${path}?ref=${ref}&private_token=${privateToken}`;
  const { status, data } = await axios.get(url);
  if (status === 200) {
    let { content } = data;
    content = Buffer.from(content, 'base64').toString();
    return content;
  } else {
    return null;
  }
};

/**
 * 执行shell
 * @param {*} command 命令
 */
const exe = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, { maxBuffer: 1024 * 1024 * 500 }, (error, data) => {
      if (error) {
        return reject(`执行：${command} 出错: ${error.toString()}`.red);
      }
      resolve(data);
    });
  });
};

/**
 * 时间
 */
const format = () => {
  let d = new Date();
  return [
    [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-'),
    [d.getHours(), d.getMinutes(), d.getSeconds()].join(':'),
  ].join('&');
};

module.exports = {
  _command,
  FetchLoding,
  getProjectsFiles,
  exe,
  format,
};
