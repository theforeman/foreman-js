# @theforeman/vendor

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What you get with this project

- [bundled 3rd-party dependencies](https://theforeman-vendor-docs.surge.sh/stats.production.html)
- [variables.scss](https://theforeman-vendor-docs.surge.sh/scss/variables.scss)
- [mixins.scss](https://theforeman-vendor-docs.surge.sh/scss/mixins.scss)

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
# build bundled production, development, webpack-plugin, scss and docs
npm run build
# build bundled production and development
npm run build:bundle
# build bundled  production
npm run build:bundle:prod
# build bundled  development
npm run build:bundle:dev
# build the webpack-plugin
npm run build:plugin
# build the scss files
npm run build:scss
# build docs
npm run build:docs
# build docs analyze html report
npm run build:docs:analyze
# build docs about scss
npm run build:docs:scss
```

Running `npm run build` will produce `./dist`, `./scss` and `./docs` folders with the following files:
```sh
packages/vendor/dist
├── foreman-vendor.bundle-[version]-development-[hash].css
├── foreman-vendor.bundle-[version]-development-[hash].css.gz
├── foreman-vendor.bundle-[version]-development-[hash].css.map
├── foreman-vendor.bundle-[version]-development-[hash].css.map.gz
├── foreman-vendor.bundle-[version]-development-[hash].js
├── foreman-vendor.bundle-[version]-development-[hash].js.gz
├── foreman-vendor.bundle-[version]-development-[hash].js.map
├── foreman-vendor.bundle-[version]-development-[hash].js.map.gz
├── foreman-vendor.bundle-[version]-production-[hash].css
├── foreman-vendor.bundle-[version]-production-[hash].css.gz
├── foreman-vendor.bundle-[version]-production-[hash].css.map
├── foreman-vendor.bundle-[version]-production-[hash].css.map.gz
├── foreman-vendor.bundle-[version]-production-[hash].js
├── foreman-vendor.bundle-[version]-production-[hash].js.gz
├── foreman-vendor.bundle-[version]-production-[hash].js.map
├── foreman-vendor.bundle-[version]-production-[hash].js.map.gz
├── manifest.development.json
├── manifest.development.json.gz
├── manifest.production.json
├── manifest.production.json.gz
└── vendor-webpack-plugin.js

0 directories, 21 files

packages/vendor/docs
├── scss
│   ├── mixins.scss
│   └── variables.scss
├── stats.development.html
└── stats.production.html

1 directory, 4 files

packages/vendor/scss
├── mixins.scss
└── variables.scss

0 directories, 2 files
```

## Code Linting

This project uses `eslint` with `patternfly-react:recommended` rules, to lint your code run:

```sh
npm run lint
```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
