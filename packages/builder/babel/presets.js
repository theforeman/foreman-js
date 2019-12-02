/* eslint-disable no-console */

const presets = [
  require.resolve('@babel/preset-env'),
  require.resolve('@babel/preset-react'),
];

// Try to load `@theforeman/env/babel`
try {
  const { paths } = require.main;
  const envPreset = require.resolve('@theforeman/env/babel', { paths });

  presets.push(envPreset);
} catch (error) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      'Unable to load @theforeman/env/babel for a none production environment'
    );
    console.log(error);
  }
}

module.exports = presets;
