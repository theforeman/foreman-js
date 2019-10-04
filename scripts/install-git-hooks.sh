#!/bin/bash

HOOKS_PATH="scripts/.githooks"

echo "Installing git hooks in $HOOKS_PATH"
git config core.hooksPath $HOOKS_PATH
