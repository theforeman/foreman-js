/*
  @theforeman/env/babel - Adds theforeman babel dev configuration to your project
*/
module.exports = () => ({
  env: {
    test: {
      presets: [require.resolve('@theforeman/vendor-dev/babel.preset.js')],
      plugins: [require.resolve('babel-plugin-dynamic-import-node')],
    },
    storybook: {
      presets: [require.resolve('@theforeman/vendor-dev/babel.preset.js')],
    },
  },
});
