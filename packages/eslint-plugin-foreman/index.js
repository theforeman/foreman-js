const core = require('./lib/src/core');
const plugin = require('./lib/src/plugins');

module.exports = {
  configs: {
    core,
    plugins: { ...core, ...plugin },
  },
};
