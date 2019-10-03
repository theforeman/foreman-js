#!/bin/bash
# Publish to github when pushing a new commit to master
# Will create a new tagged commit and push to master

npm run lerna -- changed --conventional-commits
CHANGED=$?

set -e

if [ $CHANGED -eq 0 ]; then
  echo "Changed detected, releasing a new version for all packages"

  # update the version
  npm run lerna -- version \
    --conventional-commits \
    --create-release github \
    --force-publish \
    --no-push \
    --yes

  # update the lock files
  npm install
  git add **/package-lock.json

  # commit and push changes
  git commit --amend --no-edit
  VERSION=`node -pe "require('$PWD/package.json').version;"`
  git tag -f "v${VERSION}"
  git push --follow-tags
  git push --tags
else
  echo "Skipping github publish"
fi
