---
title: Add Delivery Status
identifier: Add Delivery Status
weight: 14
renderTOC: false
menus:
  reference:
    parent: Public API
---

{{< api-example
  title="Add Delivery Status"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://edit.livingdocs.io/proxy/api/api/v1/documents/:documentId/addDeliveryStatus" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF
  {
    "reportId": "2SG2MAA9RwPn",
    "publicationId": 524,
    "deliveryHandle": "web",
    "status": "success",
    "message": "Message with <strong>html</strong>"
  }
EOF
```

--endpoint--
```
POST api/v1/documents/:documentId/addDeliveryStatus
```

--parameters--
| Name           | Type     | Required | Notes                                                                                           |
| -------------- | -------  | -------- | ----------------------------------------------------------------------------------------------- |
| :documentId    | integer  | x        |                                                                                                 |
| reportId       | string   |          | if provided this will update the record, otherwise it will create a new one with a new reportId |
| publicationId  | integer  | x        |                                                                                                 |
| deliveryHandle | string   | x        |                                                                                                 |
| status         | string   | x        | One of: "success", "failed", "in-progress"                                                      |
| message        | string   |          | String or sanitized HTML                                                                        |

--description--

This endpoint allows to provide updates for a document/publication regarding its status in an external delivery system (e.g. page build status in a static site generator).<br>
The response is a JSON object including the `reportId`.<br>
If you want to know more about how to setup a Delivery Build, you can find a guide [here]({{< ref "/guides/editor/publish-control/delivery" >}}).

##### Use Cases

- Report build status of publications in an external system like an e-paper which has a "build" stage involved

--response--
200
---
api/v1/documents/222/addDeliveryStatus
---
```js
{reportId: '0TAW2ORdNjuM'}
```

{{< /api-example >}}
