const path = require('path');

// CWD is the consumer path
const cwd = process.cwd();

const foremanPath = path.join(cwd, '../foreman');
const vendorCorePath = path.resolve(
  cwd,
  './node_modules/@theforeman/vendor-core/'
);
const tfmStoriesPath = path.resolve(__dirname, '../../../');

const cwdModulesPath = path.resolve(cwd, './node_modules');
const foremanModulesPath = path.resolve(foremanPath, './node_modules');
const tfmStoriesModulesPath = path.resolve(tfmStoriesPath, './node_modules');
const vendorCoreModulesPath = path.resolve(vendorCorePath, './node_modules');

const cwdWebpack = path.resolve(cwd, 'webpack');

const foremanReactPath = path.join(
  foremanPath,
  './webpack/assets/javascripts/react_app'
);

module.exports = {
  cwd,
  cwdWebpack,
  foremanPath,
  foremanReactPath,
  vendorCorePath,
  tfmStoriesPath,
  cwdModulesPath,
  foremanModulesPath,
  tfmStoriesModulesPath,
  vendorCoreModulesPath,
};
