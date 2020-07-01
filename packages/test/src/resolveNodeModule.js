/**
 * resolve a import/require of a node module
 */
const resolveNodeModule = (sourcePath, currentFile) => {
  const requestPath = sourcePath === '.' ? './' : sourcePath;
  const { moduleDirectory = [] } = currentFile;

  return require.resolve(requestPath, {
    paths: [currentFile.basedir, ...moduleDirectory],
  });
};

module.exports = resolveNodeModule;
