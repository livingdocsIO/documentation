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
curl -k -X POST "https://server.livingdocs.io/api/v1/documents/:documentId/addDeliveryStatus" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
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
| Name           | Type                                  | Required | Notes                                                                                                                                                            |
|----------------|---------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| :documentId    | integer                               | x        |                                                                                                                                                                  |
| reportId       | string                                |          | If provided, this will update the matching delivery build; otherwise, it will create a new one.                                                                  |
| publicationId  | integer                               | (x)      | Required for delivery builds of type `publication`                                                                                                               |
| deliveryHandle | string                                | x        |                                                                                                                                                                  |
| status         | string                                | x        | One of: "success", "failed", "aborted" ({{< added-in "release-2024-07" >}}), "in-progress"                                                                       |
| message        | string                                |          | String or sanitized HTML (supports `<em>`, `<strong>`, `<a>` and `<br>` tags)                                                                                    |
| userChoices    | Array<{label: string, value: string}> |          | An array of options given to the user to choose from. This parameter is only allowed when `status` is set to "in-progress". ({{< added-in "release-2024-07" >}}) |

--description--
This endpoint allows an external system to send updates about a delivery build to Livingdocs.

Delivery builds are initiated by users within the Livingdocs editor and can be configured to notify an external system. Through this endpoint, external systems can report back to Livingdocs regarding the status of a triggered task or request further clarification by providing user choices. For more information on how to set up and use delivery builds, please refer to our [guide]({{< ref "/guides/editor/publish-control/delivery" >}}).

--response--
200
---
api/v1/documents/222/addDeliveryStatus
---
```js
{reportId: '0TAW2ORdNjuM'}
```

{{< /api-example >}}
