#!/bin/bash
set -e
rm -Rf public
hugo
node ./bin/build-index.js
node ./bin/compress.js
