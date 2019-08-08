#!/bin/bash

set -e

NPM_EMAIL=${NPM_EMAIL}
NPM_USERNAME=${NPM_USERNAME}
NPM_TOKEN=${NPM_TOKEN}
NPM_REGISTRY="https://registry.npmjs.org/"
GH_EMAIL=${GH_EMAIL}
GH_NAME=${GH_NAME}
GH_TOKEN=${GH_TOKEN}

# configure npm user
npm install --global npm-cli-login
npm-cli-login -e $NPM_EMAIL -u $NPM_USERNAME -p $NPM_TOKEN -r $NPM_REGISTRY

# congigure github user
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_NAME}"
git remote set-url origin https://${GH_TOKEN}@github.com/theforeman/foreman-js.git
git fetch
git checkout master
git rebase origin/master
