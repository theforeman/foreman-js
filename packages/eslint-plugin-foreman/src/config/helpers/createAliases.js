const { modules } = require('@theforeman/vendor-core');
const testingModules = require('@theforeman/test/shared-modules');

const createVendorModulesAliases = () =>
  modules.map(({ name, path }) => [name, path]);

const createTestModulesAliases = () =>
  testingModules.map(({ name, path }) => [name, path]);

const createAliases = () => [
  ...createVendorModulesAliases(),
  ...createTestModulesAliases(),
];

module.exports = createAliases;
