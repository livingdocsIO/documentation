const livingdocs = require('@livingdocs/framework')

livingdocs.render({
  assets: {},
  templates: {
    'p': '<foo li-directive="text"></foo>'
  },
  removeEmtpyComponents: ['p'],
  metadata: {
    title: 'Document Title',
    author: 'by Dereck Strickland'
  }
})
