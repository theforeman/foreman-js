const { vendorModules, vendorModulePath } = require('@theforeman/vendor-core');

const createVendorEntry = () => [
  './scss/vendor.scss',
  ...vendorModules.map(module => vendorModulePath(module)),
];

module.exports = createVendorEntry;
