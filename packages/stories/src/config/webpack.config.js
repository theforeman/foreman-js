const applyWebpackEntry = require('./webpack/webpack.config.entry');
const applyWebpackRules = require('./webpack/webpack.config.rules');
const applyWebpackResolve = require('./webpack/webpack.config.resolve');
const applyWebpackPlugins = require('./webpack/webpack.config.plugins');
const applyWebpackVendor = require('./webpack/webpack.config.vendor');

module.exports = ({ config, mode }) => {
  applyWebpackEntry({ config });
  applyWebpackResolve({ config });
  applyWebpackRules({ config });
  applyWebpackPlugins({ config });
  applyWebpackVendor({ config, mode });

  config.watchOptions = {
    poll: true,
  };

  return config;
};
