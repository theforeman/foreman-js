#!/bin/bash
# Publish to github when pushing a new commit to master
# Will create a new tagged commit and push to master

CI_PUBLISH_GITHUB=true

npm run lerna -- changed --conventional-commits
CHANGED=$?

set -e

if [ $CHANGED -eq 0 ]; then
  echo "Changed detected, releasing a new version for all packages"

  npm run lerna -- version \
    --conventional-commits \
    --create-release github \
    --force-publish \
    --yes
else
  echo "Skipping github publish"
fi
