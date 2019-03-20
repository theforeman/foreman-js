const { snakeCase, toUpper } = require('lodash');

const vendorModuleKey = module =>
  `__FOREMAN_VENDOR__${toUpper(snakeCase(module))}__`;

module.exports = vendorModuleKey;
