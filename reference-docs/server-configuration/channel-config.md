# Channel Configuration

## Summary

The channel configuration allows you to:

- describe general information
- define contentTypes
- define copy options
- configure the push notifications feature
- configure the multi-language feature

The contentType configuration is described in detail here: [contentType config](./content-type-config.md)


## Example channel configuration

The following sample configuration file illustrates all of the above.
```js
{
  // If a channel has the channel `name` 'web' the channel configuration with
  // the `handle` 'web' will be used.
  handle: 'web',
  editMode: 'default',

  // Multi-language
  // Important: Make sure to use ISO-639-1 compliant locale codes

  // defines the languages that a user can select for a document
  availableLanguages: [
    {
      'name': 'English',
      'value': 'en-US'
    }, {
      'name': 'German',
      'value': 'de-DE'
    }
  ],
  // used to create new documents
  defaultLanguage: {
    name: 'English',
    value: 'en-US'
  },

  // Content Types
  contentTypes: [{
    require('./path/to/one/content_type_config'),
    require('./path/to/another/content_type_config')
  }]

  // setup the push notification feature if applicable
  // for this to work you also must:
  // 1. configure firebase in the server-wide `pushNotifications` configuration
  // 2. have a metadata field with the (exact) name `pushNotifications`
  // IMPORTANT: value can not contain more than three comma separated entries
  // see firebase conditions for more details.
  pushNotifications: {
    topics: [{
      handle: 'breaking-news',
      label: 'Breaking News',
      value: 'ios_de_breakingnews, android_de_breakingnews'
    }, {
      handle: 'sport',
      label: 'Sport',
      value: 'ios_de_sports, android_de_sports'
    }]
  }

  // Copy Configuration
  copy: [{
    source: {
      channelHandle: 'web',
      contentType: 'gallery'
    },
    target: [{
      channelHandle: 'web',
      contentType: 'gallery'
      options: {
        copyUnknownComponents: false
      },
      metadata: {
        map: [
          {from: 'title', to: 'title'},
          'tasks',
          {from: 'author', to: 'description'}
        ]
      }
    }]
  }]
}
```
