const createRules = require('./rules');
const createSettings = require('./settings');

module.exports = (isPlugin = false) => {
  const config = {
    plugins: ['patternfly-react', 'promise', 'jquery', 'react-hooks'],
    extends: [
      'plugin:patternfly-react/recommended',
      'plugin:jquery/deprecated',
    ],
    settings: createSettings(isPlugin),
    rules: createRules(isPlugin),
  };

  return config;
};
