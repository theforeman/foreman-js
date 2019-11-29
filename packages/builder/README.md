# @theforeman/builder

> Build production and development bundle files for foreman core and plugins.

[![Package Version](https://img.shields.io/npm/v/@theforeman/builder.svg?style=flat-square)](https://www.npmjs.com/package/@theforeman/builder)
[![Downloads Status](https://img.shields.io/npm/dm/@theforeman/builder.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@theforeman/builder&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/theforeman/foreman-js/master.svg?style=flat-square)](https://travis-ci.org/theforeman/foreman-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# **This package doesn't contain any implementation yet and only act as a skeleton and as the general design**

## What you get with this project

- `@theforeman/builder/babel` - Adds theforeman babel production configuration to your project
- `tfm-builder-install` - Install the `@theforeman/builder` to your project.
- `tfm-build` - Run it to build foreman or a foreman plugin.
- `tfm-builder-analyze` - Run it to analyze your build content.
- `tfm-dev-server` - Run a development server so your code will get build and served locally with a live-reload feature.

## Installation

```sh
npm install --save-dev @theforeman/builder
```

### Option 1 - Run the installation script

```sh
tfm-builder-install
# answer the questions
```

### Option 2 - Install manually

1. Create a `.babelrc.js` file in your project root with the following content.

```js
module.exports = {
  presets: ['@theforeman/builder/babel'],
};

```

> `@theforeman/builder/babel` will automatically load `@theforeman/env/babel` for none production environments.

2. Create a `config/tfm-builder.config.js` file with the following content:

```js
module.exports = {
  // set your javascript entry points
  entry: {
    'my-plugin': 'webpack/assets/myPlugin.js',
    'my-plugin-fills': 'webpack/assets/myPluginFills.js',
  },
  // set your output path
  outputPath: 'public/webpack',
  // if using in foreman core (won't work for plugins)
  // set a devServer
  devServer: {
    port: '3808',
    host: process.env.BIND || 'localhost',
  }
};

```

3. Add build scripts to your `package.json`
```json
{
  "scripts": {
    "build": "tfm-build config/tfm-builder.config.js",
    "build-analyze": "tfm-builder-analyze config/tfm-builder.config.js",
    "dev-server": "tfm-dev-server config/tfm-builder.config.js"
  }
}
```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
