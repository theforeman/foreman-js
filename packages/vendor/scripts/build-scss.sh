#! /bin/bash

set -e

NODE_ENV=production
VENDOR_CORE_PATH=./node_modules/@theforeman/vendor-core

# Build variables
scss-bundle -e $VENDOR_CORE_PATH/scss/variables.scss \
            -d dist/scss/variables.scss \
            --includePaths $VENDOR_CORE_PATH

# Build mixins
scss-bundle -e $VENDOR_CORE_PATH/scss/mixins.scss \
            -d dist/scss/mixins.scss \
            --includePaths $VENDOR_CORE_PATH
