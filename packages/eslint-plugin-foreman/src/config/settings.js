const { createAliases } = require('./helpers');

module.exports = (isPlugin = false) => {
  const aliases = createAliases(isPlugin);

  const settings = {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-alias')]: {
        map: aliases,
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  };

  return settings;
};
