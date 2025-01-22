---
title: li-tree
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Tree with links, document references, and groups.
keywords:
  - anchor
  - anchor linking
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: false
  planningSystem: false
description: |
  The plugin `li-tree` lets you set up a tree with items of the 4 possible types `group`, `link`, `document`, `multilang`.

  * group -> a structural item without a link, just a label
  * link -> link to an URL, path or anchor
  * document -> link to another Livingdocs document
  * multilang -> a special kind of item that holds links or documents with a label per language
defaultUI: The main view lets you structure the menu. The detail let's you edit one menu entry.
storageFormat: |
  // schweiz -> link
  //   zürich -> link
  //   bern -> document
  // deutschland -> multilang
  //   hamburg -> link
  //   berlin -> document
  [
    {
      id: 'menu-schweiz',
      label: 'Schweiz',
      type: 'link',
      href: '/schweiz',
      items: [
        {
          id: 'menu-zuerich',
          label: 'Zürich',
          type: 'link',
          href: '/zuerich'
        },
        {
          id: 'menu-bern',
          label: 'Bern',
          type: 'document',
          reference: {
            id: '42',
            externalSystem: 'myExternalSystem', // optional, only if cross-project sharing enabled
            directiveId: 'doc-1a2b3c4f5:subtitle' // optional, only if anchor linking enabled
          }
        }
      ]
    },
    {
      id: 'menu-deutschland',
      type: 'multilang',
      translations: {
        de: {
          label: 'Deutschland'
        },
        en: {
          label: 'Germany'
        }
      },
      items: [
        {
          id: 'menu-hamburg',
          label: 'Hamburg',
          type: 'link',
          href: '/hamburg'
        },
        {
          id: 'menu-berlin',
          label: 'Berlin',
          type: 'document',
          reference: {
            id: '991'
          }
        }
      ]
    }
  ]
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-tree',
        config: {
          // common
          hideFromForm: false,                          // optional, default: false
          required: true,                               // optional, default: false
          requiredErrorMessage: 'Provide a value',      // optional
          // specific
          maxDepth: 3,                                  // default: undefined | tree depth
          allowedTypes: ['group', 'document', 'link'],  // default: ['group', 'document', 'link'], multilang is configured seperatly
          multilang: true,                             // optional, default: false

          // settings for document link
          document: {
            contentType: ['regular'],                   // default: all   | only be able to link contentType 'regular' | string or array of strings
            published: true                             // default: false | only be able to link published document
          }
        },
        ui: {
          label: 'foo',                                 // optional, takes camelized name otherwise
          config: {
            readOnly: true,                             // optional, default: false

            document: {                                 // define a Dashboard with filters
              useDashboard: 'my-dashboard',             //   reference to a custom dashboard
              baseFilters: [],                          //   https://docs.livingdocs.io/customising/advanced/editor-configuration/base-filter/
              displayFilters: []                        //   https://docs.livingdocs.io/customising/advanced/editor-configuration/display-filter/
            }
          }
        }
additionalConfig: |
  ### Multi-Language Handling

  {{< added-in "release-2023-07" block >}}

  To enable multi-language support in the tree, a new config property called `multilang` has been introduced.
  The available languages and the default language are inherited from the project's [Multi-Language configuration]({{< ref "/guides/editor/multi-language-content" >}}).

  When Multi-Language support is enabled for a tree, it appears as shown below:
  {{< img src="../images/li-tree-multilang.png" alt="Screenshot of the li-tree plugin displaying a multilang item." >}}

  In this case, the tree item is classified as `multilang` because it already contains two languages (de and en).

  However, when adding a new item to the tree, only the default language is initially included, and additional languages can be added as needed.

  **If only the default language is present, the item type will be either group, link, or document, but not multilang.**

  This behavior simplifies the process of enabling Multi-Language support for existing trees, as there is no need to migrate data.
  Similarly, when disabling Multi-Language support for a tree that has translations, the user interface will display only the default language, while the underlying data structure retains the translations.

  Tree items of type `multilang` can contain various types of links within their translations object.
  For example, the English link could refer to a document, while the German link could be a URL.
  It still adheres to the allowed types configuration, which means that mixed link types are possible, but only if they are included in the list of allowed types.

  If multi-language is enabled for `li-tree` and the Display Filters for the document selection dialog are specifying a language filter,
  the dashboard will automatically preselect the correct language filter for an item. Users can still change the language filter setting.

  ### Relative path and anchor hash

  To enable links that are relative paths (e.g. "/departments/technology") or anchor hashes (e.g. #more-on-this), turn on editor environment config `links.allowRelativeUrls` or `links.allowAnchorLinks`, but
  note that this is also enables the behavior for [inline-links]({{< ref "../../../../customising/advanced/editor-configuration/text-editing#options" >}}) within document content.



  ### Anchor Links (links to a section within a document)

  To enable anchor linking, [configure editable directives]({{< ref "../../../document/document-design/directives/editable#other" >}}) in design settings.
---
