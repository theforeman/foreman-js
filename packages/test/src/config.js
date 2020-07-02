const path = require('path');

const cwd = process.cwd();
const rootDir = path.resolve(__dirname, '../');
const fs = require('fs');

const localTestHelper = `${cwd}/webpack/test_setup.js`;

const localTestHelperExists = fs.existsSync(localTestHelper);
const localTestHelpers = localTestHelperExists ? [localTestHelper] : [];

module.exports = {
  rootDir: cwd,
  roots: [`${cwd}/webpack/`],
  verbose: true,
  automock: false,
  testMatch: ['**/*.test.js'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    'webpack/**/*.js',
    '!webpack/**/bundle*',
    '!webpack/stories/**',
    '!webpack/**/*stories.js',
  ],
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  coverageReporters: ['lcov'],
  coverageDirectory: `${cwd}/coverage`,
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
  resolver: require.resolve('./resolveNodeModule'),
  moduleDirectories: [
    `${cwd}/node_modules/@theforeman/vendor-core/node_modules`,
    `${cwd}/node_modules`,
  ],
  setupFiles: [
    require.resolve('raf/polyfill'),
    require.resolve('jest-prop-type-error'),
    `${rootDir}/src/test_setup.js`,
    ...localTestHelpers,
  ],
};
