/* eslint no-console: off */

const utils = {
  separator() {
    console.log('');
    console.log('-'.repeat(79));
    console.log('');
  },

  log(...values) {
    console.log(...values);
  },

  error(...values) {
    utils.separator();
    console.error(...values);
    utils.separator();
  },
};

module.exports = utils;
