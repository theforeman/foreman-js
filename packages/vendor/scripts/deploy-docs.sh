#! /bin/bash
# the docs folder need to be build before this script can run
# use npm run build:docs
if [[ -z ${CI} ]] || ([ -n ${CI} ] && [ $CI == 'false' ])
then
  exit 0
fi

REPO_SLUG_ARRAY=(${TRAVIS_REPO_SLUG//\// })
REPO_OWNER=${REPO_SLUG_ARRAY[0]}
SURGE_LOGIN=${SURGE_LOGIN}
SURGE_TOKEN=${SURGE_TOKEN}

DEPLOY_PATH="./docs"
DEPLOY_SUBDOMAIN="${REPO_OWNER}-vendor-docs"

set -e

# Domain names follow the RFC1123 spec [a-Z] [0-9] [-] limited to 253 characters
# https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
# So, just replace "/" or "." with "-"
DEPLOY_SUBDOMAIN=`echo $DEPLOY_SUBDOMAIN | tr '[\/|\.]' '-' | cut -c1-253`
DEPLOY_DOMAIN="https://${DEPLOY_SUBDOMAIN}.surge.sh"

# upload docs to surge
echo "Deploying docs (${DEPLOY_PATH}) to: ${DEPLOY_DOMAIN}"
surge --project $DEPLOY_PATH --domain $DEPLOY_DOMAIN;
