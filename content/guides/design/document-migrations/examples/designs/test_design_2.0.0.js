module.exports = {
  name: 'test',
  version: '2.0.0',
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
        </div>
      </div>
    `.trim()
  }]
}