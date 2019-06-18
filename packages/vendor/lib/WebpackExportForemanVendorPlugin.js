const { default: InjectPlugin } = require('webpack-inject-plugin');

function customLoader({ modules }) {
  const results = modules.map(module => module.createModuleExport()).join(' ');

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
