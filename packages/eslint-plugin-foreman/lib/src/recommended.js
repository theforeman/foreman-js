module.exports = {
  plugins: ['patternfly-react', 'promise', 'jquery'],
  extends: [
    'plugin:patternfly-react/recommended',
    './node_modules/@theforeman/vendor-dev/eslint.extends.js',
    'plugin:jquery/deprecated',
  ],
  rules: {
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
