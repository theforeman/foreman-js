#!/bin/bash

set -e

# configure npm user
npm config set registry "https://registry.npmjs.org/:_authToken=\\${NPM_TOKEN}"

# congigure github user
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_NAME}"
git remote set-url origin https://${GH_TOKEN}@github.com/theforeman/foreman-js.git
git fetch
git checkout master
git rebase origin/master
