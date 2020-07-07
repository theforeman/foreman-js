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
const {
  foremanLocation,
  foremanRelativePath,
} = require('@theforeman/find-foreman');
const createVendorModulesAliases = require('./lib/createVendorModulesAliases');

const foremanFull = foremanLocation();
const foremanVendorRelative = './node_modules/@theforeman/vendor-core/';
const foremanVendorDir = foremanRelativePath(foremanVendorRelative);
const foremanTestRelative = './node_modules/@theforeman/test/';
const foremanTestDir = foremanRelativePath(foremanTestRelative);

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./', foremanFull, foremanVendorDir, foremanTestDir],
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
