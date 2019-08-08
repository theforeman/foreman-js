#!/bin/bash
# Prepare the ci enviorment for publishing to github
# Set github logins

set -e


# required env variables
GH_EMAIL=${GH_EMAIL}
GH_NAME=${GH_NAME}
GH_TOKEN=${GH_TOKEN}

# congigure github user
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_NAME}"
git remote set-url origin https://${GH_TOKEN}@github.com/theforeman/foreman-js.git
# bring all commits and tags
git fetch
git checkout master
git rebase origin/master
