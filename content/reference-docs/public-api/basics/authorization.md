---
title: Authorization
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Basics
---

To work with the public Api first go to the Project Settings page in the livingdocs editor and create an `AccessToken`.

Embed the `AccessToken` in the header of every HTTP request as shown below.


## Request HTTP headers

```
Accept: application/json
Authorization: Bearer ey1234
```

## Auth Example with Curl

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "http://localhost:9090/api/v1/project"
  -H "Accept: application/json"
  -H "Authorization: Bearer $ACCESS_TOKEN"
``` 

## Auth Example with Axios

```js
const axios = require('axios')
const token = 'ey1234'
const result = await axios.get('api/v1/project', {
  baseURL: 'http://localhost:9090',
  headers: {Authorization: `Bearer ${token}`},
  timeout: 20000
})
```
