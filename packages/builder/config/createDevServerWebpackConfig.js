const createWebpackConfig = require('./createWebpackConfig');

const createDevServerWebpackConfig = ({
  output,
  mode = 'development',
  entry = {},
  alias = {},
  plugins = [],
}) => {
  for (const plugin of Object.values(plugins)) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const pluginConfig = require(plugin.config);

    // add plugin entries
    for (const [pluginEntryName, pluginEntry] of Object.entries(
      pluginConfig.entry
    )) {
      entry[`${pluginConfig.plugin}/${pluginEntryName}`] = pluginEntry;
    }

    // add plugin aliases
    for (const [pluginAliasName, pluginAlias] of Object.entries(
      pluginConfig.alias || {}
    )) {
      alias[pluginAliasName] = pluginAlias;
    }
  }

  return createWebpackConfig({
    mode: 'development',
    plugin: false,
    entry,
    output,
    alias,
  });
};

module.exports = createDevServerWebpackConfig;
