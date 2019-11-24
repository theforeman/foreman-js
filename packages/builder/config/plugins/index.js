const createWebpackCommonPlugins = require('./createWebpackCommonPlugins');
const createWebpackDevelopmentPlugins = require('./createWebpackDevelopmentPlugins');
const createWebpackProductionPlugins = require('./createWebpackProductionPlugins');

module.exports = {
  createWebpackCommonPlugins,
  createWebpackDevelopmentPlugins,
  createWebpackProductionPlugins,
};
