/*
  @theforeman/vendor-dev/babel.preset
  Adds @theforeman/vendor-dev relevant babel configuration to your .babelrc

  How to use it:
  Adds `@theforeman/vendor-dev/babel.preset.js` to your `.babelrc`:
  ```
  {
    "presets": [
      "@theforeman/vendor-dev/babel.preset.js"
    ]
  }
  ```
 */
const createVendorModulesAliases = require('./lib/createVendorModulesAliases');

module.exports = {
  env: {
    test: {
      plugins: [
        [
          require.resolve('babel-plugin-transform-rename-import'),
          { replacements: createVendorModulesAliases() },
        ],
      ],
    },
  },
};
