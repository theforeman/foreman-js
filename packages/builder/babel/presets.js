const presets = [
  require.resolve('@babel/preset-env'),
  require.resolve('@babel/preset-react'),
];

// Try to load `@theforeman/env/babel`
try {
  const { paths } = require.main;
  const envPreset = require.resolve('@theforeman/env/babel', { paths });

  presets.push(envPreset);
} catch {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      'Unable to load @theforeman/env/babel for a none production environment'
    );
  }
}

module.exports = presets;
