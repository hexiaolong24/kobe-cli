const LogModule = require('./log');
const ConfigModule = require('./config');
const YtjModule = require('./ytj');

module.exports = {
  ...LogModule,
  ...YtjModule,
  ...ConfigModule,
};
