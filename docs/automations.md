# Automations

`foreman-js` uses github-actions to automate the test, build, and deployment of its packages.

- [Testing](#testing)
  * [Test `foreman-js`](#test--foreman-js-)
  * [Test foreman and foreman plugins with `foreman-js` source code](#test-foreman-and-foreman-plugins-with--foreman-js--source-code)
  * [Build tarballs](#build-tarballs)
- [Deployment](#deployment)
  * [Git and Github deployment](#git-and-github-deployment)
  * [Deploy to npm](#deploy-to-npm)
  * [Prereleases](#prereleases)


# Testing

The testing automation runs on every push and every pull request on Github.

## Test `foreman-js`

- Run code linting
- Run commit linting
- Run foreman-js testing
- Run the build process to make sure there are no build errors

## Test foreman and foreman plugins with `foreman-js` source code

For `foreman` and the following plugins:
- katello
- foreman-tasks
- foreman_rh_cloud

Link to `foreman-js` source-code and run:
- `npm run test`
- `npm run lint`

## Build tarballs

Will build tarballs for each package.
See: https://github.com/theforeman/foreman-js/blob/master/CONTRIBUTING.md#testing-pull-requests

# Deployment

The deployment process contain 2 steps:
- [Deploy to github](#deploy-to-github)
- [Deploy to npm](#deploy-to-npm)

## Git and Github deployment

Run on every push to the following branches:
- `master`
- `next**` (`next`, `next-react-v17`, `next-webpack-v4`)

This process will use `lerna` to perform the following:

- Exit if the commits should not trigger a new release.
Determine the release type (patch/minor/major) and the new version number based on the previous commit messages.
See: [commit-message-format.md](./commit-message-format.md)
  - For `next` or `next-something` branch, the version will be `x.y.z-next.n` or `x.y.z-next-something.n`
- Update the version in each `package.json` file.
- Generate changelog for the new version.
- Create a tagged commit and push to Github
- Publish the release notes to Github
  - When using `next*` branch, the release notes will be marked as a prerelease.

## Deploy to npm

Run when pushing tags (by the previous automation or manually) with the template `v*` (e.g. `v2.0.1`, `v3.0.0-next.0`, `v3.0.0-next-react.3`).

- Build all `foreman-js` packages
- Deploy all `foreman-js` packages to `npm`

> To install a prerelease run `npm install @theforeman/vendor@next` or `npm install @theforeman/vendor@next-react`. Another option is to update the version in the `package.json` to `^3.0.0-next.0` or `v3.0.0-next-react.0`.

## Prereleases

**When to create a prerelease:**
- Before releasing breaking changes that we would like to test with a broader audience.
- When you want to publish a new version with a combination of multiple commits and pull-requests.

**How to create a prerelease:**

1. Choose a name to your prerelease with the `next-` prefix.
2. Create a new branch based on the `master` branch with your prerelease name.
3. Push commits or create pull-requests to the prerelease branch.
4. gh-actions will create a new prerelease for every push you perform to the branch.
5. Share your prerelease with others by setting the version field in the `package.json` to the prerelease version (e.g. `^8.0.0-next-something.0`).
6. When the prerelease is ready to be published as an official release, rebase and merge into the `master` branch, and gh-actions will create an official release.
7. Remove the prerelease branch from the `foreman-js` repository.
