const webpack = require('webpack');

const createWebpackDevelopmentPlugins = () => [
  new webpack.HotModuleReplacementPlugin(), // Enable HMR
];

module.exports = createWebpackDevelopmentPlugins;
