const path = require('path');
const { foremanLocation } = require('@theforeman/find-foreman');

const getPackageJsonDirectories = (isPlugin = false) => {
  const foreman = foremanLocation(false);
  const foremanVendorRelative = path.dirname(
    require.resolve('@theforeman/vendor-core/package.json')
  );
  const foremanTestRelative = path.dirname(
    require.resolve('@theforeman/test/package.json')
  );

  const packageJsonDirectories = [
    './',
    foremanVendorRelative,
    foremanTestRelative,
  ];

  if (isPlugin && foreman) {
    packageJsonDirectories.push(foreman);
  }

  return packageJsonDirectories;
};

module.exports = getPackageJsonDirectories;
