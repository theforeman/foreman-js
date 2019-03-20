const { default: InjectPlugin } = require('webpack-inject-plugin');
const createModuleExport = require('./createModuleExport');

function customLoader({ vendorModules }) {
  const results = vendorModules
    .map(module => createModuleExport(module))
    .join('\n');

  return () => results;
}

class WebpackExportForemanVendorPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    new InjectPlugin(customLoader(this.options)).apply(compiler);
  }
}

module.exports = WebpackExportForemanVendorPlugin;
