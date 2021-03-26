FROM livingdocs/node:15 as builder
ADD package*.json /app/
WORKDIR /app
RUN apk add hugo --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community && npm ci
ADD . /app
RUN npm run build

FROM alpine:3
WORKDIR /app
COPY --from=builder /app/public /app/public
COPY --from=builder /app/nginx.conf /app/nginx.conf
RUN apk add nginx nginx-mod-http-brotli && chown -R nginx:nginx /app
CMD ["nginx", "-c", "/app/nginx.conf"]
EXPOSE 8080
