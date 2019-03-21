# @theforeman/vendor

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/sharvit/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/sharvit/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

```sh
npm install --save @theforeman/vendor
```

Add the `ForemanVendorPlugin` to your webpack plugins:
```js
// webpack.config.js
const ForemanVendorPlugin = require('@theforeman/vendor/webpack.plugin');

module.exports = {
  entry: { ... },
  output: { ... },
  module: { ... },
  plugins: [
    new ForemanVendorPlugin(),
    ...
  ],
};
```

### Stylesheets

`@theforeman/vendor` based on patternfly-react. It build the patternfly-react partials into the `./dist/foreman-vendor.bundle.css` and provides their variables and mixins sets to reuse.

```css
@import "~@theforeman/vendor/scss/variables";
@import "~@theforeman/vendor/scss/mixins";
```

### Development enviorment

See [@theforeman/vendor-dev](/packages/vendor-dev) for development installation.
