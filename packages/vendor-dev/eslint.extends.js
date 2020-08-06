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
  isForemanLocation,
  foremanLocation,
} = require('@theforeman/find-foreman');
const createVendorModulesAliases = require('./lib/createVendorModulesAliases');

const isPlugin = !isForemanLocation();
const foreman = foremanLocation(false);
const foremanVendorRelative = './node_modules/@theforeman/vendor-core/';
const foremanTestRelative = './node_modules/@theforeman/test/';

const packageJsonDirectories = [
  './',
  foremanVendorRelative,
  foremanTestRelative,
];

if (isPlugin && foreman) {
  packageJsonDirectories.push(foremanLocation());
}

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: packageJsonDirectories,
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
