#!/usr/bin/env bash
# Usage: bin/smoke-test.sh [image]   (builds the Dockerfile when no image is given)
set -euo pipefail

image=${1:-}
container=docs-smoke-$$

if [[ -z $image ]]; then
  image=livingdocs/docs:smoke
  docker build -t "$image" "$(dirname "$0")/.."
fi

# curl runs in a sidecar sharing nginx's network, so this also works when
# the docker daemon is remote, e.g. a CI step talking to the host's socket
docker run -d --rm --name "$container" "$image" >/dev/null
trap 'docker rm -f "$container" "$container-curl" >/dev/null 2>&1' EXIT
docker run -d --rm --name "$container-curl" --network "container:$container" \
  --entrypoint sleep curlimages/curl:8.23.0 300 >/dev/null

curl() { docker exec "$container-curl" curl "$@"; }

for _ in $(seq 50); do
  curl -fs -o /dev/null http://127.0.0.1:8080/ && break
  sleep 0.1
done

failed=0
check() {
  local name=$1 path=$2 status=$3 type=$4 encoding=$5
  shift 5
  local got_status got_type got_encoding
  IFS='|' read -r got_status got_type got_encoding < <(
    curl -s -o /dev/null "$@" -w '%{http_code}|%{content_type}|%header{content-encoding}\n' "http://127.0.0.1:8080$path"
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
