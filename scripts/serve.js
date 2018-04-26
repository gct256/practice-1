const path = require('path');
const browserSync = require('browser-sync');

const utils = require('./utils');

const distDir = path.resolve(path.dirname(__dirname), 'dist');

async function serve(rootDir = distDir) {
  return new Promise((resolve, reject) => {
    const bs = browserSync.create();
    bs.init(
      {
        server: rootDir,
        files: path.join(rootDir, '**', '*.*'),
        open: false,
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
          utils.separator();
        }
      },
    );
    bs.emitter.on('browser:reload', () => {
      utils.separator();
    });
  });
}

module.exports = serve;

if (require.main === module) {
  utils.separator();
  serve().catch(er => utils.error(er));
}
