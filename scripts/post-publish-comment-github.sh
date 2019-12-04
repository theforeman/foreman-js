#!/bin/bash
#
# After release:
#   Comment on each PR included in the release

# required env variables
GH_TOKEN=${GH_TOKEN}

print_github_comment () {
  PACKAGES=$(./node_modules/.bin/lerna ls --ndjson)

  NPM_RELEASE_COMMENT=""
  for PACKAGE in ${PACKAGES[@]}; do
    PACKAGE_NAME=$(echo $PACKAGE | jq '.name' | sed 's/"//'g )
    PACKAGE_VERSION=$(echo $PACKAGE | jq '.version' | sed 's/"//'g )

    NPM_RELEASE_COMMENT+="  - [${PACKAGE_NAME} (${PACKAGE_VERSION})](https://www.npmjs.com/package/${PACKAGE_NAME}/v/${PACKAGE_VERSION})
"
  done

  cat << EOF
:tada: This PR is included in version \`$PACKAGE_VERSION\` :tada:

The release is available on:
- __GitHub release__
  - [${PACKAGE_VERSION}](https://github.com/theforeman/foreman-js/releases/tag/v${PACKAGE_VERSION})
- __npm package__
$NPM_RELEASE_COMMENT

Thank you for your contribution, your foreman-js bot :robot:
EOF
}

# Get all commits from the previous tag to current
GIT_LOG=`git log --format="%H" $(git describe --abbrev=0 --tags $(git rev-list --tags --skip=1  --max-count=1))..HEAD~1`

for COMMIT_HASH in $(echo $GIT_LOG); do
  # Search for github pr's comments url that contains the current $COMMIT_HASH
  GITHUB_PR_SEARCH_URL="https://api.github.com/search/issues?q=${COMMIT_HASH}"
  GITHUB_PR_COMMENTS_URL=$(curl -H "Authorization: token ${GH_TOKEN}" -s "${GITHUB_PR_SEARCH_URL}" | jq -r '.items[0].comments_url'  2>/dev/null)

  # Create a comment string for the PR
  COMMENT=$(print_github_comment)
  JSON_DATA="$( jq -nc --arg str "$COMMENT" '{"body": $str}' )"

  # Comment on the github PR
  echo "Adding github PR comment ${GITHUB_PR_COMMENTS_URL}"
  curl -H "Authorization: token ${GH_TOKEN}" --request POST --data "${JSON_DATA}" "${GITHUB_PR_COMMENTS_URL}"
done
