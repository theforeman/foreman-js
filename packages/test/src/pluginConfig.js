const { foremanLocation, foremanRelativePath } = require('@theforeman/find-foreman')
const config = require('./config');

const foremanReactRelative = 'webpack/assets/javascripts/react_app';
const foremanFull = foremanLocation();
const foremanReactFull = foremanRelativePath(foremanReactRelative);

module.exports = {
  ...config,
  moduleDirectories: [
    `${foremanFull}/node_modules`,
    `${foremanFull}/node_modules/@theforeman/vendor-core/node_modules`,
    'node_modules',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/foreman/',
  ],
  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^foremanReact(.*)$': `${foremanReactFull}/$1`,
  },
  automock: false,
};
