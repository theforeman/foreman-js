# Find Foreman

## About

To be used to find Foreman relative to a plugin and return a full path. This is useful in a testing environment when you want to point a testing tool to Foreman's packages rather than duplicate them for testing purposes.

## Usage

```javascript
const { foremanLocation, foremanRelativePath } = require('@theforeman/find-foreman');

const foremanReactRelative = 'webpack/assets/javascripts/react_app';
const foremanFull = foremanLocation();
const foremanReactFull = foremanRelativePath(foremanReactRelative);
```
