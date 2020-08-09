# @theforeman/foreman-linker

> For Foreman plugins to link the foreman to their plugin node_modules.

## Installation

```sh
npm install --save-dev @theforeman/foreman-linker
```

## Usage

To link foreman to your plugin, simply run the `link-foreman` command.

```sh
link-foreman --location ../foreman
```

Full details:
```
Usage: link-foreman [options]

Options:
  -V, --version                           output the version number
  -l, --location <foreman-relative-path>  Set foreman location relative to your project root. (default: "../foreman")
  -h, --help                              display help for command
```



## Contributing

Please checkout the [`contributing.md`](../../contributing.md), the [`roadmap.md`](../../roadmap.md) and the open issues.
