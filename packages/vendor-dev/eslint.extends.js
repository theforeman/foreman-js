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
const fs = require('fs');

const isPlugin = !isForemanLocation();
const foreman = foremanLocation(false);
const foremanVendorRelative = './node_modules/@theforeman/vendor-core/';
const foremanTestRelative = './node_modules/@theforeman/test/';
const foremanStoriesRelative = './node_modules/@theforeman/stories/';

const packageJsonDirectories = [
  './',
  foremanVendorRelative,
  foremanTestRelative,
];

if (fs.existsSync(foremanStoriesRelative)) {
  packageJsonDirectories.push(foremanStoriesRelative);
}

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
