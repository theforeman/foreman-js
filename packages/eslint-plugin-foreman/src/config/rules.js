const { getPackageJsonDirectories } = require('./helpers');

module.exports = (isPlugin = false) => {
  const pluginRules = {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
    'import/extensions': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
  };

  const rules = {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: getPackageJsonDirectories(isPlugin),
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  };

  if (isPlugin) {
    return { ...rules, ...pluginRules };
  }

  return rules;
};
