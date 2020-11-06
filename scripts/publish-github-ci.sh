#!/bin/bash
# Publish to github when pushing a new commit to master
# Will create a new tagged commit and push to master

# required env variables
GH_TOKEN=${GH_TOKEN}
GITHUB_REF=${GITHUB_REF} # refs/heads/{branch-name}

BRANCH_NAME=${GITHUB_REF#refs/heads/}
LERNA_VERSION_ARGS=(
  --conventional-commits
  --create-release github
  --force-publish
  --commit-hooks
  --yes
)

if [ $BRANCH_NAME == 'master' ]; then
  NPM_TAG='latest'
else
  NPM_TAG=${BRANCH_NAME/\//-}
  LERNA_VERSION_ARGS+=(
    --conventional-prerelease
    --preid $NPM_TAG
  )
fi

# detect for changes
npm run lerna -- changed --conventional-commits
CHANGED=$?

set -e

if [ $CHANGED -eq 0 ]; then
  echo "Detected relevant changes pushed to the $BRANCH_NAME branch!"
  echo "Releasing a new version for all packages with $NPM_TAG tag."

  npm run lerna -- version ${LERNA_VERSION_ARGS[@]}
else
  echo "Detected no relevat changes, skipping github publish."
fi
