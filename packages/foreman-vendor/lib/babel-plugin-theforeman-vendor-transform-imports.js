const {
  default: renameImportPlugin,
} = require('babel-plugin-transform-rename-import');

const replacments = [
  { original: 'react', replacement: '@theforeman/vendor/node_modules/react' },
];

module.exports = options => {
  const { visitor } = renameImportPlugin(options);

  return {
    visitor: {
      ImportDeclaration(path) {
        visitor.ImportDeclaration(path, { opts: replacments });
      },
      ExportDeclaration(path) {
        visitor.ExportDeclaration(path, { opts: replacments });
      },
      CallExpression(path) {
        visitor.CallExpression(path, { opts: replacments });
      },
    },
  };
};
