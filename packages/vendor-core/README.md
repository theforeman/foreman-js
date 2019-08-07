# @theforeman/vendor-core

> foreman supported 3rd-party node_modules

[![Package Version](https://img.shields.io/npm/v/@theforeman/vendor-core.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/vendor-core)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/vendor-core.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/vendor-core&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Main Files

### [packages.json](package.json)
Contains all the relevat npm dependencies.

### [lib/modules.js](lib/modules.js)
Contains a list of exported packages, this list will be used by `@theforeman/vendor` and `@theforeman/vendor-dev`.

### [scss/vendor-core.scss](scss/vendor-core.scss)
`scss` file with relevant 3rd party scss files so `@theforeman/vendor` and `@theforeman/vendor-dev` can build a dist `css` file.


## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
