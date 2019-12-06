const { modules } = require('@theforeman/vendor-core');

const loadersEntries = [require.resolve('./webpackPublicPathLoader')];
const scssEntries = ['@theforeman/vendor-core/scss/vendor-core.scss'];

const createVendorEntry = () => [
  ...loadersEntries,
  ...scssEntries,
  ...modules.map(module => module.path),
];

module.exports = createVendorEntry;
