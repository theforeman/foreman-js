#!/bin/bash
# Publish to npm when pushing a new version tag

set -e

# required env variables
NPM_TOKEN=${NPM_TOKEN}
GITHUB_REF=${GITHUB_REF} # refs/heads/{tag-name}

VERSION=${GITHUB_REF#refs/heads/}
REGEX_VERSION='v[0-9]+\.[0-9]+.[0-9]+-(.*)\.[0-9]+'

NPM_TAG="latest"

if [[ $VERSION =~ $REGEX_VERSION ]]; then
  NPM_TAG=${BASH_REMATCH[1]}
fi

npm run lerna -- publish from-git --preid ${NPM_TAG} --yes
