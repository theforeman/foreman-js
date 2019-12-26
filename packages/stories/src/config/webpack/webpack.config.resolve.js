const {
  foremanReactPath,
  cwdModulesPath,
  foremanModulesPath,
  tfmStoriesModulesPath,
  vendorCoreModulesPath,
} = require('./paths');

module.exports = ({ config }) => {
  // foremanReact alias
  config.resolve.alias.foremanReact = foremanReactPath;

  // node_modules resolver
  config.resolve.modules = [
    tfmStoriesModulesPath,
    vendorCoreModulesPath,
    cwdModulesPath,
  ];

  if (process.env.IS_FOREMAN_PLUGIN) {
    config.resolve.modules = [...config.resolve.modules, foremanModulesPath];
  }

  return config;
};
