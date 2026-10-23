ARG ALPINE_VERSION=3.24
ARG HUGO_VERSION=0.168.0

FROM ghcr.io/gohugoio/hugo:v${HUGO_VERSION} AS hugo

FROM livingdocs/node:26 AS builder
COPY --from=hugo /usr/bin/hugo /usr/local/bin/hugo
ADD package*.json .npmrc /app/
WORKDIR /app
RUN npm ci
ADD . /app
RUN npm run build

# Alpine's nginx-mod-http-brotli still ships ngx_brotli v1.0.0rc from 2020
FROM alpine:${ALPINE_VERSION} AS ngx-brotli
ARG NGX_BROTLI_COMMIT=53e0fb55f250f48fe80c0ddbf6c0f7103cdbaae1
RUN apk add --no-cache build-base cmake git linux-headers nginx pcre2-dev zlib-dev
WORKDIR /build
RUN git clone https://github.com/google/ngx_brotli \
  && git -C ngx_brotli checkout $NGX_BROTLI_COMMIT \
  && git -C ngx_brotli submodule update --init --depth 1 \
  && cmake -S ngx_brotli/deps/brotli -B ngx_brotli/deps/brotli/out \
    -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DCMAKE_POSITION_INDEPENDENT_CODE=ON \
  && cmake --build ngx_brotli/deps/brotli/out --target brotlienc brotlicommon -j"$(nproc)" \
  && NGINX_VERSION=$(nginx -v 2>&1 | sed 's|.*nginx/||') \
  && wget -qO- https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz | tar xz \
  && cd nginx-$NGINX_VERSION \
  && ./configure --with-compat --add-dynamic-module=../ngx_brotli \
  && make modules -j"$(nproc)" \
  && mkdir /build/modules && cp objs/ngx_http_brotli_*.so /build/modules/

FROM alpine:${ALPINE_VERSION}
WORKDIR /app
RUN apk add --no-cache nginx
COPY --from=ngx-brotli /build/modules/ /usr/lib/nginx/modules/
COPY --from=builder /app/public /app/public
COPY --from=builder /app/nginx.conf /app/redirects.map /app/
RUN chown -R nginx:nginx /app
CMD ["nginx", "-c", "/app/nginx.conf"]
EXPOSE 8080
