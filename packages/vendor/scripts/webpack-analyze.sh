#! /bin/bash

NODE_ENV=production
PROJECT_PATH=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
PROJECT_PATH="${PROJECT_PATH}/.."
PATH="$PROJECT_PATH/node_modules/.bin:$PATH"
WEBPACK="node --max_old_space_size=8192 ./node_modules/.bin/webpack --mode=production --config $PROJECT_PATH/bundle/webpack.config.js"
REPORT_DIR="$PROJECT_PATH/dist-analyze"
REPORT="${REPORT_DIR}/report.html"

mkdir -p $REPORT_DIR
$WEBPACK --profile --json > $REPORT_DIR/stats.json && \
webpack-bundle-analyzer --mode static -r $REPORT $REPORT_DIR/stats.json
