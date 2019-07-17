const { modules } = require('@theforeman/vendor-core');

const scssEntries = ['@theforeman/vendor-core/scss/vendor-core.scss'];

const createVendorEntry = () => [
  ...scssEntries,
  ...modules.map(module => module.path),
];

module.exports = createVendorEntry;
