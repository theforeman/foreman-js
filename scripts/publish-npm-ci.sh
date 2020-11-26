#!/bin/bash
# Publish to npm

set -e

# required env variables
NPM_TOKEN=${NPM_TOKEN}
GITHUB_REF=${GITHUB_REF} # refs/heads/{branch-name}

BRANCH_NAME=${GITHUB_REF#refs/heads/}

if [ $BRANCH_NAME == 'master' ]; then
  NPM_TAG="latest"
else
  # prerelease
  NPM_TAG=${BRANCH_NAME/\//-}
fi

npm run lerna -- publish from-git --dist-tag ${NPM_TAG} --yes
