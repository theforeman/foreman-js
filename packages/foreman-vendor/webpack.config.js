const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackExportForemanVendorPlugin = require('./lib/WebpackExportForemanVendorPlugin');

const vendorModules = require('./webpack.vendor');

const config = {
  mode: 'production',

  entry: vendorModules,

  devtool: 'source-maps',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foreman-vendor.bundle.js',
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
    new WebpackExportForemanVendorPlugin({ vendorModules }),
    new CompressionWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'foreman-vendor.bundle.css',
    }),
  ],
};

module.exports = config;
