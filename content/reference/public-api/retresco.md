---
title: Retresco re-enrich
weight: 15
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Re-enrich documents with Retresco"
  scopes="retresco"
>}}

{{< added-in "release-2023-03" >}}

--query--
```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://server.livingdocs.io/api/v1/retresco/re-enrich" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF
  {
    "doc_ids": ["1", "2", "3"]
  }
EOF
```

--endpoint--
```
GET /api/v1/retresco/re-enrich
```

--parameters--

|Name|Type|Notes|
|-|-|-|
|doc_ids|array\<string\|number\>|A list of the desired document ids to re-enrich.|

--description--

Re-enriches documents with Retresco. This endpoint is only available for customers with a [Retresco integration enabled]({{< ref "/guides/integrations/retresco" >}}). The endpoint will return a 200 status code when the request is valid, then the Livingdocs Server will start the re-enrichment process in the background. The re-enrichment process can take up to 1s per document to re-enrich. If the provided document ids are not found, the re-enrich job will not be executed for that document.

Follow the [guide to configure the re-enrich webhook]({{< ref "/guides/integrations/retresco#re-enrich-documents" >}}) in Retresco's website.

Use Cases:

- Re-enrich documents after modifications in the Retresco entities, to update the document metadata. This endpoint should be called by Retresco when the user modifies entities that apply to one or multiple documents.

--response--
200
---
api/v1/retresco/re-enrich
---
```js
{
}
```
-----
400
---
api/v1/retresco/re-enrich
---
```js
{
  "status":400,
  "error":"Bad Request",
  "error_details":
  {
    "message":"The Retresco API has not been enabled (projectId=5)",
    "name":"ConfigurationError"
  }
}
```

{{< /api-example >}}
