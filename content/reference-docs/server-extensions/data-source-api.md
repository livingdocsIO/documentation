---
title: DataSource API
weight: 7
menus:
  reference-docs:
    parent: Server Extensions
---

The DataSource API (or Data Source API) provides a simple way to fetch/transform any DataSource (e.g. a public gist or another URL) and provide the results to any server feature or use it in the editor as a data source for metadata or filters.

The current version supports binding a DataSource to a metadata field, which will be described in more detail in the example section.

## Metadata plugins with DataSource support
- li-text
- li-string-list
- find more metadata plugins [here]({{< ref "/reference-docs/document/metadata/metadata-plugin-list" >}}) with `DataSource` support

## Example - Bind a DataSource to a Metadata Field

You can register a DataSource (e.g. `labelValuePairDataSource`) and use it as dataProvider for a metadata field (e.g. `dummy`). In the publish screen you get a list of values (based on the results of the DataSource).

**Final result on the editor publish screen**

{{< img src="images/datasource-dropdown.png" alt="DataSource Dropdown" >}}

**Register a DataSource on the server**

```js
const axios = require('axios')

liServer.features.register('data-sources', async function (feature, server) {
  const dataSourcesApi = server.features.api('li-data-sources')

  // register code on the server
  dataSourcesApi.register({
    handle: 'labelValuePairDataSource',
    // result for labelValuePair = [{label, value}, ...]
    dataFormat: 'labelValuePair',
    /**
     * Fetch data from your external service (or provide a static list)
     *
     * Errors are handled by default. If you know you're DataSource,
     *   you can throw your own error messages
     *
     * @param {Object} params
     * @param {Number} params.projectId
     * @param {Number} params.userId
     * @param {Object} params.params params will be passed by the requester
     *   (e.g. a metadata plugin on the editor which passes the documentId)
     * @returns {Object} {label, value, ?isDefault}
     */
    async fetch ({projectId, userId, params}) {
      const {data: fetchedData} = await axios({
        method: 'get',
        url: 'https://swissbib.ch/mapportal.json'
      })

      // your returned data format must match with the 'dataFormat'
      return fetchedData?.data.map((lib) => ({
        label: lib.group.label.de,
        value: lib.group.code
        // optional - if true this is the initial value
        // isDefault: true
      }))
    }
  })
})
```

**Bind a DataSource to a Metadata field in the content-type config on the server**

```js
// content-type config on the server
metadata = [
  {
    handle: 'dummy',
    type: 'li-text',
    ui: {
      label: 'DataSource Example'
    },
    config: {
      dataProvider: {
        // this is the dataSource handle registered on the server
        dataSource: 'labelValuePairDataSource'
      }
    }
  }
]
```
