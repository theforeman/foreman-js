# foreman-js

> theforeman javascript packages

[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/theforeman/foreman-js/status.svg)](https://david-dm.org/theforeman/foreman-js)
[![devDependencies Status](https://david-dm.org/theforeman/foreman-js/dev-status.svg)](https://david-dm.org/theforeman/foreman-js?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What is foreman-js?

_This project is a monorepo using [lerna](https://github.com/lerna/lerna) to host more than one package._ Projects maintained by https://theforeman.org.

## Background

The work on this repository started based on a discussion on [community.theforeman.org](https://community.theforeman.org/) about refactoring the JavaScript stack of Foreman.

* See [discussion.](https://community.theforeman.org/t/redesigning-the-javascript-stack/13470)
* Watch the [deep dive](https://youtu.be/uO-YTjl-si0) explaining the redesign.

## Vendor packages

Foreman and its plugins use many of the same JavaScript dependencies (npm packages).  The main purpose of `vendor` is to __gather these common dependencies into a single package.__

- [@theforeman/vendor-core](packages/vendor-core) - This is the actual list of common dependencies.  Is a dependency of `vendor` and `vendor-dev`.
- [@theforeman/vendor](packages/vendor) - The dependencies in `vendor-core`, bundled to be used in Webpack.
- [@theforeman/vendor-dev](packages/vendor-dev) - The dependencies in `vendor-core`, unbundled for use in development.

_Note:_ In Foreman & plugins JavaScript code, you __do not__ need to import anything explicitly from vendor (~`import react from '@theforeman/vendor'`~); you can continue to import all modules like normal (`import react from 'react';`).

In your CSS code, the `@import` statements _do_ need to be explicit; see [this part of @theforeman/vendor readme.](https://github.com/theforeman/foreman-js/tree/master/packages/vendor#stylesheets)

## Other packages

- [@theforeman/builder](packages/builder) - Provides scripts (`npm run build`) to build production and development bundle files for Foreman core and plugins.
- [@theforeman/env](packages/env) - Development environment for Foreman core and plugins.  Includes test configuration, etc. Same idea as `vendor`, except it's for dependencies used only in development.
- [@theforeman/eslint-plugin-foreman](packages/eslint-plugin-foreman) - Shared `eslint` configuration.  Opinionated styling for Foreman core and plugins.
- [@theforeman/stories](packages/stories) - Documentation library for the foreman project.

## Contributing

Please check out the [`CONTRIBUTING.md`](./CONTRIBUTING.md), the [`roadmap.md`](./roadmap.md) and the open issues.
