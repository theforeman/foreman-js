# Contributing

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

4. Push your changes:

```sh
git push origin my-branch
```

5. Open [this project on GitHub](https://github.com/theforeman/foreman-js), then click “Compare & pull request”.

## Help needed

Please checkout the [`roadmap.md`](./roadmap.md) and the open issues.

Also, please watch the repo and respond to questions/bug reports/feature requests, Thanks!
