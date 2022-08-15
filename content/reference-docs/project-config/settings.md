---
title: Settings
weight: 1
menus:
  reference-docs:
    parent: Project Config
---

The settings contain general feature settings for your project, in particular:
- language settings
- copy configurations (e.g. copy web to print)
- plugin configurations
- webhooks
- include rendering

An example:
```js
settings: {
  handle: 'magazine',
  languages: {
    available: [
      {label: 'German', locale: 'de'},
      {label: 'English', locale: 'en'}
    ],
    defaultLanguage: {
      label: 'German',
      locale: 'de'
    },
    requiredOnCreation: true,
    translationWorkflow: true // shows "translate" icon on the toolbar
  },
  integrations: {
    // NOTE: imatrics uses our secure $secretRef method that will be used by all plugins in future
    imatrics: {
      enabled: true,
      apiEndpoint: 'https://some.url.com',
      user: 'yourUser',
      key: {
        $secretRef: {
          name: 'imatrics-20211027'
        }
      },
      minchars: 20,
      language: {
        name: 'German',
        value: 'de'
      }
    },
    retresco: {
      enabled: true,
      apiEndpoint: 'https://<subdomain>.rtrsupport.de/',
      username: '<username>',
      password: {
        $secretRef: {
          name: '<secret-name>'
        }
      },
      enableLiveAnalysis: true,
      // The component.directive combinations used to extract specific strings.
      // The first match will be used, but multiple values can be provided so that many
      // content types can be supported.
      titleMatches: ['header.title'],
      supertitleMatches: ['header.catchline'],
      teaserMatches: ['header.lead', 'p.text'],
      maxTextLength: 100 // {{< added-in release-2022-09 >}}
    },
    comyan: {
      enabled: true,
      buttonLabel: 'open comyan'
      mediaSystem: {
        additionalApiQueryString: 'foo=bar' // in case of proxy use, set `svcURLFormat=api`
        credentials: {
          username: 'user',
          password: {
            $secretRef: {
              name: '<secret-name>'
            }
          }
        },
        baseUrl: 'https://example.com/MediaSystem',
      },
      storageBaseUrl: 'https://storage.proxy.com/' // set this if comyan serves your images through a proxy
    },
    googleVision: {
      enabled: true,
      credentials: {
        type: 'service_account',
        project_id: 'your-project-123',
        private_key_id: '123',
        private_key: '-----BEGIN PRIVATEfoo bar-----END PRIVATE KEY-----\n',
        client_email: 'vision-api-dev@your-project-123.iam.gserviceaccount.com',
        client_id: '123',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/vision-api-dev%40your-project-123.iam.gserviceaccount.com'
      },
      confidenceCliff: 0.7,
      language: {
        label: 'German',
        locale: 'de'
      },
      shouldDetectWeb: true
    }
  },

  includeServices: [
    {
      handle: 'echo-service',
      rendering: {
        type: 'remote',
        url: 'http://localhost:3000',
        timeout: 3000
      },
      config: {
        foo: 'bar'
      },
      paramsSchema: [
        {
          type: 'li-text',
          handle: 'json',
          config: {
              maxLength: 200
          },
          ui: {
            component: 'liMetaTextareaForm',
            config: {
              label: 'Json',
              placeholder: '{ "foo": "bar" }'
            }
          }
        }
      ],
      defaultParams: {
        title: 'defaultTitle'
      },
      blockEditorInteraction: 'initial'
    }
  ],

  webhooks: {
    active: true,
    configurations: [
      {
        active: true,
        handle: 'publish-hook',
        label: 'Publish Hook',
        description: '',
        url: 'https://foo.bar.com/my-webhook',
        secret: 'foo-bar',
        events: ['document.published']
      }
    ]
  },

  copy: [{
    source: {
      channelHandle: 'web',
      contentType: 'regular'
    },
    targets: [
      {
        channelHandle: 'web',
        contentType: 'kolumne',
        metadata: {
          map: [
            'title',
            'headline',
            'authors',
            'description',
            'teaserImage',
            'publishDate'
          ]
        },
        componentConversions: [
          {
            match: 'article-container',
            exclude: true
          },
          {
            match: 'head',
            result: [
              {
                component: 'catchline',
                directives: {title: {takeFrom: 'flag'}}
              },
              {
                component: 'headline',
                directives: {title: {takeFrom: 'title'}}
              }
            ]
          }
        ]
      }
    ]
  }],

  // This setting can be overwritten in the `contentType` config
  imageSourcePolicy: [
    {provider: 'upload', enabled: true},
    {provider: 'hugo', enabled: false},
    {
      provider: 'url',
      enabled: true,
      hosts: ['//pixabay.com']
    }
  ],

  // setup the push notification feature if applicable
  // for this to work you also must:
  // 1. configure firebase in the server-wide `pushNotifications` configuration
  // 2. have a metadata field with the (exact) name `pushNotifications`
  // IMPORTANT: value can not contain more than three comma separated entries
  // see firebase conditions for more details.
  pushNotifications: {
    topics: [
      {
        handle: 'breaking-news',
        label: 'Breaking News',
        value: 'ios_de_breakingnews, android_de_breakingnews'
      },
      {
        handle: 'sport',
        label: 'Sport',
        value: 'ios_de_sports, android_de_sports'
      }
    ]
  }

  editMode: 'default'
}
```

