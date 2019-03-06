const { snakeCase, toUpper } = require('lodash');

const createModuleKey = module =>
  `__FOREMAN_VENDOR__${toUpper(snakeCase(module))}__`;

const createModuleExport = module =>
  `window["${createModuleKey(module)}"] = require("${module}");`;

module.exports = { createModuleKey, createModuleExport };
