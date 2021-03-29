module.exports = {
  name: 'test',
  version: '1.0.0',
  author: 'livingdocs.io',

  components: [{
    name: 'header',
    label: 'Header',
    html: `
      <div>
        <h2 doc-editable="title">Title</h2>
        <img doc-image="image"/>
        <div>
          <span doc-editable="date">Date</span>
          <span doc-editable="author">Author</span>
        </div>
      </div>
    `.trim()
  }]
}