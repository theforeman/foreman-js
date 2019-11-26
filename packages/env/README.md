# @theforeman/env

> Development environment for foreman core and plugins

[![Package Version](https://img.shields.io/npm/v/@theforeman/env.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/env)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/env.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/env&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What you get with this project

- `@theforeman/env/babel` - Adds theforeman babel dev configuration to your project.
- WIP: `@theforeman/env/lint` - Adds theforeman linting tools to you project.
- WIP: `@theforeman/env/test` - Adds theforeman testing tools to you project.
- WIP: `@theforeman/env/storybook` - Adds theforeman storybook tools to you project.

## Installation

```sh
npm install --save-dev @theforeman/env
```

### Install `@theforeman/env/babel`

1. To work with `babel` first you need to install `@theforeman/builder` since it contain the production `babel` configurations.

```bash
npm install --save-dev `@theforeman/builder`
```

2. Create a `.babelrc.js` file in your project root with the following content.

```js
module.exports = {
  presets: [
    require.resolve('@theforeman/builder/babel'),
    require.resolve('@theforeman/env/babel'),
  ],
};

```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