## Languages / Translations

Livingdocs allows you to define documents in multiple languages as well as integrating a translation workflow to translate a document from one language to the other.

* `languages` defines which languages are available for documents.
* `defaultLanguage` set a default language for new documents created.
* `requiredOnCreation: true` flag, forces the user to choose a language before creating a document.
* `translationWorkflow: true` flag, enables the translation tools in Livingdocs (shows "translate" icon on the toolbar). This feature is only available for documents and pages (but not for a data-record).

If you activate the translation feature, then the `language` metadata plugin on a document will contain a `groupId`. You can use this in the `languageGroupId` parameter of the [Publication Search public API](https://edit.livingdocs.io/public-api) (under "Search Publications") call to retrieve all translations of a document.

## Integrations

In general all integrations are under the `integrations` key. We still have some legacy markup where the integration is directly on the root (`desknet`), but this will be moved in the future.

Available plugins are:
- Desk-Net (planning)
- iMatrics (text auto-tagging)
- Retresco (text auto-tagging)
- Google Vision (image auto-tagging)
- Comyan (external image storage)

### Imatrics

Imatrics already uses our new secure secrets feature that will in future be used by all plugins.
If you are using a seeding process, e.g. via the CLI then you need to manually generate a key and reference it in your project config:
```
// NOTE: you need to choose a unique name, an easy way is to append the current date to the string 'imatrics-' as done below
npx livingdocs-server secret-add --project=<handle> --name=imatrics-20211027 --value=secretvalue
// -> this adds a new secret 'imatrics-20211027' to our encrypted secret store
```
After you have created the secret in our system you need to reference it from your project config:
```
imatrics: {
  ...
  key: {
    $secretRef: {
      name: 'imatrics-20211027'
    }
  },
  ...
```

NOTE: for this to work, the name of the key needs to be unique for every update of the key. You can e.g. append the current date to ensure this or use any other form of unique string appending.

### Retresco

{{< added-in release-2022-03 block >}}

As with [iMatrics](#imatrics) above, the secure secrets feature is used to store the password for the Basic authentication used by the Retresco API. Please note that the integration must also be enabled in the [server config]({{< ref "/reference-docs/server-extensions/server-configuration/#integrations" >}}).

Please see the [Retresco integration guide]({{< ref "/guides/integrations/retresco" >}}) for details on how to setup the integration.

### Comyan

{{< added-in release-2022-05 >}}

As with [iMatrics](#imatrics) above, the secure secrets feature is used to store the password for the Basic authentication used by the Comyan API. Please note that the integration must also be enabled in the [server config]({{< ref "/reference-docs/server-extensions/server-configuration/#integrations" >}}).


## Includes

Includes allow you to render parts of your document from a remote location. For example you can create a component called `highcharts` that uses a service directive in the HTML lik `<div doc-include="highcharts"></div>`. Everything inside that div will be rendered from the remote service "highcharts".

The service itself is configured in the config (see example at the top).
The `handle` is the service name that is also used in the `doc-include` directive of the component.
In the `rendering` object you define the URL of your micro-service where the rendering is done as well as a timeout to indicate when it should fail.
`blockEditorInteraction` can be used to alter the interactivity of the include within the editor. Not setting this value, or selecting "No" in the UI, will result in the default experience of the include being rendered and interactive within the editor. Passing a value of `'always'` will block all interaction with the include in the editor, and using `'initial'` will block the first click only.
The `paramsSchema` generates a form for the editor in the sidebar when a respective component is selected. Editors can then enter (dynamic) configs that are sent to your micro-service. As of now the only supported form types are `li-boolean` and `li-text`, i.e. a checkbox and a text input.
The `defaultParams` object allows you to define defaults for the dynamic params of an include. Dynamic params are set by the user over a UI in the editor.
The `config` parameter can contain arbitrary (fixed) data that are sent to your micro-service.


## Webhooks

Webhooks allow you to receive notifications for events from within Livingdocs and react to them.

For details on the parameters see our [Webhooks]({{< ref "/reference-docs/server-extensions/webhooks" >}}) documentation.

## Copy Configuration

The copy configuration allows you to define the mapping of what content-types can be copied to what other content-types and how the metadata is mapped. A common example is the copy of a web article to the print article.

It's an array of copy definitions. Each definition first defines the `source`, i.e. the content-type that is copied (e.g. web article) and then the possible targets (e.g. print article), which metadata fields should be mapped from source to target and a set of rules on how to convert the components and directives (exlcude, simple copy or one to many).

For the enterprise version we also have a detailed [guide for copy and transform workflows]({{< ref "/guides/editor/document-copy" >}}).
