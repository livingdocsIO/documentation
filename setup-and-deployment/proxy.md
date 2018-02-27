## Running Livingdocs behind a proxy

Where applicable, Livingdocs respects the environment variables `HTTPS_PROXY` and `HTTP_PROXY` by default and routes all external requests through the given proxy.

```
HTTPS_PROXY=https://my.proxy.com
HTTP_PROXY=http://my.proxy.com
```

For more fine-grained control, you can adapt the proxy settings of each external service in your configuration file.


## Feature configurations influenced by proxy settings

If external storage is configured for features like `images` or `files` those sometimes need special configurations to work with a proxy.

For details see [file-storage-config](../reference-docs/server-configuration/file-storage-config.md)
