# @theforeman/test

> Adds theforeman testing tools to you project.

[![Package Version](https://img.shields.io/npm/v/@theforeman/env.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/test)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/env.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/test&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Installation

```sh
npm install --save-dev @theforeman/test
```

1. Use `tfm-test` script under `test` in `packge.json`:
```json
{
  "test": "tfm-test --plugin"
}
```
This script accepts all jest's arguments, including `plugin` which is a flag for plugins.

2. create a `test_helper.js` under `/webpack` for extending global mocks

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
