// A design structure can belong to a server or a project.
//
// Questions:
// - What is a design version?
const structure = {
  handle: 'li-basic-components',
  label: 'Livingdocs Components',
  description: '...',
  version: '1.0.0', // should we keep this? -> design feature could manage revisions
  author: 'Peter Pan',
  private: true, // only visible in the project it is defined

  components: [{
    handle: 'title',

    // optional
    groupLabel: 'Headers'

    // consider: is the ordering of directives importatnt in the structure?
    directives: [{
      handle: 'title',
      type: 'text',
      semantics: {
        content: 'title',
        htmlEquivalent: 'h2',
        exampleContent: 'Page Title'
      }
    }]
  }, {
    handle: 'p'
    directives: [{
      handle: 'text',
      type: 'text',
      semantics: {
        content: 'text',
        htmlEquivalent: 'p',
        exampleContent: 'Lorem ipsum dolorem.'
      }
    }]
  }, {
    handle: 'image'
    directives: [{
      handle: 'img'
      type: 'image'
    }, {
      handle: 'caption'
      type: 'text'
      semantics: {
        content: 'caption'
        references: 'img'
      }
    }, {
      handle: 'source'
      type: 'text'
      semantics: {
        content: 'copyright'
        references: 'img'
      }
    }]
  }, {
    handle: 'list'
    containers: [{
      handle: 'children'
      // Should this be defined in the structure?
      // Can it be overwritten in the design-config?
      allowedChildren: ['list-element']
    }]
  }, {
    handle: 'list-element'
    allowedParent: 'list'
    directives: [{
      handle: 'text'
      type: 'text'
      semantics: {

      }
    }]
  }]
}
