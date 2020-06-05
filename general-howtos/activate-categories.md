# Setup Categories

The categories feature allows you to enable a newspaper specific system to handle routes as well as hierarchical metadata for content such as advertising campaigns or tracking codes. A typical category tree might look like the following:

```text
- home
- economics
  - business
  - domestic
  - international
- sport
  - soccer
  - tennis
```

Every entry in this tree will define paths for the associated pages as well as articles below it. Example page path: `mynews.com/sport/soccer` Example article path: `mynews.com/economics/domestic/an-seo-slug-123`

Articles will always contain the document id in the path \(123 in the example above\). Pages have to be resolved by the Livingdocs routing system.

## Setting up Categories

In order to setup categories over the UI, simply navigate to your "Project Setup", select "Categories / Routing" from the sidebar and click the "Setup Categories" button. This will setup:

* the routing system \(path patterns as described above\) on all articles and pages
* the categories plugin on all articles and pages
* the slug plugin on all articles

We recommend not to change the general structure of those plugins since we tested only this combination. You can of course customize the metadata plugins to:

* change labels and order
* make certain fields required
* include / exclude certain content-types from the categories feature \(simply delete all plugins on it\)

The UI allows you to do all of those things over the "Project Setup" screens in particular the subsections for the specific content-types.

If you are working on an Enterprise project with static configuration files, you can always make an account on edit.livingdocs.io make the respective settings with the UI, download the generated configuration JSON and copy paste from there to your static files. The structure of the JSON is exactly the same for static as for configurable projects.

## Querying categories and resolving routes

Route resolving is used if you want your delivery to know the document after a given route, e.g. when a ready puts in a link directly in the browser's address bar. Refer to the public API documentation for correct use: [https://edit.livingdocs.io/public-api](https://edit.livingdocs.io/public-api)

Querying categories is most useful if you want to get specific metadata, e.g. ad campaign ids for a category. You can use the inheritance parameter to inherit from parent categories. Refer to the public API Documentation for correct use: [https://edit.livingdocs.io/public-api](https://edit.livingdocs.io/public-api)

