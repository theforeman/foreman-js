# @theforeman/eslint-plugin-foreman

> Styling code for foreman core and plugins.

## What you get with this project

- `@theforeman/eslint-plugin-foreamn` - Adds eslint plugin for opinitated styling
- `tfm-lint` - Run eslint cli for files in /webpack folder

## Installation

```sh
npm install --save-dev @theforeman/eslint-plugin-foreman
```

### Modify package.json

```json
"lint": "tfm-lint"
```

In plugins it is important to add `--plugin` flag:

```json
"lint": "tfm-lint --plugin -d /webpack"
```

### Create an eslintrc file

#### Foreman core 

```js
{
  "plugins": ["@theforeman/foreman"],
  "extends": ["plugin:@theforeman/foreman/core"]
}
```

#### Plugins

```js
{
  "plugins": ["@theforeman/foreman"],
  "extends": [
    "plugin:@theforeman/foreman/core",
    "plugin:@theforeman/foreman/plugins"
  ]
}
```

### Run linting script

Run `tfm-lint` in order to get a linting report on files under `/webpack` and `/script` folders

#### Lint other folders or files

Add `-d` flag with a list of files or folders:

```sh
tfm-lint -d /example_folder /other_folder some-file.js
```

## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
