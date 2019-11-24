/* eslint-disable global-require, import/no-dynamic-require */

const path = require('path');

const loadUserConfigFile = filename => {
  const projectRoot = process.cwd();

  const filepath = path.join(projectRoot, filename);

  return require(filepath);
};

module.exports = loadUserConfigFile;
