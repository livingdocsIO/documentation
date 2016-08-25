# NZZ Standard Article Format


#### Docs

- [JSON format](docs/json-format.md) (work in progress)
- [HTML format](docs/html-format.md) (1. draft)


#### Examples

- [NZZ standard export JSON from livingdocs](examples/article_result.json)
- [Readable HTML excerpt from the above JSON](examples/article.html)


#### Displaying an article

We will provide a CSS file to use when displaying an article


#### Build the Livingdocs Design

To build the livingdocs design files in the `dist` folder you can
run the following commands:

Setup:

```bash
npm install
```

Build the design locally into the `dist/` folder:
```bash
npm run build
```

Publish the design (it will ask for the host and your credentials):
```bash
npm run publish-design
```