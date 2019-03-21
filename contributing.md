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
git remote add upstream https://github.com/sharvit/foreman-js
```

Install dependencies:

```sh
npm install
lerna bootstrap
```

Run test suits to validate the project is working:

```sh
lerna run test
```

Run linter to validate the project code:

```sh
lerna run lint
```

## Committing and Pushing changes

Create a branch and start hacking:

```sh
git checkout -b my-branch
```

Commit and push your changes:


```sh
git add .

git commit

git push origin my-branch
```

Open this project on [GitHub](https://github.com/sharvit/foreman-js), then click “Compare & pull request”.
