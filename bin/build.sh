#!/bin/sh
set -e
rm -Rf public
hugo --minify
node ./bin/build-index.js
node ./bin/compress.js
