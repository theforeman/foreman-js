# Managing vendor dependencies

[`@theforeman/vendor`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor) is a set of formally supported 3rd-party node_modules to use in foreman and foreman plugins.

For more information, see the [readme.md](https://github.com/theforeman/foreman-js/blob/master/packages/vendor/readme.md)

## Add a vendor dependency

There are a few steps needed to add a vendor dependency.
For this example, we will add the `@patternfly/react-table` dependency.

### Step 1: Install the new dependency in vendor-core

Run the `add-to-vendor` command to have your package installed as a dependency of the `vendor-core` project.

```sh
npm run add-to-vendor -- <dependency-to-add>
```

In our case:

```sh
npm run add-to-vendor -- @patternfly/react-table
```

### Step 2: Make the dependency accessible for consumers

Typically, a dependency should come with javascript file/s which export method/s to use.

To build the javascript file/s into the `vendor.js` dist file, we need to add all the javascript files to the [`vendor-core/lib/modules.js`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor-core/lib/modules.js) file.

In our case with `@patternfly/react-table`, there is only one javascript file so we should just add `@patternfly/react-table` to the exported array in the [`vendor-core/lib/modules.js`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor-core/lib/modules.js) file:

```diff
'react',
'react-dom',
'@patternfly/react-core',
+'@patternfly/react-table',
'redux',
```

### Step 3: Provides s/css with the package

In some cases, a package also provides css or scss files.
To have the css available to the vendor consumers (foreman and it's plugins), we should add them to the [`vendor-core/scss/vendor-core.scss`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor-core/scss/vendor-core.scss) so they would get compiled into the `vendor.css` dist file.

When a package provides variables and mixins, we should add them to [`vendor-core/scss/variables.scss`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor-core/scss/variables.scss) and [`vendor-core/scss/mixins.scss`](https://github.com/theforeman/foreman-js/blob/master/packages/vendor-core/scss/mixins.scss) files.
They would get compiled into `@theforeman/vendor/scss/variables.scss` and `@theforeman/vendor/scss/mixins.scss` files.
The consumers can import those files and reuse the package variables or mixins files.

**In our cases with the `@patternfly/react-table`, there are no s/css files so we can skip this step.**

### Step 4: Build, and test with the foreman or with a foreman plugin

Once we have the package installed, listed in the `modules.js` file and the `.scss` files, we should be able to build and use the package from foreman or a foreman plugin.

Build:
```sh
npm run build
```

Link the local vendor version to the foreman or a foreman plugin:
```sh
npm run link -- --location ../foreman
# or for a plugin
npm run link -- --location ../foreman-tasks
```

Now you should use the newly added package in foreman or a foreman plugin (foreman-tasks in our case).
Just import and use it as you would typically do with an npm package and run foreman.

### Step-5: commit and create a pull-request

The foreman-js project uses CI automation to read the commit-message and automatically publish a new version to npm.

To create a valid commit-message, we should use the `npm run commit` command provided by the `foreman-js` project:
```sh
git add .
npm run commit
```

You will need to answer for a set of questions, and the script should create a commit message for you.

When answering the questions:
- **"Select the type of change that you're committing"**
  - always choose **" feat: A new feature"** since we are adding a new feature to the vendor
  The automation process should pick the `feat` keyword to release a minor version.
- **"The package affected by your change"**
  - always choose **vendor-core**
- **"The package affected by your change"**
  - **"add package-name"**, in our case **"add @patternfly/react-table"**

In our case with the `@patternfly/react-table`, I ended up with the following commit message:
```
feat(vendor-core): add @patternfly/react-table
```

**That's it, you can push and create a pull-request now.**

Once your pull-request get merged to `master`, the `foreman-js` bot should automatically build and release a `minor` version to `npm`.

You should receive the following comment on your pull-request once ready:

![cli example using md-seed run](https://raw.githubusercontent.com/theforeman/foreman-js/master/docs/foreman-js-bot-release-comment-github.png)

## Update a vendor dependency

The most important thing to notice when updating a package is the type of the update; we should use the same `update type` in the commit.

For example, if a package releases a new patch (x.x.1), we should release a new patch to the vendor.
The same is relevant for **minur (x.1.0)** and **major (2.0.0)**.


1. Update the package in the `package.json` file.

2. Run `npm install` (in foreman-js root folder)
Make sure the `package-lock.json` is updated accordingly.

3. If needed, update the `modules.js` and the `vendor-core.scss`.
Read the section about adding a new package to learn about those files.

4. Use the `npm run commit` command to commit the changes.

When answering the `npm run commit` questions, you should do the following based on the `update type`:

**Patch (x.x.1)**
- When asked to select the type of the change, select **fix** as the new version contain bug fixes. For example:
```
fix(vendor-core): upgrade @patternfly/react-table to v2.28.47
```

**Minor (x.1.0)**
- When asked to select the change type, select **feat** as the new version contains new features. For example:
```
feat(vendor-core): upgrade @patternfly/react-table to v2.28.47
```

**Major (2.0.0)**
- When asked to select the change type, select **feat** as the new version contains new features.
- When asked about breaking changes, paste a link to the chnagelog.md of the updated package, or describe manually.

  Example:
  ```
  feat(vendor-core): upgrade @patternfly/react-table to v4.4.0

  BREAKING CHANGES:
  https://github.com/patternfly/patternfly-react/blob/master/packages/react-table/CHANGELOG.md#440-2020-05-15
  ```


## Remove a vendor dependency

Removing a package is similar to updating a package, but we will always describe **BREAKING CHANGES** in the commit message, and the CI should release a **Major** version to npm.

1. Remove the package from the `package.json` file.

2. Run `npm install` (in foreman-js root folder)
Make sure the `package-lock.json` is updated accordingly.

3. Remove any instance from the `modules.js` and the `vendor-core.scss`.
Read the section about adding a new package to learn about those files.

4. Use the `npm run commit` command to commit the changes.

  - When asked to select the type of the change, select **feat** as the new version contain new features.
  - When asked about breaking changes describe: `removing <package-name>`
    ```
    feat(vendor-core): remove @patternfly/react-table

    BREAKING CHANGES:
    @patternfly/react-table is removed, use <other-package> instead.
    ```

## Read the docs

Before opening any PR, please read the [CONTRIBUTING.md](https://github.com/theforeman/foreman-js/blob/master/CONTRIBUTING.md) and the project [roadmap.md](https://github.com/theforeman/foreman-js/blob/master/roadmap.md)
