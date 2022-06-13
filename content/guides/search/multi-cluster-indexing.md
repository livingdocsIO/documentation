---
title: Multi Cluster Indexing
description: Configure multiple elasticsearch clusters that span multiple datacenters for higher resiliency.
weight: 3
---

{{< added-in release-2021-03 >}}

Livingdocs depends on Elasticsearch for search and filters of documents that are served to the Livingdocs Editor and the Public Api.

Normally, Elasticsearch clusters with more than 3 hosts already provide quite high availability. But such a cluster isn't exempt from a total failure in case the whole datacenter loses connectity. To protect systems against complete datacenter failures, Elasticsearch advises to index documents in parallel on two different isolated clusters.

Livingdocs supports indexing to multiple independent Elasticsearch clusters using the Elasticsearch index cluster configuration.
This can be used to greatly improve the resiliency when your data spans multiple datacenters.
It can also be used to do cluster upgrades by configuring a new cluster and index to it at the same time while the old cluster is still running.

### Configuration

Only the configurations specific to multi cluster indexing are listed here.
See the whole elasticIndex config object for other details: {{< ref "./custom-index.md" >}}

```js
elasticIndex: {
  clusters: [
    // A cluster entry supports the elasticsearch.js client configuration object.
    // The handle is required for livingdocs to identify a cluster.
    // For more details about the configuration,
    // please consult the elasticsearch client documentation. https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/basic-config.html
    {handle: 'dc-1', node: 'http://elasticsearch-datacenter-1:9200'},
    {handle: 'dc-2', node: 'http://elasticsearch-datacenter-2:9200'}
  ]
},

// The search host must be configured indepently from the indexing clusters.
// If you're indexing against multiple clusters, you might want to
// use a dns record or loadbalancer to point both clusters or a primary one with fallback.
search: {
  elasticsearchClient: {node: 'http://elasticsearch:9200'}
}
```

### CLI Tasks

To index to all the clusters, you can call the regular task:
```sh
livingdocs-server elasticsearch-index --handle li-documents
```

To index to a specific cluster, you can declare the `--cluster` argument:
```sh
livingdocs-server elasticsearch-index --handle li-documents --cluster=dc-1
```
