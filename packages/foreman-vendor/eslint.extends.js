/*
  @theforeman/vendor/eslint.extends
  Adds @theforeman/vendor relevant eslint configuration to your .eslintrc

  How to use it:
  Extend your `.eslintrc` file with `@theforeman/vendor/eslint.extends.js`:
  ```
  {
    "extends": [
      "./node_modules/@theforeman/vendor/eslint.extends.js"
    ]
  }
  ```
 */
const { createVendorModulesAliases } = require('./lib/helpers.js');

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./', './node_modules/@theforeman/vendor/'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-alias')]: {
        map: createVendorModulesAliases().map(({ original, replacement }) => [
          original,
          replacement,
        ]),
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
