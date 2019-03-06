const { createModuleKey } = require('./lib/helpers');
const vendorModules = require('./webpack.vendor');

const externals = {};

vendorModules.forEach(module => {
  externals[module] = createModuleKey(module);
});

module.exports = externals;
