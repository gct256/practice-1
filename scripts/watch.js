const webpack = require('webpack');

const utils = require('./utils');
const config = require('../webpack.config');

async function watch() {
  return new Promise((resolve, reject) => {
    const compiler = webpack(config);
    compiler.watch(
      {
        poll: 200,
      },
      (er, stats) => {
        if (er) {
          reject(er);
        } else {
          resolve();
          utils.log(stats.toString({ colors: true }));
          utils.separator();
        }
      },
    );
  });
}

module.exports = watch;

if (require.main === module) {
  utils.separator();
  watch().catch(er => utils.error(er));
}
