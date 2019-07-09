const path = require('path');
const { modules } = require('@theforeman/vendor-core');

const scssEntry = path.resolve(__dirname, '../scss/vendor.scss');

const createVendorEntry = () => {
  const entry = [scssEntry, ...modules.map(module => module.path)];

  return entry;
};

module.exports = createVendorEntry;
