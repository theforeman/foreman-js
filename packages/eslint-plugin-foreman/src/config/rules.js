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
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
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
