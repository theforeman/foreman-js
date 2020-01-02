module.exports = {
  presets: [
    require.resolve('@theforeman/builder/babel'),
    require.resolve('@theforeman/vendor-dev/babel.preset.js'),
  ],
  plugins: [require.resolve('babel-plugin-dynamic-import-node')],
};
