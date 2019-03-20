/*
  @theforeman/vendor-dev/eslint.extends
  Adds @theforeman/vendor relevant eslint configuration to your .eslintrc

  How to use it:
  Extend your `.eslintrc` file with `@theforeman/vendor-dev/eslint.extends.js`:
  ```
  {
    "extends": [
      "./node_modules/@theforeman/vendor-dev/eslint.extends.js"
    ]
  }
  ```
 */
const createVendorModulesAliases = require('./lib/createVendorModulesAliases');

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./', './node_modules/@theforeman/vendor-core/'],
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
