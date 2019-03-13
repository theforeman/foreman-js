const { snakeCase, toUpper } = require('lodash');
const vendorModules = require('./webpack-vendor');

const createVendorModulesAliases = () =>
  vendorModules.map(module => ({
    original: module,
    replacement: `@theforeman/vendor/node_modules/${module}`,
  }));

const createModuleKey = module =>
  `__FOREMAN_VENDOR__${toUpper(snakeCase(module))}__`;

const createModuleExport = module =>
  `window["${createModuleKey(module)}"] = require("${module}");`;

module.exports = {
  createVendorModulesAliases,
  createModuleKey,
  createModuleExport,
};
