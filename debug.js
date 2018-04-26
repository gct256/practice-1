const utils = require('./scripts/utils');
const serve = require('./scripts/serve');
const watch = require('./scripts/watch');

async function debug() {
  utils.separator();

  await watch();

  await serve();

  utils.log('ready');
  utils.separator();
}

debug().catch(er => utils.error(er));
