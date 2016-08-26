# Livingdocs Framework
[ ![Codeship Status for upfrontIO/livingdocs-framework](https://codeship.com/projects/aa944530-595e-0133-1b3c-4255fd5efb39/status?branch=master)](https://codeship.com/projects/110000)
[![Coverage Status](https://coveralls.io/repos/github/upfrontIO/livingdocs-framework/badge.svg?branch=master&t=DNNHyg)](https://coveralls.io/github/upfrontIO/livingdocs-framework?branch=master)


The framework is the central piece of livingdocs and defines the APIs for manipulating, displaying and storing the document.

For a more detailed documentation see our [livingdocs documentation](https://github.com/upfrontIO/livingdocs). For a quick overview stay right here.

## Installation

You can install the livingdocs framework via npm.

```
npm install --save-dev @livingdocs/framework
```

This a private package on the npm registry. Please note that you need at least
npm@2 and read access to install this package.

## Usage

Load the necessary scripts into your browser.

```html
<!-- dependencies of livingdocs-framework -->
<script src="/jquery/jquery.js"></script>
<script src="/editable/editable.js"></script>

<!-- design -->
<script src="/designs/bootstrap/design.js"></script>

<!-- livingdocs-framework. yeah! -->
<script src="/livingdocs-framework.js"></script>
```

#### Global variable:

The engine then sets the global variable `doc`. Here you'll find the API of the `engine`.

#### Load a design into the engine:

```javascript
doc.design.load(design.bootstrap);
```
If you want to create your own design get started with the [livingdocs-design-boilerplate](https://github.com/upfrontIO/livingdocs-design-boilerplate) project.

#### Create a new livingdoc:

```javascript
var livingdoc = doc.new({
  design: 'bootstrap'
});
```

#### Create views:

Simply render a livingdoc into your current page:

```javascript
livingdoc.appendTo({host: '.article-container', interactive: false});
```

Create multiple views in iframes:

```javascript
var interactiveView = livingdoc.createView({host: '.editor-section', interactive: true});
var preview = livingdoc.createView({host: '.editor-preview'});
```

With the iframe technique you can isolate CSS or Javascript that is needed in your documents and also generate views that will work properly with responsive designs. There can only be one interactive view where the user can edit, but you can have as many readOnly views as you want to preview the content at different screen sizes at the same time.


#### Add content programmatically:

```javascript
// Create a component
var titleComponent = livingdoc.createComponent('title');
titleComponent.setContent('title', "My Title");

// Appned the component to the livingdoc
livingdoc.componentTree.append(titleComponent);
```

## Development

Tasks:

```bash
# build files
npm run build

# manually test the engine in the browser
npm start

# run all tests
npm test

# run tests in node environment
npm run test:node

# run tests in browser environment
npm run test:browser # in phantomJS
npm run test:watch # watch in phantomJS
npm run test:browser:all # in Chrome, Firefox and Safari
```

## Changelog

The changelog can be found on the [releases page](https://github.com/upfrontIO/livingdocs-framework/releases).

The changelog for version 2.1.1 and below can be found in the old
[Changelog.md](https://github.com/upfrontIO/livingdocs-framework/blob/f8f292a244d2860f3b1b2633ebca4914bfb2100a/Changelog.md) file.

## Licence

Copyright (c) 2016 Livingdocs AG

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software ('livingdocs-framework'), except when explicitly stated otherwise by Livingdocs AG
