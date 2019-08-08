#!/bin/bash
# Publish to github when pushing a new commit to master
# Will create a new tagged commit and push to master

set -e

npm run lerna -- version \
  --conventional-commits \
  --create-release github \
  --message \"chore(root): publish %v\" \
  --yes
