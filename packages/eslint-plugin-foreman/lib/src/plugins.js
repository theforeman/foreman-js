module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
    'import/extensions': [
      'error',
      {
        ignore: ['foremanReact/.*'],
      },
    ],
  },
};
