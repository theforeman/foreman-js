const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { modules } = require('@theforeman/vendor-core');

const { version } = require('../package.json');
const createVendorEntry = require('./createVendorEntry');
const WebpackExportForemanVendorPlugin = require('./WebpackExportForemanVendorPlugin');

const projectRoot = path.resolve(__dirname, '../');

const [, webpackMode = 'production'] = process.argv
  .find(arg => arg.startsWith('--mode='))
  .split('=');

const filename = `[name].bundle-v${version}-${webpackMode}-[hash]`;

const config = {
  entry: {
    'foreman-vendor': createVendorEntry(),
  },

  devtool: 'source-maps',

  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: `${filename}.js`,
    publicPath: '/webpack/',
  },

  optimization: {
    sideEffects: false,
    usedExports: false,
    namedModules: true,
    namedChunks: true,
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
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            outputPath: 'fonts',
            esModule: false,
            name: `${filename}.[ext]`,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              outputPath: 'images',
              esModule: false,
              name: `${filename}.[ext]`,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new StatsWriterPlugin({
      filename: `manifest.${webpackMode}.json`,
      fields: null,
      transform({ assetsByChunkName, assets }) {
        return JSON.stringify({
          assetsByChunkName,
          assets: assets.map(asset => asset.name),
        });
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
  ],
};

module.exports = config;
