const { modules } = require('@theforeman/vendor-core');

const createVendorEntry = () => {
  const entry = ['./scss/vendor.scss', ...modules.map(module => module.path)];

  return entry;
};

module.exports = createVendorEntry;
