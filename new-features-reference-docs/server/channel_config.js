const channelConfig = {
  handle: 'web',
  label: 'Web',
  description: '...',
  language: 'de',

  enabledFeatures: [
    'documents',
    'menus',
    'categories',
    'lists'
  ],

  // Content Types
  contentTypes: [{
    handle: 'article',
    label: 'Article',
    description: '...',
    icon: {},

    // the ordering of the array doesn't matter.
    components: [{
      component: 'title',
      config: {}
    }, {
      component: 'image',
      config: {}
    }],

    wrapper: '<div doc-section="content"></div>'

    // the ordering of the array doesn't matter.
    components: [{
      structure: 'title',
      config: {}
      directives: {
        'title': {
          // directive config
        }
      }
    }, {
      component: 'image',
      config: {}
    }],

    // direct definition of the metadata properties
    metadata: [{
      property: 'title',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'please provide a short description'
      }
    }],

    // indirect definition through metadata structures:
    metadataStructures: [{
      structure: 'seo'
      config: {}
    }],

    defaultContent: {}

    // Do we still need the metadata form arrangement?
    // Can't we just merge it with the metadata?
    // Or maybe we can make it optional?
    metadataFormArrangement: []
  }],

  // Routing
  routing: {
    preview: 'http://localhost:9999/:slug'
  },

  // Routing
  import: {
    // used in drag & drop
    allowedImageHosts: ['//pixabay.com']
  }

  // Questions:
  // Do the image ratios belong into the channel?
}
