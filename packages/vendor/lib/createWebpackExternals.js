const { vendorModules, vendorModuleKey } = require('@theforeman/vendor-core');

const createWebpackExternals = () => {
  const externals = {};

  vendorModules.forEach(module => {
    externals[module] = vendorModuleKey(module);
  });

  return externals;
};

module.exports = createWebpackExternals;
