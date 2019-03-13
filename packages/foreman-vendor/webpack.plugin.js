/* eslint-disable class-methods-use-this */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line import/no-unresolved
const vendorManifest = require('./dist/manifest.json');
const externals = require('./lib/webpack-externals');

/**
 * Build for webpack@3
 * Webpack plugin to apply @theforeman/vendor into webpack
 */
class WebpackExportForemanVendorPlugin {
  /**
   * copy vendor-dist files to the consumer output path
   */
  applyCopyFiles(compiler) {
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'dist/*'),
        flatten: true,
        ignore: ['manifest.json'],
      },
    ]).apply(compiler);
  }

  /**
   * add the vendor-modules as externals to the webpack config
   */
  applyExternals(compiler) {
    if (!compiler.options.externals) {
      compiler.options.externals = [externals];
    } else if (Array.isArray(compiler.options.externals)) {
      compiler.options.externals = [...compiler.options.externals, externals];
    } else {
      compiler.options.externals = [compiler.options.externals, externals];
    }
  }

  /**
   * change the StatsWriterPlugin so it will include the vendor-dist files
   */
  applyManifest(compiler) {
    const { plugins } = compiler.options;

    const manifestPlugin = plugins.find(
      plugin => plugin.constructor.name === 'StatsWriterPlugin'
    );

    const { transform } = manifestPlugin.opts;

    manifestPlugin.opts.transform = (data, opts) => {
      data.assetsByChunkName = Object.assign(
        {},
        vendorManifest,
        data.assetsByChunkName
      );

      return transform(data, opts);
    };
  }

  apply(compiler) {
    this.applyCopyFiles(compiler);
    this.applyExternals(compiler);
    this.applyManifest(compiler);
  }
}

module.exports = WebpackExportForemanVendorPlugin;
