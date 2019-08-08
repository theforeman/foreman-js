#!/bin/bash
# Prepare the ci enviorment for publishing
# Set npm ang github logins

set -e


# required env variables
NPM_TOKEN=${NPM_TOKEN}
GH_EMAIL=${GH_EMAIL}
GH_NAME=${GH_NAME}
GH_TOKEN=${GH_TOKEN}

# configure npm user
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

# congigure github user
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_NAME}"
git remote set-url origin https://${GH_TOKEN}@github.com/theforeman/foreman-js.git
git fetch
git checkout master
git rebase origin/master
