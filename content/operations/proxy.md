---
title: Running Livingdocs behind a proxy
menu: operations
---

Where applicable, Livingdocs respects the environment variables `HTTPS_PROXY` and `HTTP_PROXY` by default and routes all external requests through the given proxy.

```
HTTPS_PROXY=https://my.proxy.com
HTTP_PROXY=http://my.proxy.com
```

For more fine-grained control, you can adapt the proxy settings of each external service in your configuration file.
