module.exports = {
  name: 'test',
  version: '3.0.0',
  author: 'livingdocs.io',

  components: [{
    name: 'header',
    label: 'Header',
    html: `
      <div>
        <h2 doc-editable="title">Title</h2>
        <img doc-image="teaser"/>
        <div>
          <span doc-editable="date">Date</span>
        </div>
      </div>
    `.trim()
  }]
}