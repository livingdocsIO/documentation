---
title: Hardware Requirements
description: Find a general evaluation and some example installations in here.
icon: laptop
menu: operations
tags: [operations]
---

The hardware requirements greatly depend on your use case. However, you can find a general evaluation and some example installations below.

## General assessment

We recommend to use the provided Docker containers, so there might be additional overhead for managing the images.

### Application

For high availability, you can place a load balancer in front of multiple instances of both the server and editor.

#### Editor

The Livingdocs Editor's CPU requirements are similar to a small Node.js application. One Editor process requires ~200MB of memory and its disk storage requirements are minimal due to low application footprint.

#### Server

The Livingdocs Server's CPU requirements can be compared to a regular Node.js application. One Server process requires ~500MB of memory. Disk is not an issue since the application footprint is low and uploaded assets are stored in the Cloud. You might reach limitations earlier in the Server compared to the Editor. Limitations will depend on the number of users and the tasks performed.
If you expect a lot of traffic on the assets, please consider adding a CDN in your storage solution.
We recommend placing a CDN in front of the Server API to cache publications for the frontend and lower requests on the database.

### Databases

The requirements for the databases will depend greatly on the amount of data you want to store and number of transactions done by users and developers. Depending on your requirements, you might want to consider replication strategies for the database.

#### Postgresql

The database requirements are similar to regular Postgres installations. Please refer to [Postgres hardware guide](https://wiki.postgresql.org/wiki/Performance_Optimization) for high performance optimization.

#### Elasticsearch

Elasticsearch is a memory demanding process compared to the rest modules of the stack, but it should not have high CPU usage. Elasticsearch provides a good guide on [Elasticearch's hardware requirements](https://www.elastic.co/guide/en/elasticsearch/guide/master/hardware.html).

### Services

#### Cloud storage

The storage your installation needs is directly coupled to the documents (images, videos and files) you upload and store. Cloud storage is easily scalable, so you should not expect any troubles here.

## Real life examples

Below you can find an overview of real life installations.

### Minimum requirements

We are running Livingdocs in a managed Kubernetes instance for development purposes. This can be interpreted as the minimum requirements (no high availability and limited performance requirements).

| Service                      | Specs                            |       |
| :--------------------------- | :------------------------------- | ----- |
| **Azure Kubernetes Service** |
|                              | Instances                        | 3     |
|                              | vCPU                             | 4     |
|                              | Memory                           | 16 GB |
|                              | SSD                              | 32 GB |
| **Editor**                   | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 2     |
| **Server**                   | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 3     |
| **Elasticsearch**            | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 2     |
| **Redis**                    | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 2     |
| **Postgres**                 | Azure Database for PostgreSQL    |
|                              | Instance                         | D2ds  |
|                              | vCPU                             | 2     |
|                              | Storage                          | 64 GB |
| **Storage**                  | Azure Blob Storage               |

Most services are running within Kubernetes except PostgresSQL and Storage.

### Scaled production example Azure

Below you can find an example production setup hosted in Azure without the delivery system.

- 100-150 concurrent journalists working in the editor
- ~1M documents in the database
- Planning to import 1.6m documents. The import itself is expected to be heavy on the servers, but no massive scaling required for the daily operations
- The system includes a shared development/staging environment and production environment with the following specifications.

| Service                      | Specs                            |                                   |
| :--------------------------- | :------------------------------- | --------------------------------- |
| **Azure Kubernetes Service** |
|                              | Instances                        | 6 (3 dedicated for Elasticsearch) |
|                              | vCPU                             | 4                                 |
|                              | Memory                           | 16 GB                             |
|                              | SSD                              | 32 GB                             |
| **Editor**                   | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 2                                 |
| **Server**                   | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 3                                 |
| **Elasticsearch**            | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 3                                 |
| **Redis**                    | Azure Kubernetes Service Cluster |
|                              | Replicas                         | 2                                 |
| **Postgres**                 | Azure Database for PostgreSQL    |
|                              | Instance                         | 2                                 |
|                              | vCPU                             | 4                                 |
|                              | Memory                           | 64 GB                             |
| **Storage**                  | Azure Blob Storage               |
