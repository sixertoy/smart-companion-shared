/* eslint
  max-len: 0,
  no-console: 0 */
const colorize = require('./colorize');

module.exports = ({
  debug: (message, target = '') => {
    const msg = `${colorize(`${target ? `${target} ` : ''}`, 'grey')}${colorize('info ', 'blue')}${message}`;
    return console.log(msg);
  },
  error: (message, target = '') => {
    const msg = `${colorize(`${target ? `${target} ` : ''}`, 'grey')}${colorize('error ', 'red')}${message}`;
    return console.log(msg);
  },
  warn: (message, target = '') => {
    const msg = `${colorize(`${target ? `${target} ` : ''}`, 'grey')}${colorize('warning ', 'yellow')}${message}`;
    return console.log(msg);
  }
});
