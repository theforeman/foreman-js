const webpack = require('webpack');

function customLoader({ modules }) {
  const results = modules
    .map((module) => module.createModuleExport())
    .join(' ');

  return results;
}

class WebpackExportForemanVendorPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    new webpack.BannerPlugin({
      banner: customLoader(this.options),
      raw: true,
      entryOnly: true,
    }).apply(compiler);
  }
}

module.exports = WebpackExportForemanVendorPlugin;
