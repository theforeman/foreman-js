#!/bin/bash
# Publish to github when pushing a new commit to master
# Will create a new tagged commit and push to master

npm run lerna -- changed --conventional-commits
CHANGED=$?

set -e

if [ $CHANGED -eq 0 ]; then
  echo "Detected relevant changes, releasing a new version for all packages."

  npm run lerna -- version \
    --conventional-commits \
    --create-release github \
    --force-publish \
    --commit-hooks \
    --yes
else
  echo "Detected no relevat changes, skipping github publish."
fi
