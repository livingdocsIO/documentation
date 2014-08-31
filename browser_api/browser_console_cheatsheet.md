
# Browser console cheatsheet

## Working with the current document

```javascript
// Get the currently loaded livingdocs-engine document
livingdoc = doc.editor.livingdoc;

// Get the design of the document
livingdoc.design
```


## Modifying a document

todo...


## Working with designs

```javascript
// Get all component identifiers of a design as an array
doc.design.get('timeline').list();

// Get an individual component template
doc.design.get('timeline').get('peephole')
```
