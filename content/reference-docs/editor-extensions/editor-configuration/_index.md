---
title: Livingdocs Editor Config
linkTitle: Editor Config
weight: 1
menus:
  reference-docs:
    parent: Editor Extensions
---

## Configuration Object

```js
{
  "host": "{{< a href="#host" title="<host config>">}}",

  "port": "{{< a href="#port" title="<port config>">}}",

  "loglevel": "{{< a href="#log-level" title="<loglevel config>">}}",

  "h2c": "{{< a href="#h2c" title="<h2c config>">}}",

  "http": "{{< a href="#http" title="<http config>">}}",

  "https": "{{< a href="#https" title="<https config>">}}",

  "compress": "{{< a href="#compress" title="<compress config>">}}",

  "assetsMaxAge": "{{< a href="#assets-max-age" title="<assets maximum age config>">}}",

  "redirectHttpToHttps": "{{< a href="#redirect-http-to-https" title="<redirectHttpToHttps config>">}}",

  "contentSecurityPolicy": "{{< a href="#content-security-policy" title="<contentSecurityPolicy config>">}}",

  "basePath": "{{< a href="#base-path" title="<basePath config>">}}",

  "api": "{{< a href="#api" title="<api config>">}}",

  "debug": "{{< a href="#debug" title="<debug config>">}}",

  "pages": "{{< a href="#pages" title="<pages config>">}}",

  "filterSets": "{{< a href="#filter-sets" title="<filterSets config>">}}",

  "pinComponents": "{{< a href="#pin-components" title="<pinComponents config>">}}",

  "signUp": "{{< a href="#sign-up" title="<signUp config>">}}",

  "document": "{{< a href="#document" title="<document config>">}}",
  
  "app": "{{< a href="#app" title="<app config>">}}",
  
  "embeds": "{{< a href="#embeds" title="<embeds config>">}}",

  "filters": "{{< a href="#filters" title="<filters config>">}}",

  "auth": "{{< a href="#auth" title="<auth config>">}}",

  "customIconNames": "{{< a href="#custom-icon-names" title="<customIconNames config>">}}",

  "iframely": "{{< a href="#iframely" title="<iframely config>">}}",

  "spellcheck": "{{< a href="#spellcheck" title="<spellcheck config>">}}",

  "textcount": "{{< a href="#textcount" title="<textcount config>">}}",

  "comments": "{{< a href="#comments" title="<comments config>">}}",

  "projectBuilders": "{{< a href="#project-builders" title="<projectBuilders config>">}}",

  "keyboardShortcuts": "{{< a href="#keyboard-shortcuts" title="<keyboardShortcuts config>">}}",

  "links": "{{< a href="#links" title="<links config>">}}",

  "metadata": "{{< a href="#metadata" title="<metadata config>">}}",

  "versionCheckTimeout": "{{< a href="#version-check-timeout" title="<versionCheckTimeout config>">}}",

  "editor": "{{< a href="#editor" title="<editor config>">}}",

  "showEmailOptions": "{{< a href="#show-email-options" title="<showEmailOptions config>">}}",

  "terms": "{{< a href="#terms" title="<terms config>">}}",

  "admin": "{{< a href="#admin" title="<admin config>">}}",

  "customBuilt": "{{< a href="#custom-build" title="<customBuild config>">}}"
}
```

## Host

Defines the editor host IP.

```js
  host: '::'
```

## Port

Defines the editor's port.

```js
  port: 9000
```

## LogLevel

Log level displayed in console for editor logger.

```js
  loglevel: 'warn'
```

## HTTP configuration

### h2c

```js
  // set this to true to use http/2 with h2c INSTEAD OF http/1.1
  // non-encrypted http/1.1 won't work anymore if you set this to true.
  h2c: false
```

### HTTP

Defines HTTP request timeout.

```js
  http: {
    timeout: 10000
  }
```

### HTTPS

```js
  // Use https and automatically enable http2 if the config is present.
  // In development, we can use self-signed certificates, in which case the
  // browser shows an untrusted certificate message.
  //
  // In chrome, you can enable a flag to accept invalid certificates on localhost
  //   chrome://flags/#allow-insecure-localhost
  //
  // https: {
  //   key: require('../cert').key,
  //   cert: require('../cert').cert
  // },
```

