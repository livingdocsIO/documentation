---
title: Open API
weight: 1
# renderTOC: false
menus: public-api
---

## OpenAPI

The [Livingdocs Public API]({{< ref "/reference/public-api" >}}) can be tested and consumed with an [OpenAPI v3 specification file]({{< openapi "/openapi.json" >}}).

Thanks to the [OpenAPI specification](https://spec.openapis.org/oas/v3.1.0.html), it's possible to quickly test the API using [Swagger UI](https://editor-next.swagger.io/?url={{< openapi "/openapi.json" >}}). And import the full collection of existing API endpoints into Insomnia or Postman.

The easiest way to import the current endpoint collection is from a URL, both Postman and Insomnia support it.

```
{{< openapi "/openapi.json" >}}
```

## Release specific versions

All available Versions:
{{< openapi-list >}}
