const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { modules } = require('@theforeman/vendor-core');

const { version } = require('../package.json');
const createVendorEntry = require('./createVendorEntry');
const WebpackExportForemanVendorPlugin = require('./WebpackExportForemanVendorPlugin');

const projectRoot = path.resolve(__dirname, '../');

const [, webpackMode = 'production'] = process.argv
  .find((arg) => arg.startsWith('--mode='))
  .split('=');

const filename = `[name].bundle-v${version}-${webpackMode}-[fullhash]`;

class ManifestPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('ManifestPlugin', (compilation, callback) => {
      const { assetsByChunkName, assets } = compilation.getStats().toJson();
      const manifest = JSON.stringify({
        assetsByChunkName,
        assets: assets.map((asset) => asset.name),
      });

      compilation.assets[this.options.filename] = {
        source: () => manifest,
        size: () => manifest.length,
      };

      callback();
    });
  }
}
class StatsWriterPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'StatsWriterPlugin',
      (compilation, callback) => {
        const stats = JSON.stringify(
          compilation.getStats().toJson({ assets: true, modules: true }),
          null,
          2
        );

        compilation.assets[this.options.filename] = {
          source: () => stats,
          size: () => stats.length,
        };

        callback();
      }
    );
  }
}
const config = {
  entry: {
    'foreman-vendor': createVendorEntry(),
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: `${filename}.js`,
    publicPath: '/webpack/',
  },

  optimization: {
    sideEffects: false,
    usedExports: false,
    moduleIds: 'named',
    chunkIds: 'named',
  },

  resolve: {
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: `fonts/${filename}[ext]`,
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: `images/${filename}[ext]`,
        },
      },
    ],
  },
  plugins: [
    new ManifestPlugin({
      filename: `manifest.${webpackMode}.json`,
    }),
    new MiniCssExtractPlugin({
      filename: `${filename}.css`,
    }),
    new WebpackExportForemanVendorPlugin({ modules }),
    new CompressionWebpackPlugin(),
    new StatsWriterPlugin({
      filename: `stats.${webpackMode}.json`,
    }),
  ],
};

module.exports = config;
