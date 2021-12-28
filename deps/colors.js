const colors = require('colors');

colors.setTheme({
  error: ['red', 'bold'],
  success: ['green', 'bold'],
  link: ['yellow', 'underline']
});

module.exports = colors;
