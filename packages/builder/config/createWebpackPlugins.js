const {
  createWebpackCommonPlugins,
  createWebpackDevelopmentPlugins,
  createWebpackProductionPlugins,
} = require('./plugins');

const createWebpackPlugins = options => [
  ...createWebpackCommonPlugins(options),
  ...(options.mode === 'production'
    ? createWebpackProductionPlugins(options)
    : createWebpackDevelopmentPlugins(options)),
];

module.exports = createWebpackPlugins;
