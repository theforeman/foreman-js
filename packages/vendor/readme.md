# @theforeman/vendor

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
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

> **Notice:** When using the plugin with `NODE_ENV=development` it will use the development versions of the provided 3rd-parties.
>
> Usefull when using webpack-dev-server

### Stylesheets

`@theforeman/vendor` based on patternfly-react. It build the patternfly-react partials into the `./dist/foreman-vendor.bundle.css` and provides their variables and mixins sets to reuse.

```css
@import "~@theforeman/vendor/scss/variables";
@import "~@theforeman/vendor/scss/mixins";
```

### Development enviorment

See [@theforeman/vendor-dev](/packages/vendor-dev) for development installation.

## Building

This project use `webpack` to produce `development` and `production` versions of bundled `javascript` and `css` files together with a `manifest.json`.
To build them into the `./dist` folder, run:

```sh
# build production and development
npm run build
# build production
npm run build:prod
# build development
npm run build:dev
```

Running `npm run build` will produce a `./dist` folder with the following files:
```sh
packages/vendor/dist
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.css
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.css.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.css.map
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.css.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.js
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.js.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.js.map
├── foreman-vendor.bundle-v0.1.0-alpha.4-development-e226acdcab8caadcc978.js.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.css
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.css.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.css.map
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.css.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.js
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.js.gz
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.js.map
├── foreman-vendor.bundle-v0.1.0-alpha.4-production-d4e23bdf5115757910bc.js.map.gz
├── manifest.development.json
├── manifest.development.json.gz
├── manifest.production.json
└── manifest.production.json.gz

0 directories, 20 files
```

### Build Analyzer

To create an analyze building report into `./dist-analyze` run:

```sh
npm run analyze
```

## Code Linting

This project uses `eslint` with `patternfly-react:recommended` rules, to lint your code run:

```sh
npm run lint
```
