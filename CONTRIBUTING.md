# Contributing to Foreman-js

Contributions are always welcome, no matter how large or small.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Code of Conduct

By participating, you are expected to uphold this [Contributor Covenant Code of Conduct](./other/code_of_conduct.md). Please report unacceptable behavior to [asharvit@redhat.com](mailto:asharvit@redhat.com).

## Project setup

First, [fork](https://guides.github.com/activities/forking) then clone the repo:

```sh
git clone https://github.com/your-username/foreman-js
cd foreman-js
git remote add upstream https://github.com/theforeman/foreman-js
```

Install dependencies:

```sh
npm install
```

Build all `@theforeman` packages:

```sh
npm run build
```

Link all `@theforeman` packages to your project (`./node_modules/@theforeman`):

```sh
npm run link -- --location ../foreman
# also works for plugins
npm run link -- --location ../foreman-tasks
```

Run test suits to validate the project is working:
Notice it will run the test command for each sub-package.

```sh
npm test
```

Run linter to validate the project code:

```sh
npm run lint
```

Run linter to validate your commit message:

```sh
npm run lint:commit
```

## Creating Pull Requests

1. Create a branch:

```sh
git checkout -b my-branch
```

2. Happy Hacking 🎉: Start hacking and creating code changes.

3. Commit your changes:

`foreman-js` uses [commitizen](https://github.com/commitizen/cz-cli) to create commit messages so it can automatically create semantic releases.

```sh
git add .
npm run commit
# answer the questions
```

> Read more about the commit message format at [docs/commit-message-format.md](./docs/commit-message-format.md)

4. Push your changes:

```sh
git push origin my-branch
```

5. Open [this project on GitHub](https://github.com/theforeman/foreman-js), then click “Compare & pull request”.

## Testing Pull Requests

1. Open the pull request in Github and go to the "Checks" tab.
2. Expand `Build tarballs for testing` job and open any of the associated actions. For example, the job for the test package would be `build-tarball (test)`.
3. Expand the artifacts dropdown on the top right and download the appropiate artifact. For example, the test package will be titled `foreman-js-test-pr-###.tgz`.
  - Alternatively, you can download the zipped tarball directly using the API. Note this different than the link provided in the action. A direct download can be done with a command like this:
    ```
    wget -v -O foreman-js-pr-$PR_NUM.tgz.zip --header "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/theforeman/foreman-js/actions/artifacts/$ARTIFACT_ID/zip
    ```
    Replacing `$PR_NUM` with the pull request number, `$GITHUB_TOKEN` with your github API token, and `$ARTIFACT_ID` with the artifact id in the last part of the artifact URL, found in the action itself. For example, if the artifact link in the action is `https://github.com/theforeman/foreman-js/suites/1279365382/artifacts/19806792`, the `$ARTIFACT_ID` would be `19806792`.
4. Unzip and copy the unpacked tarball to your development box or the appropiate location. For example:
```bash
# download `foreman-js-test-pr-123.tgz.zip` from `artifacts` dropdown on top right of github action or directly using the API.
cd /path/to/download_dir && unzip foreman-js-test-pr-123.tgz.zip # Unzip to get the tarball
scp theforeman-test-4.15.1.tgz vagrant@mydevbox:~ # copy to appropiate development location
```
5. Update the package.json file in foreman or plugin to use the local tarball:
```
$ cat package.json | grep theforeman-test
    "@theforeman/test": "/home/vagrant/theforeman-test-4.15.1.tgz",
```
6. `rm -rf node_modules && rm package-lock.json` in foreman or plugin.
  - This is needed because the version of the package has not changed. Even if it did, the existing package probably still meets the specifications, so we need a fresh install.
7. `npm i` in foreman or plugin.
8. After a successful npm install, updated versions of packages are now being used. You can use `npm ls` to check the installed version.
```
# If the PR upgraded jest-cli
$ npm ls jest-cli
TheForemanDevDeps@2.3.0 /home/vagrant/foreman
└─┬ @theforeman/test@4.15.1
  └── jest-cli@26.4.2
```


## Help needed

Please checkout the [`roadmap.md`](./roadmap.md) and the open issues.

Also, please watch the repo and respond to questions/bug reports/feature requests, Thanks!
