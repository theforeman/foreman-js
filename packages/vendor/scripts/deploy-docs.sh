#! /bin/bash
# the docs folder need to be build before this script can run
# use npm run build:docs

REPO_SLUG_ARRAY=(${TRAVIS_REPO_SLUG//\// })
REPO_OWNER=${REPO_SLUG_ARRAY[0]}
REPO_NAME=${REPO_SLUG_ARRAY[1]}
PR_NUM=${TRAVIS_PULL_REQUEST}
BRANCH=${TRAVIS_BRANCH}
GH_TOKEN=${GH_TOKEN}
SURGE_LOGIN=${SURGE_LOGIN}
SURGE_TOKEN=${SURGE_TOKEN}

DEPLOY_PATH="./docs"
DEPLOY_SUBDOMAIN="${REPO_OWNER}-vendor-docs"

if [ -n "${PR_NUM}" ] # If build is a PR
then
  DEPLOY_SUBDOMAIN="${DEPLOY_SUBDOMAIN}-pr-${PR_NUM}"
  ALREADY_DEPLOYED=`surge list | grep ${DEPLOY_SUBDOMAIN}`
else
  if [ "$BRANCH" != "master" ]
  then
    DEPLOY_SUBDOMAIN="${DEPLOY_SUBDOMAIN}-${BRANCH}"
  fi
fi

set -e

# Domain names follow the RFC1123 spec [a-Z] [0-9] [-] limited to 253 characters
# https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
# So, just replace "/" or "." with "-"
DEPLOY_SUBDOMAIN=`echo $DEPLOY_SUBDOMAIN | tr '[\/|\.]' '-' | cut -c1-253`
DEPLOY_DOMAIN="https://${DEPLOY_SUBDOMAIN}.surge.sh"

# upload docs to surge
echo "Deploying docs (${DEPLOY_PATH}) to: ${DEPLOY_DOMAIN}"
surge --project $DEPLOY_PATH --domain $DEPLOY_DOMAIN;

if [ -n "${PR_NUM}" ] && [ -z "${ALREADY_DEPLOYED}" ] # Leave a Github comment
then
  # Use Issues api instead of PR api because
  # PR api requires comments be made on specific files of specific commits
  GITHUB_PR_COMMENT_URL="https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${PR_NUM}/comments"
  GITHUB_PR_COMMENT_BODY="\
:tada: Docs Deployed :tada:\n\
\n\
The documentations available on:\n\
- [stats.production.html](${DEPLOY_DOMAIN}/stats.production.html)\n\
- [stats.development.html](${DEPLOY_DOMAIN}/stats.development.html)\n\
- [variables.scss](${DEPLOY_DOMAIN}/scss/variables.scss)\n\
- [mixins.scss](${DEPLOY_DOMAIN}/scss/mixins.scss)\n\
\n\
Your foreman-js bot :package::rocket:\
"

  curl -H "Authorization: token ${GH_TOKEN}" --request POST ${GITHUB_PR_COMMENT_URL} --data "{\"body\":\"${GITHUB_PR_COMMENT_BODY}\"}"
  echo "Github comment added on: ${GITHUB_PR_COMMENT_URL}"
fi
