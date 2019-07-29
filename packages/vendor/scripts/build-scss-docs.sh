#! /bin/bash
# the scss folder need to be build before this script can run
# use npm run build:scss

set -e

mkdir -p docs
cp -rf ./scss ./docs/.