### Compress

```js
  // Enables gzip compression
  // Usually this is already done on the load balancer
  // and therefore this isn't needed in here
  compress: false
```

### Assets Max Age

```js
  // Configure client-side cache expiration
  // By default the expiration is set to one year as
  // files built using webpack contain a hash and are safe to cache
  assetsMaxAge: '1y',
```

### Redirect HTTP To HTTPS

```js
  // Override the path on which assets are served.
  // In case you're using a CDN, you can point it to the server root.
  // We can now access the editor over the regular domain of the editor
  // but the assets get loaded over the CDN.
  // assetsPublicPath: 'https://cdndomain/',

  // Redirects http to the https url
  // in case a `X-Forwarded-Proto: http` header is present
  redirectHttpToHttps: true
```

### Content Security Policy

```js
  // Set a custom Content-Security-Policy header on html pages
  contentSecurityPolicy: `frame-ancestors 'self';`,
```

### Base Path

```js
  // In case you want to launch the application in a subpath, you can define that here.
  // By default the app is available on `http://localhost:9000/`
  // By changing the basePath config to `/foo`, the whole app
  // is only available on http://localhost:9000/foo/
  basePath: '/',
```

### Api

```js
  api: {
    // Define `host` or `proxiedHost` that points to a livingdocs server instance.
    // host requires 'cors' to be enabled on the server:
    // host: '/proxy/api',
    // proxiedHost: 'http://server:9090',
    //
    // The preferred solution is to serve the livingdocs server instance on the same domain as the
    // editor to prevent CORS requests and have a better security as we
    // don't need to make the login cookies accessible on multiple domains.
    // Please expose the livingdocs server instance on `/proxy/api` and
    // then configure `host` to `/proxy/api`.
    //
    // Alternatively you can use `proxiedHost` to proxy to a dns name of an internal service
    // that's not accessible from the internet.
    // We'll automatically set up a http/websocket proxy on /proxy/api.
    // This proxy is meant for development and doesn't
    // provide the performance needed to serve many requests.
    version: '>=26.0.0'
  }
```

## Editor Testing

### Debug

```js
  // Get additional info about the application if set to true
  debug: false
```

## Editor customizations

### Pages

```js
  pages: {
    setHomepageEnabled: false
  }
```

### Filter Sets

```js
  filterSets: {
    isEnabled: false
  }
```

### Pin Components

```js
  pinComponents: {
    isEnabled: false
  }
```

### Sign Up

```js
  signUp: {
    analyticsEnabled: false,
    // Configure your analytics ID
    analyticsId: '************'
  }
```

### Document

```js
  document: {
    customPublicationDateField: 'publishDate'
  }
