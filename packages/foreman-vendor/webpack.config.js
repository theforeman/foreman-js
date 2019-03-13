const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { version } = require('./package.json');
const WebpackExportForemanVendorPlugin = require('./lib/WebpackExportForemanVendorPlugin');

const vendorModules = require('./lib/webpack-vendor');

const filename = `[name].bundle-v${version}-[hash]`;

const config = {
  mode: 'production',

  entry: {
    'foreman-vendor': vendorModules,
  },

  devtool: 'source-maps',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${filename}.js`,
  },

  optimization: {
    sideEffects: false,
    usedExports: false,
    chunkIds: 'named',
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
      filename: 'manifest.json',
      fields: null,
      transform(data, opts) {
        return JSON.stringify(data.assetsByChunkName);
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${filename}.css`,
    }),
    new WebpackExportForemanVendorPlugin({ vendorModules }),
    new CompressionWebpackPlugin(),
  ],
};

module.exports = config;
