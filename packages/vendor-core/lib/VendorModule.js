const { snakeCase, toUpper } = require('lodash');

const createWindowKeyByModuleName = name =>
  `__FOREMAN_VENDOR__${toUpper(snakeCase(name))}__`;

const createPathByModuleName = name =>
  `@theforeman/vendor-core/node_modules/${name}`;

const createModuleExport = (key, path) =>
  `window["${key}"] = require("${path}");`;

class VendorModule {
  constructor(module) {
    const hasCustomPath =
      typeof module === 'object' && typeof module.path === 'string';
    const getName = () => (typeof module === 'object' ? module.name : module);
    const getKey = name => createWindowKeyByModuleName(name);
    const getPath = name =>
      hasCustomPath ? module.path : createPathByModuleName(name);

    let window =
      typeof module === 'object' && module.window ? module.window : [];

    if (typeof window === 'string') {
      window = [window];
    }

    this.hasCustomPath = hasCustomPath;
    this.name = getName();
    this.key = getKey(this.name);
    this.path = getPath(this.name);
    this.window = [this.key, ...window];
  }

  createModuleExport() {
    // return createModuleExport(this.key, this.path);
    return this.window.map(key => createModuleExport(key, this.path)).join(' ');
  }
}

module.exports = VendorModule;
