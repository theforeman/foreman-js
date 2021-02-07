const path = require('path');

module.exports = [
  '@testing-library/jest-dom',
  '@testing-library/react',
  'react-redux-test-utils',
].map(module => ({
  name: module,
  path: path.dirname(require.resolve(`${module}/package.json`)),
}));
