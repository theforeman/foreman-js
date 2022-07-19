#! /bin/bash

set -e

NODE_ENV=production
VENDOR_CORE_PATH=./node_modules/@theforeman/vendor-core

# Build variables
scss-bundle --entryFile $VENDOR_CORE_PATH/scss/variables.scss \
            --outFile scss/variables.scss \
            --project $VENDOR_CORE_PATH

# Build mixins
scss-bundle --entryFile $VENDOR_CORE_PATH/scss/mixins.scss \
            --outFile scss/mixins.scss \
            --project $VENDOR_CORE_PATH
