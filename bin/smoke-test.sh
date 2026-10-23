#!/usr/bin/env bash
# Usage: bin/smoke-test.sh [image]   (builds the Dockerfile when no image is given)
set -euo pipefail

image=${1:-}
port=${PORT:-18080}
container=docs-smoke-$$

if [[ -z $image ]]; then
  image=livingdocs/docs:smoke
  docker build -t "$image" "$(dirname "$0")/.."
fi

docker run -d --rm --name "$container" -p "127.0.0.1:$port:8080" "$image" >/dev/null
trap 'docker rm -f "$container" >/dev/null 2>&1' EXIT

for _ in $(seq 50); do
  curl -fs -o /dev/null "http://127.0.0.1:$port/" && break
  sleep 0.1
done

failed=0
check() {
  local name=$1 path=$2 status=$3 type=$4 encoding=$5
  shift 5
  local got_status got_type got_encoding
  IFS='|' read -r got_status got_type got_encoding < <(
    curl -s -o /dev/null "$@" -w '%{http_code}|%{content_type}|%header{content-encoding}\n' "http://127.0.0.1:$port$path"
  )
  got_type=${got_type%%;*}
  if [[ $got_status == "$status" && $got_type == "$type" && ${got_encoding:-none} == "$encoding" ]]; then
    echo "ok    $name"
  else
    echo "FAIL  $name: expected $status $type $encoding, got $got_status $got_type ${got_encoding:-none}"
    failed=1
  fi
}

check 'html'            /                      200 text/html     none
check 'llms.txt'        /                      200 text/markdown none -H 'Accept: text/markdown'
check 'search index'    /search.json           200 application/json br -H 'Accept-Encoding: br, gzip'
check 'image'           /apple-touch-icon.png  200 image/png     none
check 'image gzip'      /apple-touch-icon.png  200 image/png     gzip -H 'Accept-Encoding: gzip'
check 'image brotli'    /apple-touch-icon.png  200 image/png     br   -H 'Accept-Encoding: br'

exit $failed
