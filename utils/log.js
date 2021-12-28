const Logger = {
  log(...args) {
    // eslint-disable-next-line
    console.log(...args);
  },

  warn(...args) {
    // eslint-disable-next-line
    console.warn(...args);
  },

  error(...args) {
    // eslint-disable-next-line
    console.error(...args);
  }
};

module.exports = {
  Logger
};
