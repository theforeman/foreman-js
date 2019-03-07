/*
  @theforeman/vendor/webpack.externals
  Adds @theforeman/vendor `externals` configuration to your webpack-config

  How to use it:
  Add the externals into your webpack configuration:
  ```js
  // webpack.config.js
  const tfmVendorExternals = require('@theforeman/vendor/webpack.externals');

  module.exports = {
    entry: { ... },
    output: { ... },
    externals: tfmVendorExternals,
  };
  ```
 */
const { createModuleKey } = require('./lib/helpers');
const vendorModules = require('./webpack.vendor');

const externals = {};

vendorModules.forEach(module => {
  externals[module] = createModuleKey(module);
});

module.exports = externals;
