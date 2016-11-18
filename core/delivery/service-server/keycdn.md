# Deliver beta publications via keyCDN CDN

### Description
The CDN used is [keyCDN](https://www.keycdn.com/) and we use its [node.js library](https://github.com/keycdn/node-keycdn-api).

It needs:
- Extra environment configuration (already set for *dokku_production* and *dokku_staging*):
```coffeescript
  keycdn:
    enabled: true
    key: '*****'
    zone_id: <replace-me>
    zone_url: '<replace-me.livingdocs.io>'
```
- `KEYCDN__KEY` as an environment variable to overwrite the dummy value from above.
- A `zone_id` and a `zone_url`
### Scope
keyCDN is available through two zones with SSL, one for *dokku_production* with a zone alias url, one for *dokku_staging* with a default url:
- `https://production-server.hosted.livingdocs.io` to `https://cdn.livingdocs.io` (LE SSL)
- `https://staging-server.hosted.livingdocs.io` to `https://staging-5bfc.kxcdn.com` (shared SSL for <anything>.kxcdn.com)

### Links
- Issue: https://github.com/upfrontIO/livingdocs-planning/issues/185
- PR: https://github.com/upfrontIO/livingdocs-service-server/pull/111
