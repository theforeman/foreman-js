#!/bin/bash
# Publish to npm when pushing a new version tag

set -e

npm run lerna -- publish from-git --yes
