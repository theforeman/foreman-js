const createConfig = require('./src/config');

module.exports = {
  configs: {
    core: createConfig(),
    plugins: createConfig(true),
  },
};
