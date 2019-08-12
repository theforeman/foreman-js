#!/bin/bash
#
# Setup TravisCi for forker (contributor):
# The setup will allow forkers to automatically deploy
# their WIP branches to npm.
#
# Useful when you have a WIP PR in foreman or in a foreman plugin.

set -e

REPO_NAME="foreman-js"

echo 'Setting up travis for forker account, please follow instructions below.'
echo -e '\n'

read -p 'Please, fork the foreman-js repository and press enter to continue'
echo -e '\n'

echo 'Please enter your github username:'
read GH_USERNAME
echo -e '\n'

echo 'Please create a token for your github account.'
echo 'See: https://github.com/settings/tokens'
echo 'Your token should contain the following scopes:'
echo 'public_repo, user:email, repo:status, admin:repo_hook'
echo 'Your github token:'
read GH_TOKEN
echo -e '\n'

echo 'Please create a token for your npm account'
echo 'See: https://docs.npmjs.com/creating-and-viewing-authentication-tokens'
echo 'Your npm token:'
read NPM_TOKEN
echo -e '\n'

SURGE_TOKEN=$(npm run --silent surge -- token | xargs)
SURGE_LOGIN=$(npm run --silent surge -- whoami | cut -d "-" -f 1 | xargs)


REPO_SLUG="${GH_USERNAME}/${REPO_NAME}"

gem install travis --quiet
travis login --github-token $GH_TOKEN
travis enable -r ${REPO_SLUG}
travis env set GH_USERNAME $GH_USERNAME -r $REPO_SLUG --public
travis env set GH_TOKEN $GH_TOKEN -r $REPO_SLUG
travis env set NPM_TOKEN $NPM_TOKEN -r $REPO_SLUG
travis env set SURGE_LOGIN $SURGE_LOGIN -r $REPO_SLUG
travis env set SURGE_TOKEN $SURGE_TOKEN -r $REPO_SLUG

echo "Travis setup for forker ${REPO_SLUG} finished successfully!"
