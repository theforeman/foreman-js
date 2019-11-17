# foreman-js

> theforeman javascript packages

[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/theforeman/foreman-js/status.svg)](https://david-dm.org/theforeman/foreman-js)
[![devDependencies Status](https://david-dm.org/theforeman/foreman-js/dev-status.svg)](https://david-dm.org/theforeman/foreman-js?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project is a monorepo using lerna to host more then one package.
Those projects maintained by https://theforeman.org

## Why this repository exists?

The work on this repository started based on a discution on `theforeman` community forum about refactoging the javascript stack of `theforeman`.
See: https://community.theforeman.org/t/redesigning-the-javascript-stack/13470

Watch the deep dive explaining the redesign:
https://youtu.be/uO-YTjl-si0

## Packages

- [@theforeman/env](packages/env) - Development environment for foreman core and plugins.
- [@theforeman/vendor](packages/vendor) - Foreman supported 3rd-party node_modules bundled to be used in webpack.
- [@theforeman/vendor-dev](packages/vendor-dev) - Foreman supported 3rd-party node_modules ready to be used in development.
- [@theforeman/vendor-core](packages/vendor-core) - Foreman supported 3rd-party node_modules.

## Contributing

Please checkout the [`contributing.md`](./contributing.md), the [`roadmap.md`](./roadmap.md) and the open issues.