```

### App

See [Editing Features]({{< ref "/reference-docs/editor-extensions/editor-config-examples/editing-features.md" >}}) for more information.

```js
  app: {
    locale: 'en',
    dateTimeLocale: 'en-li',

    showConsoleMessages: true,
    imageMinWidth: 300,
    imageMinHeight: 100,
    disableCropFor: ['image/svg+xml'],
    docSearchListCount: 15,
    trackjs: '*********************', // Configure your TrackJS Account
    userPreferencesStore: 'sessionstore', // 'localstore', 'sessionstore'

    documentLists: {
      pageSize: 100
    },

    documentList: {
      pageSize: 100
    },

    copy: {
      simpleCopyEnabled: true
    },

    history: {
      pageSize: 100
    },

    useSplitPane: true,
    useSelectionMode: false,
    useHistoryMode: true,
    useHistoryStatistics: true,
    useHistoryRestore: true,
    undoRedoButtonsAreEnabled: true,
    useArchivedRestore: true,

    inlineListEditingIsEnabled: true,

    editable: {
      default: {
        locales: {
          'en': {
            quotes: ['“', '”'],
            singleQuotes: ['‘', '’']
          },
          'de': {
            // swiss quotes
            quotes: ['«', '»'],
            singleQuotes: ['‹', '›']
          },
          'de-DE': {
            quotes: ['„', '“'],
            singleQuotes: ['‚', '‘']
          }
        },
        bold: true,
        italic: true,
        superscript: false,
        subscript: false,
        link: true,
        specialChars: true,
        quotes: ['«', '»'],
        singleQuotes: ['‹', '›'],
        apostrophe: '’'
      },
      print: {
        locales: {
          'en': {
            quotes: ['“', '”'],
            singleQuotes: ['‘', '’']
          },
          'de': {
            // swiss quotes
            quotes: ['«', '»'],
            singleQuotes: ['‹', '›']
          },
          'de-DE': {
            quotes: ['„', '“'],
            singleQuotes: ['‚', '‘']
          }
        },
        bold: true,
        italic: true,
        superscript: true,
        subscript: true,
        link: true,
        specialChars: true,
        quotes: ['«', '»'],
        singleQuotes: ['‹', '›'],
        apostrophe: '’'
      }
    },

    // Sources:
    // https://www.compart.com/de/unicode/
    // https://typefacts.com/artikel/anfuehrungszeichen
    specialChars: [{
      name: 'general',
      label: 'General',
      charList: [{
        name: 'EN DASH', // 'Gedankenstrich'
        label: '–',
        caption: null,
        value: '–',
        description: 'Dash of 1 en length'
      }, {
        name: 'VULGAR FRACTION ONE HALF', // 'Bruchzahl ein Halb'
        label: '½',
        caption: null,
        value: '½',
        description: 'Fraction: one half'
      }, {
        name: 'VULGAR FRACTION ONE QUARTER', // 'Bruchzahl ein Viertel'
        label: '¼',
        caption: null,
        value: '¼',
        description: 'Fraction: one quarter'
      }, {
        name: 'CIRCLED PLUS', // 'Kreis mit Plus'
        label: '⊕',
        caption: null,
        value: '⊕',
        description: 'Circled Plus'
      }, {
        name: 'CIRCLED MINUS', // 'Kreis mit Minus'
        label: '⊖',
        caption: null,
        value: '⊖',
        description: 'Circled Minus'
      }, {
        name: 'MIDDLE DOT', // 'Mittelpunkt'
        label: '·',
        caption: null,
        value: '·',
        description: 'Middle dot, aka midpoint, interpoint'
      }]
    }, {
      name: 'white_spaces',
      label: 'White Spaces',
      charList: [{
        name: 'EN SPACE', // 'Halbgeviert'
        label: '◅···▻',
        caption: 'en',
        value: ' ',
        description: 'EN Space'
      }, {
        name: 'FOUR-PER-EM SPACE', // 'Viertelgeviert'
        label: '◅··▻',
        caption: '1/4',
        value: ' ',
        description: '1/4 EM Space'
      }, {
        name: 'SIX-PER-EM SPACE', // 'Sechstelgeviert'
        label: '◅·▻',
        caption: '1/6',
        value: ' ',
        description: '1/6 EM Space'
      }]
    }],

    editor: {
      propertiesPanel: {
        transformComponentEnabled: true
      }
    },

    useGravatar: false
  }
```

### Embeds

```js
  embeds: {
    options: {
      allowUnrecognizedEmbeds: false,
      addResponsiveContainer: true
    },

    // ???
    twitter: {
      language: false
    },

    iframe: {
      defaultRatio: 55
    }
  }
