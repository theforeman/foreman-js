module.exports = {
  plugins: ['patternfly-react', 'promise', 'jquery', 'react-hooks'],
  extends: [
    'plugin:patternfly-react/recommended',
    require.resolve('@theforeman/vendor-dev/eslint.extends.js'),
    'plugin:jquery/deprecated',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
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
