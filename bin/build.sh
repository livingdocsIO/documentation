#!/bin/sh
set -e

# Check for fast mode
fast=false;
while [ $# -gt 0 ]; do
    if [[ $1 == "--fast" ]]; then
        fast=true
    fi
    shift
done

# Delete previous build
rm -Rf public

# Build
if [[ $fast == false ]]; then
  hugo --minify
else
  hugo
fi

# Update search
node ./bin/build-index.js

# Compress
if [[ $fast == false ]]; then
  node ./bin/compress.js
fi
