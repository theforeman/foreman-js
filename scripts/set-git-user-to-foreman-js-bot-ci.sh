#!/bin/bash
# Prepare the ci enviorment for publishing to github
# Set github logins

set -e


# required env variables
GH_EMAIL=${GH_EMAIL}
GH_NAME=${GH_NAME}

# congigure github user
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_NAME}"
