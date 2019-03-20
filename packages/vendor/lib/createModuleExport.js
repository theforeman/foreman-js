const {
  vendorModuleKey,
  vendorModulePath,
} = require('@theforeman/vendor-core');

const createModuleExport = module =>
  `window["${vendorModuleKey(module)}"] = require("${vendorModulePath(
    module
  )}");`;

module.exports = createModuleExport;
