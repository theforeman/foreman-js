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
const resolveBabelPath = require('./lib/resolveBabelPath');

const { NODE_ENV } = process.env;

const plugins = [];

if (NODE_ENV === 'test' || NODE_ENV === 'storybook') {
  const testPlugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js'],
        resolvePath: resolveBabelPath,
      },
    ],
  ];
  plugins.push(...testPlugins);
}

module.exports = { plugins };
