const { modules } = require('@theforeman/vendor-core');
const { resolvePath } = require('babel-plugin-module-resolver');

const resolveBabelPath = (sourcePath, currentFile, opts) => {
  const vendorModule = modules.find(m => m.name === sourcePath);

  if (vendorModule && vendorModule.hasCustomPath) {
    return vendorModule.path;
  }

  return resolvePath(sourcePath, currentFile, opts);
};

module.exports = resolveBabelPath;
