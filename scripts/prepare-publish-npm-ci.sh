#!/bin/bash
# Prepare the ci enviorment for publishing to npm
# Set npm login

set -e


# required env variables
NPM_TOKEN=${NPM_TOKEN}
HOME=${HOME}

# configure npm user
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> $HOME/.npmrc 2> /dev/null
