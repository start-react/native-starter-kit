#!/bin/zsh

# function lintit () {
#   OUTPUT=$(git diff --name-only | grep -E '(.js|.jsx)$')
#   a=("${(f)OUTPUT}")
#   e=$(npm run eslint $a)
#   echo $e
#   if [[ "$e" != *"0 errors"* ] || [ "$e" != *"0 errors"* ]]; then
#     echo "ERROR: Check eslint hints."
#     exit 1 # reject
#   fi
# }
# lintit
# exit 0

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

echo "\nValidating Javascript:\n"


for FILE in $STAGED_FILES
do
  npm run eslint "$FILE"

  if [[ "$?" == 0 ]]; then
    echo "\t\033[32mESLint Passed: $FILE\033[0m"
  else
    echo "\t\033[41mESLint Failed: $FILE\033[0m"
    PASS=false
  fi
done

echo "\nJavascript validation completed!\n"

if ! $PASS; then
  echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  echo "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi

exit $?
