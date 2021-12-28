const { version } = require('../../package.json');
const { Logger } = require('../../utils');

const main = () => {
  Logger.log(`v${version}`);
};

module.exports = {
  main,
  alias: 'v'
};
