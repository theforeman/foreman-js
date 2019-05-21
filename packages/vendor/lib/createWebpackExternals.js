const { modules } = require('@theforeman/vendor-core');

const createWebpackExternals = () => {
  const externals = {};

  for (const module of modules) {
    externals[module.name] = module.key;
  }

  return externals;
};

module.exports = createWebpackExternals;
