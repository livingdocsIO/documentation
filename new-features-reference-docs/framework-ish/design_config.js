// Notable things:
//
// wrapper placeholders
// doc-section -> li-directive


// Multiple skins can be used that extend each other.
config = {
  // css and images, todo: show by example how image referencing works
  // with default content
  assets: {},

  components: [{
    handle: 'title', // is it a good idea that this can be overwritten?
    structure: 'title' // same as the handle by default

    // config
    groupLabel: 'Headers' // replaces current groups (optional)

    // skin
    styles: [], // component properties (optional)
    css: {}, // allow to define inline css (optional)
    html: '<h1 li-directive="title"></h1>',

    // Define directive configuration
    directives: [{
      handle: 'title',
      formatting: ['bold'], // proposed config
      plainText: false,

      // This could be inserted by default if a component
      // is inserted manually.
      // This would replace `prefilledComponents`
      defaultContent: {} // proposed config
    }]
  }, {
    structure: 'p',
    groupLabel: 'Body Text',
    html: '<p li-directive="text"></p>',
    defaultParagraph: true
  }, {
    handle: 'articleTeaser',
    structure: 'articleTeaser',

    groupLabel: 'Teasers',
    html: '<div>...</div>',

    // Limit which content types can be referenced
    references: ['article']

    directives: [{
      handle: 'title',

      // teaser logic
      // todo: what is the difference to defaultContent? Only that it is
      // inserted during rendering and the other when manually inserted? (LP)
      templating: {
        insert: 'metadata.title'
      },

      editable: false // this is the setting used for a non-editable teaser
    }]
  }
}

// skin overwrite
skin = {
  assets: {},
  components: [{
    structure: 'title',
    styles: [],
    css: {},
    html: '<h1 li-directive="title"></h1>'
  }]
}

// in server
contentType = {
  defaultContent: []

  // prefilled components are similar to the defaultContent
  // and they should belong to the content type so these settings are close
  // together.
  // ...an alternative is to add a `defaultContent` option to text-diretives
  prefilledComponents: {}
}
