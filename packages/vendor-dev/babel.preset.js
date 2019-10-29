/*
  @theforeman/vendor-dev/babel.preset
  Adds @theforeman/vendor-dev relevant babel configuration to your .babelrc

  How to use it:
  Adds `@theforeman/vendor-dev/babel.preset.js` to your `.babelrc`:
  ```
  {
    "presets": [
      "env",
      "react"
    ],
    "env": {
      "test": {
        "presets": ["@theforeman/vendor-dev/babel.preset.js"]
      },
      "storybook": {
        "presets": ["@theforeman/vendor-dev/babel.preset.js"]
      }
    }
  }
  ```
*/
const resolveBabelPath = require('./lib/resolveBabelPath');

module.exports = () => ({
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js'],
        resolvePath: resolveBabelPath,
      },
    ],
  ],
});
