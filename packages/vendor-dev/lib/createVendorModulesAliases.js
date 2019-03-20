const { vendorModules, vendorModulePath } = require('@theforeman/vendor-core');

const createVendorModulesAliases = () =>
  vendorModules.map(module => ({
    original: module,
    replacement: vendorModulePath(module),
  }));

module.exports = createVendorModulesAliases;
