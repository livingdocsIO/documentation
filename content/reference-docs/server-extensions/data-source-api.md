---
title: DataSource API
weight: 6
menus:
  reference-docs:
    parent: Server Extensions
---

The DataSource API (or Data Source API) provides a simple way to fetch/transform any DataSource (e.g. a public gist or another URL) and provide the results to any server feature or use it in the editor as a data source for metadata or filters.

The current version supports binding a DataSource to a metadata field, which will be described in more detail in the example section.

## Supported Metadata UI Components

`liMetaSelectForm` supports this types
  - li-string-list
  - li-numeric-list
  - li-text
  - li-enum
  - li-integer

`liMetaMultiselectForm` supports this types
  - li-string-list
  - li-numeric-list

## Example - Bind a DataSource to a Metadata Field

You can register a DataSource (e.g. `labelValuePairDataSource`) and use it as dataProvider for a metadata field (e.g. `dummy`). In the publish screen you get a list of values (based on the results of the DataSource).

**Final result on the editor publish screen**

{{< img src="images/datasource-dropdown.png" alt="DataSource Dropdown" >}}

**Register a DataSource on the server**

```js
const dataSourcesApi = liServer.features.api('li-data-sources')

// register code on the server
dataSourcesApi.register({
  handle: 'labelValuePairDataSource',
  // result for labelValuePair = [{label, value}, ...]
  dataFormat: 'labelValuePair',
  // fetch data from your external service (or provide a static list)
  // projectId/userId is always passed (guaranteed by the server)
  // params will be passed by the requester (e.g. a metadata plugin on the editor which passes the documentId)
  async fetch ({projectId, userId, params}) {
    const fetchedData = {
      'categories': [
        {'id': '1', 'category': 'Bücher'},
        {'id': '2', 'category': 'News'},
        {'id': '3', 'category': 'Wirtschaft', isDefault: true},
        {'id': '4', 'category': 'International'}
      ]
    }

    // your returned data format must match with the 'dataFormat'
    return fetchedData.categories.map((i) => ({
      label: i.category,
      value: i.id,
      // optional - if true this is the initial value
      isDefault: !!i.isDefault
    }))
  }
})
```

**Bind a DataSource to a Metadata field in the content-type config on the server**

```js
// content-type config on the server
metadata = [{
  handle: 'dummy',
  // only 'li-enum' is supported
  type: 'li-enum',
  ui: {
    label: 'DataSource Example',
    // only 'liMetaSelectForm' is supported
    component: 'liMetaSelectForm'
  },
  config: {
    dataProvider: {
      // this is the dataSource handle registered on the server
      dataSource: 'labelValuePairDataSource'
    }
  }
}]
```
