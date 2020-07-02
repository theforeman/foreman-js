const { modules } = require('@theforeman/vendor-core');

const isRequestedByVendorCore = currentFileDirectory =>
  (currentFileDirectory.includes('foreman-js/packages/vendor-core') ||
    currentFileDirectory.includes('@theforeman/vendor-core')) &&
  !currentFileDirectory.includes(
    'foreman-js/packages/vendor-core/node_modules'
  ) &&
  !currentFileDirectory.includes('@theforeman/vendor-core/node_modules');

const findVendorModule = requestPath =>
  modules.find(m => m.name === requestPath);

const getModuleToResolve = ({ sourcePath, currentFileDirectory }) => {
  const requestPath = sourcePath === '.' ? './index' : sourcePath;

  const vendorModule = findVendorModule(requestPath);
  const requestedByVendorCore = isRequestedByVendorCore(currentFileDirectory);

  const shouldResolveCustomVendorModule =
    vendorModule && vendorModule.hasCustomPath && !requestedByVendorCore;

  return shouldResolveCustomVendorModule ? vendorModule.path : requestPath;
};

/**
 * resolve a import/require of a node module
 * this method should be calld by the jest-resolver
 * to resolve every require statement
 */
const resolveNodeModule = (sourcePath, currentFile) => {
  const { basedir: currentFileDirectory } = currentFile;

  const moduleToResolve = getModuleToResolve({
    sourcePath,
    currentFileDirectory,
  });

  return currentFile.defaultResolver(moduleToResolve, currentFile);
};

module.exports = resolveNodeModule;
