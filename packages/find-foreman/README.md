# Find Foreman

## About

To be used to find Foreman relative to a plugin and return a full path. This is useful in a testing environment when you want to point a testing tool to Foreman's packages rather than duplicate them for testing purposes.

## Usage

```javascript
const {
  foremanLocation,
  foremanRelativePath,
  isForemanLocation
} = require('@theforeman/find-foreman');

const foremanReactRelative = 'webpack/assets/javascripts/react_app';
const foremanFull = foremanLocation();
const foremanReactFull = foremanRelativePath(foremanReactRelative);

isForemanLocation('/home/vagrant/foreman');
// true
isForemanLocation('/home/vagrant/katello');
// false

// When not passing arguments, isForemanLocation would use the process.cwd() to determinate if is foreman location.
isForemanLocation();
// true / false based on current location
```
