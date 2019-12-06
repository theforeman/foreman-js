const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { modules } = require('@theforeman/vendor-core');

const { version } = require('../package.json');
const createVendorEntry = require('./createVendorEntry');
const WebpackExportForemanVendorPlugin = require('./WebpackExportForemanVendorPlugin');
const { supportedLanguagesRE } = require('./supportedLanguages');

const projectRoot = path.resolve(__dirname, '../');

const [, webpackMode = 'production'] = process.argv
  .find(arg => arg.startsWith('--mode='))
  .split('=');

const filename = `[name].v${version}-${webpackMode}-[hash]`;

const config = {
  entry: {
    'foreman-vendor': createVendorEntry(),
  },

  devtool: 'source-maps',

  output: {
    path: path.resolve(projectRoot, 'dist'),
    publicPath: '/webpack/',
    filename: `${filename}.js`,
    chunkFilename: `foreman-vendor-${filename}.js`,
    jsonpFunction: 'foremanVendorJSONP',
  },

  optimization: {
    sideEffects: false,
    usedExports: false,
    namedModules: true,
    namedChunks: true,
    chunkIds: 'named',
  },

  resolve: {
    modules: [
      path.resolve(projectRoot, './node_modules/'),
      path.resolve(
        projectRoot,
        './node_modules/@theforeman/vendor-core/node_modules/'
      ),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /(\.png|\.gif)$/,
        use: 'url-loader',
      },
    ],
  },

  plugins: [
    new StatsWriterPlugin({
      filename: `manifest.${webpackMode}.json`,
      fields: null,
      transform(data, opts) {
        return JSON.stringify(data.assetsByChunkName);
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${filename}.css`,
    }),
    new WebpackExportForemanVendorPlugin({ modules }),
    new CompressionWebpackPlugin(),
    new StatsWriterPlugin({
      filename: `stats.${webpackMode}.json`,
      fields: null,
      stats: {
        all: true,
      },
    }),
    // limit locales from intl only to supported ones
    new webpack.ContextReplacementPlugin(
      /intl\/locale-data\/jsonp/,
      supportedLanguagesRE
    ),
    // limit locales from react-intl only to supported ones
    new webpack.ContextReplacementPlugin(
      /react-intl\/locale-data/,
      supportedLanguagesRE
    ),
  ],
};

module.exports = config;
