const path = require('path');

const cwd = process.cwd();

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  roots: [`${cwd}/webpack/`],
  verbose: true,
  automock: true,
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
  coverageDirectory: `${cwd}/coverage`,
  unmockedModulePathPatterns: ['react', 'node_modules/'],
  moduleNameMapper: {
    '^.+\\.(png|gif|css|scss)$': 'identity-obj-proxy',
    '^dnd-core$': 'dnd-core/dist/cjs',
    '^react-dnd$': 'react-dnd/dist/cjs',
    '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
    '^react-dnd-touch-backend$': 'react-dnd-touch-backend/dist/cjs',
    '^react-dnd-test-backend$': 'react-dnd-test-backend/dist/cjs',
    '^react-dnd-test-utils$': 'react-dnd-test-utils/dist/cjs',
  },
  globals: {
    __testing__: true,
    URL_PREFIX: '',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@theforeman/vendor-core/lib|@theforeman/test)/)',
  ],

  transform: {
    '^.+\\.js$': [
      'babel-jest',
      { cwd: path.resolve(__dirname), filename: 'babel.config.js' },
    ],
  },
  moduleDirectories: [
    '<rootDir>/node_modules',
    `${cwd}/node_modules/@theforeman/vendor-core/node_modules`,
    `${cwd}/node_modules`,
    `${cwd}/node_modules/react-virtualized/node_modules`,
    `${cwd}/node_modules/htmlparser2/node_modules`,
  ],
  setupFiles: [
    'raf/polyfill',
    'jest-prop-type-error',
    './src/test_setup.js',
    `${cwd}/webpack/test_setup.js`,
  ],
};