```

### Filters

See [Default Dashboard filter]({{< ref "reference-docs/editor-extensions/editor-config-examples/default-dashboard-filter.md" >}}) for filter examples.

```js
  filters: {
    articleList: {
      displayFilters: [
        'channels',
        'documentState',
        'contentType',
        'timeRange',
        'language',
        'category'
      ],
      defaultQueries: [
        {type: 'documentType', value: 'article'},
        {type: 'sortBy', value: 'relevance'}
      ],
      emptySearchQueries: [
        {type: 'documentType', value: 'article'},
        {type: 'sortBy', value: '-updated_at'}
      ]
    },
    // should be like documentListList -> same but in inline interface
    inlineArticleList: {
      displayFilters: [],
      defaultQueries: [
        {type: 'documentType', value: 'article'},
        {type: 'sortBy', value: 'relevance'}
      ],
      emptySearchQueries: [
        {type: 'documentType', value: 'article'},
        {type: 'sortBy', value: '-updated_at'}
      ]
    },
    pageList: {
      displayFilters: [
        {filterName: 'liDateTimeRange', config: {documentPropertyName: 'updated_at'}}
      ],
      defaultQueries: [
        {type: 'documentType', value: 'page'},
        {type: 'sortBy', value: 'relevance'}
      ],
      emptySearchQueries: [
        {type: 'documentType', value: 'page'},
        {type: 'sortBy', value: '-updated_at'}
      ]
    },
    menuList: {
      displayFilters: ['documentState', 'timeRange'],
      defaultQueries: [
        {type: 'sortBy', value: 'relevance'}
      ],
      emptySearchQueries: [
        {type: 'sortBy', value: '-updated_at'}
      ]
    },
    dataRecordList: {
      displayFilters: ['timeRange'],
      defaultQueries: [
        {type: 'documentType', value: 'data-record'},
        {type: 'sortBy', value: 'relevance'}
      ],
      emptySearchQueries: [
        {type: 'documentType', value: 'data-record'},
        {type: 'sortBy', value: '-updated_at'}
      ]
    }
  }
```

### Authorization

```js
  auth: {
    // Define a time in milliseconds to use rolling sessions
    // That way you can "prolong" the session expiration
    // A good interval would be about 1/2 of your session expiration time
    authTokenRenewalInterval: 0

    // Example of a custom login link
    // providers: [{
    //   id: 'custom',
    //   strategy: 'link',
    //   label: 'Log in via Custom Link',
    //   url: 'http://localhost:8080/auth/custom-login' // example url
    // }]
  }
```

### Custom Icon Names

```js
  // Support custom icons using a `<li-icon name="user"></li-icon>` component.
  customIconNames: []
```

### iFramely

```js
  iframely: {
    apiKey: '************',
    apiUrl: 'https://iframe.ly/api/iframely'
  }
```

### Spellcheck

```js
  spellcheck: {
    isEnabled: false,
    host: 'https://your-spellcheck-service.io'
  }
```

### Textcount

```js
  textcount: {
    isEnabled: false,
    showEditableCount: true
  }
```

### Comments

```js
  comments: {
    isEnabled: true,
    defaultForDocumentType: {
      article: true,
      page: true
    }
  }
```

### Project Builders

```js
  projectBuilders: {
    isEnabled: false
  }
```

### Keyboard Shortcuts

```js
  keyboardShortcuts: {
    backspace: 'prevent backspace',
    escape: 'esc',
    enter: 'enter',
    up: 'focus previous component',
    down: 'focus next component',
    '↓shift': 'start multiselect mode',
    '↑shift': 'end multiselect mode',
    '⌘+up, ⌃+up': 'move component up',
    '⌘+down, ⌃+down': 'move component down',
    '⌘+z, ⌃+z': 'undo',
    '⌘+y, ⌘+shift+z, ⌃+y, ⌃+shift+z': 'redo',
    '⌘+p, ⌃+p, ⌘+shift+p, ⌃+shift+p': 'print interactive view',
    '⌃+d': 'delete component'
  }
```

### Links

```js
  links: {
    allowRelativeUrls: false,
    allowAnchorLinks: false
  }
```

### Metadata

```js
  metadata: {
    fieldExtractorOnPage: false
  }
```

### Version Check Timeout

```js
  // Disable version checks
  // Version checks can only work if there is a version.json file built
  // during deployment.
  versionCheckTimeout: null
```

### Editor

```js
  editor: {
    imageCrop: {
      showSurroundingImage: 'always',
      surroundingImageOpacity: 0.25,
      zoomStep: 1.1
    },
    printView: {
      enableStepZooming: true,
      zoomStep: 1.2
    }
  }
```

### Show Email Options

```js
  showEmailOptions: true
```

### Terms

```js
  terms: {
    use: 'alpha-0.0.1',
    privacy: 'alpha-0.0.1'
  }
```

### Admin

```js
  admin: {
    showServiceInfo: true,
    showBilling: true
  }
```

### Custom Built

```js
  customBuilt: {
    deliveryLinksFunction: false,
    allowDownloadOfLiImageCrops: false
  }
```