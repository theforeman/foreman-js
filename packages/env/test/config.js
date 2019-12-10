const path = require('path');

const cwd = process.cwd();

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  roots: [`${cwd}/webpack/`, `${cwd}/script/`],
  automock: true,
  verbose: true,
  testMatch: ['**/*.test.js'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    'webpack/**/*.js',
    '!webpack/**/bundle*',
    '!webpack/stories/**',
    '!webpack/**/*stories.js',
  ],
  coverageReporters: ['lcov'],
  unmockedModulePathPatterns: ['react', 'node_modules/'],
  moduleNameMapper: {
    '^.+\\.(png|gif|css|scss)$': 'identity-obj-proxy',
  },
  globals: {
    __testing__: true,
    URL_PREFIX: '',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/test/jestPreprocess.js',
  },
  moduleDirectories: [
    `${cwd}/node_modules/@theforeman/vendor-core/node_modules`,
    `${cwd}/node_modules`,
    '<rootDir>/node_modules',
  ],
  setupFiles: [
    'raf/polyfill',
    'jest-prop-type-error',
    './test/test_setup.js',
    `${cwd}/webpack/test_setup.js`,
  ],
};
