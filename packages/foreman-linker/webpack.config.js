const path = require('path');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),

  mode: 'production',
  target: 'node',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foreman-linker.js',
    library: 'foremanLinker',
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
