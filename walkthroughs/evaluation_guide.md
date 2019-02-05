# Evaluation guide

## Short introduction to livingdocs
Livingdocs has 2 main applications, the livingdocs-editor and the livingdocs-server. For the livingdocs-server we need the following additional application:
- elasticsearch
- postgres
- redis
- Amazon s3 buckets
  - Image bucket
  - Design bucket
- Image service (Imgix)
- Pusher

Elasticsearch, Postgres and redis are started in a docker container. The other 3 are external services. For evaluation we already have added accounts for this 3 services in the config files. They are limited to a specific amount of data but this shouldn't be a problem for the evaluation.

For the livingdocs-server and livingdocs-editor we have a boilerplate which you can use to setup your own server and editor. These two repositories are private. Please contact us that you are interested to evaluate livingdocs so we can give you access to the repository.

## Setup
- Get the livingdocs-server-boilerplate repository (https://github.com/livingdocsIO/livingdocs-server-boilerplate)
- Get the livingdocs-editor-boilerplate repository (https://github.com/livingdocsIO/livingdocs-editor-boilerplate)
- Go through the setup documentation: [setup local development](../reference-docs/getting-started-with-local-development)
- After setup server and editor you should be able to login with a given user

## Design
At the moment you have the blank design without any assets on your design server which has his files on the S3 bucket. The next step is now to create your own design. 

[create design](../reference-docs/common-designs/create_designs)

## Metadata
The next step is to create your own metadata field with a own metadata plugin. 

[create metadata field](../reference-docs/common-designs/create_designs)

## doc-include
It can be important for your case that you can create components which can include rendered content. You can describe how the content should be rendered and use this doc-include in your components.

[create doc-include](../reference-docs/doc-includes/intro)

[embed teaser and list example](../reference-docs/doc-includes/embed_and_list)