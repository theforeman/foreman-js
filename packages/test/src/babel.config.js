module.exports = {
  presets: [require.resolve('@theforeman/builder/babel')],
  plugins: [require.resolve('babel-plugin-dynamic-import-node')],
};
