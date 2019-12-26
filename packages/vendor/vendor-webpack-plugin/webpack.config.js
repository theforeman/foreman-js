const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

const config = {
  entry: path.resolve(__dirname, './index'),

  mode: 'production',
  target: 'node',
  node: {
    __dirname: false,
  },

  output: {
    path: path.resolve(projectRoot, 'dist'),
    filename: 'vendor-webpack-plugin.js',
    library: 'vendorWebpackPlugin',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
