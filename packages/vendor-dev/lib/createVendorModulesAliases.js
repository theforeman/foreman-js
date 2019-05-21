const { modules } = require('@theforeman/vendor-core');

const createVendorModulesAliases = () =>
  modules.map(module => ({
    original: module.name,
    replacement: module.path,
  }));

module.exports = createVendorModulesAliases;
