# Project Roadmap

This is where we‘ll define a few things about the library‘s goals.

**Care to help?** Feel free discusing about the roadmap by opening a github issue.
You can also suggest a change by creating a new pull request.
See [`contributing.md`](./contributing.md)


## `foreman-js` (root)

### Packages want to add

- `@theforeman/env` - Provides the basic environment core and plugins needs.
- `@theforeman/builder` - Build production and development assents for `theforeman` and it's plugins.

### Want to do

- Switch to yarn
- Automate npm deployment
- Automate the npm release process for contributes who want to test their changes

### Might do

- Install greenkeeper

### Won‘t do

---

## `@theforeman/vendor-core`

### Want to do

- Add `react-loadable`
- Add support for async loadabe modules
  - See the PR in foreman: https://github.com/theforeman/foreman/pull/6719
- Add the `I18n` related modules from foreman as async modules
- Drop `datatables.net`
- Drop `jquery`
- Drop `select2`
- Drop `redux-form`

### Might do

- Drop `redux-thunk`

### Won‘t do

- Drop `react`

---

## `@theforeman/vendor`

### Want to do

- Automatically produce `available-packages.md` as part of the `deploy-docs` process
- Test together with `foreman` and `foreman-plugins` in the CI
- Add eslint rule about duplicates in vendor vs core/plugin

### Might do

### Won‘t do

---

## `@theforeman/vendor-dev`

### Want to do

### Might do

### Won‘t do
