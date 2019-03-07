/*
  @theforeman/vendor/babel.preset
  Adds @theforeman/vendor relevant babel configuration to your .babelrc

  How to use it:
  Adds `@theforeman/vendor/babel.preset.js` to your `.babelrc`:
  ```
  {
    "presets": [
      "@theforeman/vendor/babel.preset.js"
    ]
  }
  ```
 */
const { createVendorModulesAliases } = require('./lib/helpers.js');

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
