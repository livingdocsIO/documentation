---
title: CLI
renderSummaries: true
renderTOC: false
weight: 6
menus:
  reference-docs:
    weight: 6
---

## Repo

{{< github "livingdocsIO/livingdocs-cli" "Livingdocs command line utility" >}}

## When to use the CLI

The `livingdocs-cli` is used to update a Livingdocs [Project Config](.././project-config). 

It's the only way of changing project config and components if you are using the [Livingdocs Service](https://edit.livingdocs.io/).

The CLI is not made to interact with the [Public API](.././public-api). For that you can call directly the API or use the [Node SDK](.././sdk).

## Installation

``` 
npm install -g livingdocs-cli
```

Check that the installation was successful.
```
livingdocs-cli --help
```

You can now start [managing project config](./managing-project-configs).

