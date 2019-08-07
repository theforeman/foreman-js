#!/bin/bash

set -e

git config --global user.email "${GITHUB_EMAIL}"
git config --global user.name "${GITHUB_NAME}"
git remote set-url origin https://${GH_TOKEN}@github.com/theforeman/foreman-js.git
git fetch
git checkout master
git rebase origin/master
