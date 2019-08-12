#!/bin/bash
# Creates a new temp version for forker and publish to npm

# required env variables
GH_USERNAME=${GH_USERNAME}
GH_TOKEN=${GH_TOKEN}
BRANCH=${TRAVIS_BRANCH}
REPO_SLUG=${TRAVIS_REPO_SLUG}
NPM_TOKEN=${NPM_TOKEN}

UPSTREAM_USERNAME="theforeman"
UPSTREAM_REPONAME="foreman-js"
UPSTREAM_REPO_SLUG="${UPSTREAM_USERNAME}/${UPSTREAM_REPONAME}"

UUID=$(cat /dev/urandom | tr -dc 'A-Z' | fold -w 4 | head -n 1)
PREID=`echo "${BRANCH}-${UUID}" | tr '[\/|\.]' '-' | cut -c1-253`
PACKAGES_OLD_BASE_NAME='@theforeman/'
PACKAGES_NEW_BASE_NAME=`echo "${REPO_SLUG}-" | tr '[\/|\.]' '-' | cut -c1-253`

print_github_comment () {
  PACKAGES=$(./node_modules/.bin/lerna ls --ndjson)

  PACKAGES_COMMENT=""
  for PACKAGE in ${PACKAGES[@]}; do
    PACKAGE_NAME=$(echo $PACKAGE | jq '.name' | sed 's/"//'g )
    PACKAGE_VERSION=$(echo $PACKAGE | jq '.version' | sed 's/"//'g )

    PACKAGES_COMMENT+="  - [${PACKAGE_NAME} (${PACKAGE_VERSION})](https://www.npmjs.com/package/${PACKAGE_NAME}/v/${PACKAGE_VERSION})
"
  done

  cat << EOF
:tada: This PR is included in version \`$PACKAGE_VERSION\` :tada:

The release is available on:
- __npm package__
$PACKAGES_COMMENT

Use your new version by updating your \`package.json\` with the packages you wish to use:
\`\`\`diff
-    "@theforeman/vendor": "^1.4.0",
+    "sharvit-foreman-js-vendor": "1.4.1-feat-auto-forker-deploy-MRUZ.0",
\`\`\`

Thank you for your contribution, your foreman-js bot :robot:
EOF
}

# detect changes
npm run lerna -- changed --conventional-commits
CHANGED=$?

if [ $CHANGED -eq 0 ]; then
  echo "Changed detected, releasing a new version for all packages"

  # create a commit with a new pre version using preid
  npm run lerna -- version prerelease \
    --preid $PREID \
    --force-publish \
     --no-git-reset \
    --no-git-tag-version \
    --no-push \
    --no-changelog \
    --yes

  # rename all packages to forker packages (from @theforeman/vendor to <username>-foreman-js-vendor)
  npm run lerna -- exec -- sed -i "s,$PACKAGES_OLD_BASE_NAME,$PACKAGES_NEW_BASE_NAME,g" package.json
  npm install
  git add .
  git commit --message "rename all packages to forker packages, use prefix: ${PACKAGES_NEW_BASE_NAME}<package-name>"

  # build foreman-js
  npm run build

  # release to npm
  npm run lerna -- publish from-package \
    --canary \
    --no-git-reset \
    --yes

  set -v

  # Search for github pr in foreman-js
  GITHUB_PR_SEARCH_URL="https://api.github.com/repos/${UPSTREAM_REPO_SLUG}/pulls?base=master&head=${GH_USERNAME}:${BRANCH}"
  PR_NUM=$(curl -H "Authorization: token ${GH_TOKEN}" -s "${GITHUB_PR_SEARCH_URL}" | jq -r '.[0].number' 2>/dev/null)

  if [[ $PR_NUM -gt 0 ]]; then
    # Comment on the github PR
    GITHUB_PR_COMMENTS_URL="https://api.github.com/repos/${UPSTREAM_REPO_SLUG}/issues/${PR_NUM}/comments"
    COMMENT=$(print_github_comment)
    JSON_DATA="$( jq -nc --arg str "$COMMENT" '{"body": $str}' )"

    echo "Adding github PR comment ${GITHUB_PR_COMMENTS_URL}"
    curl -H "Authorization: token ${GH_TOKEN}" --request POST --data "${JSON_DATA}" "${GITHUB_PR_COMMENTS_URL}"
  else
    echo "Upstream PR not found for ${GH_USERNAME}:${BRANCH}"
  fi
else
  echo "No relevant changes, Skipping fork publish."
fi
