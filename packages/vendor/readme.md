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
const ForemanVendorPlugin = require('@theforeman/vendor');

module.exports = {
  entry: { ... },
  output: { ... },
  module: { ... },
  plugins: [
    new ForemanVendorPlugin({ mode: 'production' }),
    ...
  ],
};
```

### ForemanVendorPlugin options

attribute | default value | description
----------|---------------|---------------------------------------------
`mode`    | `production`  | Can be set to `development` or `production` so the plugin will use the correct version of the provided 3rd-parties.

### Stylesheets

`@theforeman/vendor` based on patternfly-react. It build the patternfly-react partials into the `./dist/foreman-vendor.bundle.css` and provides their variables and mixins sets to reuse.

```css
@import "~@theforeman/vendor/scss/variables";
@import "~@theforeman/vendor/scss/mixins";
```

### Development enviorment

See [@theforeman/vendor-dev](/packages/vendor-dev) for development installation.

## Building

This project use `webpack` to produce `development` and `production` versions of bundled `javascript` and `css` files together with a `manifest.json` and a `webpack-plugin` to use by the consumer.
To build them into the `./dist` folder, run:

```sh
# build bundled production, development and the plugin
npm run build
# build bundled production and development
npm run build:bundle
# build bundled  production
npm run build:bundle:prod
# build bundled  development
npm run build:bundle:dev
# build the webpack-plugin
npm run build:plugin
```

Running `npm run build` will produce a `./dist` folder with the following files:
```sh
packages/vendor/dist
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.css
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.css.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.css.map
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.css.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.js
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.js.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.js.map
├── foreman-vendor.bundle-v0.1.0-alpha.8-development-587abbe4e313f3f4c41a.js.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.css
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.css.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.css.map
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.css.map.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.js
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.js.gz
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.js.map
├── foreman-vendor.bundle-v0.1.0-alpha.8-production-4db12fa5bd3ee7e6daf1.js.map.gz
├── manifest.development.json
├── manifest.development.json.gz
├── manifest.production.json
├── manifest.production.json.gz
└── vendor-webpack-plugin.js

0 directories, 21 files
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
