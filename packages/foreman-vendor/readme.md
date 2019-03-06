# @theforeman/vendor

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/foreman-vendor.svg?style=flat-square)](https://www.npmjs.com/package/foreman-vendor)
[![Downloads Status](https://img.shields.io/npm/dm/foreman-vendor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=foreman-vendor&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/sharvit/foreman-vendor/master.svg?style=flat-square)](https://travis-ci.org/sharvit/foreman-vendor)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/sharvit/foreman-vendor/status.svg)](https://david-dm.org/sharvit/foreman-vendor)
[![devDependencies Status](https://david-dm.org/sharvit/foreman-vendor/dev-status.svg)](https://david-dm.org/sharvit/foreman-vendor?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Installation

```sh
npm install --save @theforeman/vendor
```

## Usage

1. Serve the bundled js file from the './dist' folder
2. Add the externals into your webpack configuration

```js
// webpack.config.js
const tfmVendorExternals = require('@theforeman/vendor/webpack.externals');

module.exports = {
  entry: { ... },
  output: { ... },
  externals: tfmVendorExternals,
};
```

## Development enviorment

// TODO

## Testing enviorment

// TODO

## License

MIT &copy; [Avi Sharvit]()
