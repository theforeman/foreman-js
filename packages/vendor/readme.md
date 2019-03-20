# @theforeman/vendor

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor&from=2016-04-01)
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

1. Add the ForemanVendorPlugin into your webpack plugins list:
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

1. Adds `@theforeman/vendor/babel.preset.js` to your `.babelrc`:
```
{
  "presets": [
    "@theforeman/vendor/babel.preset.js"
  ]
}

```

2. Extend your `.eslintrc` file with `@theforeman/vendor/eslint.extends.js`:
```
{
  "plugins": ["patternfly-react"],
  "extends": [
    "plugin:patternfly-react/recommended",
    "./node_modules/@theforeman/vendor/eslint.extends.js"
  ]
}
```

### Testing enviorment

1. Add to you `package.json`:
```json
{
  "jest": {
    "moduleDirectories": [
      "@theforeman/vendor/node_modules",
      "node_modules"
    ]
  }
}
```

### Storybook

1. Add to your `.storybook/webpack.config.js`:

```js
{
  resolve: {
    modules: [
      path.join(__dirname, '..', 'node_modules/@theforeman/vendor/node_modules'),
      path.join(__dirname, '..', 'node_modules'),
      'node_modules/',
    ],
  },
}
```

## License

MIT &copy; [Avi Sharvit]()
