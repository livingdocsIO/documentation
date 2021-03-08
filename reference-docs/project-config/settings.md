# Settings

The settings contain general feature settings for your project, in particular:
- language settings
- copy configurations (e.g. copy web to print)
- plugin configurations
- webhooks
- include rendering

An example:
```javascript
// projectConfig.settings: {}
"settings": {
    "handle": "magazine",
    "languages": {
      "available": [
        {
            "label": "German",
            "locale": "de"
        },
        {
            "label": "English",
            "locale": "en"
        }
      ],
      "defaultLanguage": {
        "label": "German",
        "locale": "de"
      },
      "requiredOnCreation": true,
      "translationWorkflow": true
    },
    "integrations": {
      "googleVision": {
        "enabled": true,
        "credentials": {
            "type": "service_account",
            "project_id": "your-project-123",
            "private_key_id": "123",
            "private_key": "-----BEGIN PRIVATEfoo bar-----END PRIVATE KEY-----\n",
            "client_email": "vision-api-dev@your-project-123.iam.gserviceaccount.com",
            "client_id": "123",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vision-api-dev%40your-project-123.iam.gserviceaccount.com"
        },
        "confidenceCliff": 0.7,
        "language": {
            "label": "German",
            "locale": "de"
        },
        "shouldDetectWeb": true
      }
    },
    "includeServices": [{
        "handle": "echo-service",
        "rendering": {
            "type": "remote",
            "url": "http://localhost:3000",
            "timeout": 3000
        },
        "config": {
            "foo": "bar"
        },
        "paramsSchema": [
            {
            "type": "li-text",
            "handle": "json",
            "config": {
                "maxLength": 200
            },
            "ui": {
                "component": "liMetaTextareaForm",
                "config": {
                "label": "JSON",
                "placeholder": "{ \"foo\": \"bar\" }"
                }
            }
            }
        ],
        "defaultParams": {
            "title": "defaultTitle"
        },
        "blockEditorInteraction": "initial"
    }],
    "webhooks": {
      "active": false,
      "configurations": [
        {
          "active": true,
          "handle": "publish-hook",
          "label": "Publish Hook",
          "description": "",
          "url": "https://foo.bar.com/my-webhook",
          "secret": "foo-bar",
          "events": [
            "document.published"
          ]
        }
      ]
    },
    "copy": [{
      "source": {
        "channelHandle": "web",
        "contentType": "regular"
      },
      "targets": [{
        "channelHandle": "web",
        "contentType": "kolumne",
        "metadata": {
            "map": ["title", "headline", "authors", "description", "teaserImage", "publishDate"]
        },
        "componentConversions": [{
          "match": "article-container",
          "exclude": "true"
        }, {
          "match": "head",
          "result": [{
            "component": "catchline",
            "directives": {"title": {"takeFrom": "flag"}}
          }, {
            "component": "headline",
            "directives": {"title": {"takeFrom": "title"}}
          }]
        }]
      }]
    }],
    "editMode": "default"
}
```

## Languages / Translations
*has UI support*

Livingdocs allows you to define documents in multiple languages as well as integrating a translation workflow to translate a document from one language to the other.

The `languages` key defines which languages are available for documents.
The `defaultLanguage` defines a default to create new documents in.
The `requiredOnCreation` flag, if true, forces the user to choose a language before creating a document.
The `translationWorkflow` flag, if true, enables the translation tools in Livingdocs.

If you activate the translation feature, then the `language` metadata plugin on a document will contain a `groupId`. You can use this in the `languageGroupId` parameter of the [Publication Search public API](https://edit.livingdocs.io/public-api) (under "Search Publications") call to retrieve all translations of a document.

## Integrations
*has UI support*

Since integrations typically require a correct connection to be establised we strongly advise to use our UIs under "Project Setup" to set them up.

In general all integrations are under the `integrations` key. We still have some legacy markup where the integration is directly on the root (`desknet` and `netlify`), but we will move those in the future.

Available plugins are:
- Desk-Net (planning)
- iMatrics (text auto-tagging)
- Google Vision (image auto-tagging)
- Comyan (external image storage)
- Netlify (static rendering)

## Includes
*has UI support*

Includes allow you to render parts of your document from a remote location. For example you can create a component called `highcharts` that uses a service directive in the HTML lik `<div doc-include="highcharts"></div>`. Everything inside that div will be rendered from the remote service "highcharts".

The service itself is configured in the config (see example at the top). We advise you to use the UI under "Project Setup" to setup the remote service.
The `handle` is the service name that is also used in the `doc-include` directive of the component.
In the `rendering` object you define the URL of your micro-service where the rendering is done as well as a timeout to indicate when it should fail.
`blockEditorInteraction` can be used to alter the interactivity of the include within the editor. Not setting this value, or selecting "No" in the UI, will result in the default experience of the include being rendered and interactive within the editor. Passing a value of `'always'` will block all interaction with the include in the editor, and using `'initial'` will block the first click only.
The `paramsSchema` generates a form for the editor in the sidebar when a respective component is selected. Editors can then enter (dynamic) configs that are sent to your micro-service. As of now the only supported form types are `li-boolean` and `li-text`, i.e. a checkbox and a text input.
The `defaultParams` object allows you to define defaults for the dynamic params of an include. Dynamic params are set by the user over a UI in the editor.
The `config` parameter can contain arbitrary (fixed) data that are sent to your micro-service.


## Webhooks
*has UI support*

Webhooks allow you to receive notifications for events from within Livingdocs and react to them. We advise you to use the UI under "Project Setup" to define your webhooks.

For details on the parameters see our [Webhooks Guide](../server-configuration/webhooks.md).

## Copy Configuration

The copy configuration allows you to define the mapping of what content-types can be copied to what other content-types and how the metadata is mapped. A common example is the copy of a web article to the print article.

It's an array of copy definitions. Each definition first defines the `source`, i.e. the content-type that is copied (e.g. web article) and then the possible targets (e.g. print article), which metadata fields should be mapped from source to target and a set of rules on how to convert the components and directives (exlcude, simple copy or one to many).

For the enterprise version we also have a detailed [guide for copy and transform workflows](../../guides/document_copy.md).