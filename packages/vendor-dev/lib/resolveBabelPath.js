const { modules } = require('@theforeman/vendor-core');
const { resolvePath } = require('babel-plugin-module-resolver');

const resolveBabelPath = (sourcePath, currentFile, opts) => {
  const vendorModule = modules.find(m => m.name === sourcePath);

  const requestedByVendorCore =
    currentFile.includes('foreman-js/packages/vendor-core') ||
    currentFile.includes('@theforeman/vendor-core');

  if (vendorModule && vendorModule.hasCustomPath && !requestedByVendorCore) {
    return vendorModule.path;
  }

  return resolvePath(sourcePath, currentFile, opts);
};

module.exports = resolveBabelPath;
