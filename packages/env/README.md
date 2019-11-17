# @theforeman/env

> Development environment for foreman core and plugins

[![Package Version](https://img.shields.io/npm/v/@theforeman/env.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/env)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/env.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/env&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What you get with this project

- `@theforeman/env/babel` - Adds theforeman babel configuration to your project

## Installation

```sh
npm install --save-dev @theforeman/env
```

### Install `@theforeman/env/babel`

1. Add `@theforeman/env/babel` to your `.babelrc`:
```
{
  "presets": ["@theforeman/env/babel"]
}
```

2. If you are using webpack, add `@theforeman/env/babel`
   to the `babel-loader` in your webpack config.
```js
const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          require.resolve('@theforeman/env/babel'),
        ],
      }
    },
  ],
};
```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
