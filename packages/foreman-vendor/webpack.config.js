const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const WebpackExportForemanVendorPlugin = require('./lib/webpack-export-foreman-vendor-plugin');

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

  plugins: [
    new WebpackExportForemanVendorPlugin({ vendorModules }),
    new CompressionWebpackPlugin(),
  ],
};

module.exports = config;
