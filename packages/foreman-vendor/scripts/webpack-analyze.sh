#! /bin/bash

NODE_ENV=production
PROJECT_PATH=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
PROJECT_PATH="${PROJECT_PATH}/.."
PATH="$PROJECT_PATH/node_modules/.bin:$PATH"
WEBPACK="webpack --config $PROJECT_PATH/webpack.config.js"
REPORT_DIR="$PROJECT_PATH/dist-analyze"
REPORT="${REPORT_DIR}/report.html"

mkdir -p $REPORT_DIR
$WEBPACK --profile --json > $REPORT_DIR/stats.json && \
webpack-bundle-analyzer --mode static -r $REPORT $REPORT_DIR/stats.json
