/*
  @theforeman/babel - Adds theforeman babel configuration to your project
*/
module.exports = () => ({
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-transform-object-assign'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ],
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
