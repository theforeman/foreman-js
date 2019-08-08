#!/bin/bash
# Prepare the ci enviorment for publishing to npm
# Set npm login

set -e


# required env variables
NPM_TOKEN=${NPM_TOKEN}

# configure npm user
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
