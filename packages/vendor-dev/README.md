# @theforeman/vendor-dev

> allows to set up evelopment enviorment when working with @theforeman/vendor

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor-dev.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor-dev)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor-dev.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor-dev&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

```sh
npm install --save-dev @theforeman/vendor-dev
```

1. Adds `@theforeman/vendor-dev/babel.preset.js` to your `.babelrc`:
```
{
  "presets": [
    "env",
    "react"
  ],
  "env": {
    "test": {
      "presets": ["@theforeman/vendor-dev/babel.preset.js"]
    },
    "storybook": {
      "presets": ["@theforeman/vendor-dev/babel.preset.js"]
    }
  }
}

```

2. Extend your `.eslintrc` file with `@theforeman/vendor-dev/eslint.extends.js`:
```
{
  "plugins": ["patternfly-react"],
  "extends": [
    "plugin:patternfly-react/recommended",
    "./node_modules/@theforeman/vendor-dev/eslint.extends.js"
  ]
}
```


## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
