/* eslint-disable class-methods-use-this */
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Manifest from './Manifest';
import createWebpackExternals from './createWebpackExternals';

/**
 * Build for webpack@3
 * Webpack plugin to apply @theforeman/vendor into webpack
 */
export default class WebpackForemanVendorPlugin {
  constructor(options = {}) {
    const { mode = 'production' } = options;

    this.manifest = new Manifest(mode);
  }
  /**
   * copy vendor-dist files to the consumer output path
   */
  applyCopyFiles(compiler) {
    const files = this.manifest.files.map(file => ({
      from: path.resolve(__dirname, '../dist', file),
      to: file,
    }));

    new CopyWebpackPlugin(files).apply(compiler);
  }

  /**
   * add the vendor-modules as externals to the webpack config
   */
  applyExternals(compiler) {
    const externals = createWebpackExternals();

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

    if (!manifestPlugin) return;

    const { transform } = manifestPlugin.opts;

    manifestPlugin.opts.transform = (data, opts) => {
      data.assetsByChunkName = Object.assign(
        {},
        this.manifest.data,
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
