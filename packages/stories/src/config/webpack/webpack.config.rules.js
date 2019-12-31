const path = require('path');
const createMdxCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const {
  cwdWebpack,
  cwdModulesPath,
  vendorCoreModulesPath,
  tfmStoriesPath,
  foremanReactPath,
} = require('./paths');

module.exports = ({ config }) => {
  const include = process.env.IS_FOREMAN_PLUGIN
    ? [tfmStoriesPath, cwdWebpack, foremanReactPath]
    : [tfmStoriesPath, cwdWebpack];

  // find the javascript rule
  const jsRule = config.module.rules.find(rule =>
    'some-file.js'.match(rule.test)
  );
  jsRule.exclude = /node_modules/;
  jsRule.include = include;
  jsRule.use = [
    {
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('@theforeman/builder/babel')],
        plugins: [require.resolve('babel-plugin-react-docgen')],
      },
    },
  ];

  // Stories MDX loader
  config.module.rules.push({
    test: /\.mdx$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
      {
        loader: require.resolve('@mdx-js/loader'),
        options: {
          compilers: [createMdxCompiler({})],
        },
      },
    ],
  });

  // Stories source code loader
  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            parser: 'babel',
          },
        },
      },
    ],
    enforce: 'pre',
  });

  // scss loader
  config.module.rules.push({
    test: /\.scss$/,
    include,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      {
        loader: require.resolve('sass-loader'),
        options: {
          includePaths: [
            'patternfly/dist/sass',
            'bootstrap-sass/assets/stylesheets',
            'font-awesome-sass/assets/stylesheets',
          ].reduce(
            (currentResults, currentPath) => [
              ...currentResults,
              path.resolve(vendorCoreModulesPath, currentPath),
              path.resolve(cwdModulesPath, currentPath),
            ],
            []
          ),
        },
      },
    ],
  });

  return config;
};
