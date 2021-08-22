---
title: Document Copy
description: Set up the livingdocs server configuration to support copying content into other content types.
weight: 2
---

## Introduction

If everything is set up correctly, one can open a document, click on "Copy" in the toolbar and a copy modal opens, e.g.

{{< img src="copy-article.png" alt="image" >}}

In the following sections you learn to know three different ways to copy a document.

### (A) Create a Simple Copy

If you want to make a simple 1:1 copy, e.g. from content-type `regular` to `regular`, you have to
- remove the copy config on the server (if there is one)
- enable the simple copy flag on the editor

```js
{
  app: {
    copy: {
      simpleCopyEnabled: true
    }
  }
}
```

### (B) Copy with a server copy configuration

For more advanced scenarios, it's possible to define a copy config on the server. The copy config supports a lot of scenarios, e.g.
  - copy from content-type A to content-type B
  - copy/convert a content-type into another content-type with another design
  - convert livingdoc components
  - map metadata

To get a rough understanding of the copy feature with a server configuration, read [Document Copy Basics](#document-copy-basics) first. The [Copy Config Example](#copy-config-example) section provides an overview of a basic copy config. To get a better feeling of what copy scenarios are supported, visit the [Copy Use Cases](#copy-use-cases).

### (C) Transform a document (use at own risk)

With the `transform` operation, no new document is created. `transform` modifies the origin document and changes its content-type. This operation is only available with a copy config on the server and can be activated with `allowTransform: true`.

**Attention**, this is feature can have consequences if you rely that
the `contentType` not to change after creation. E.g. if you have code in the
downstream that triggers an action when a document is first published
if the document has a certain contentType.

Project config `/settings`
```js
copy: [{
  source: {
    contentType: 'fantasy'
  },
  targets: [{
    contentType: 'another-content-type',
    allowTransform: true
  }]
}]
```


## Document Copy Basics

{{< img src="copy-basics.png" alt="copy-basics" >}}<br/>
([original diagram ressource](https://www.draw.io/#G0B2rv2Pw26xPLT3hXQ3BsZU1lWlE))

The copy features can copy content into a new document of the same or a different `contentType`.
As `contentTypes` can use different components and have different metadata properties a config
configuration instructs the system how to deal with this differences. Also even if a copy is
used to create a new document of the same contentType some metadata properties may should not
be copied.


If you request a copy, the copy feature tries to find a config match in the channel config between the source(channel/contentType) and the target(channel/contentType). If there is a match, the copy feature makes a copy based on the configured `options` and `metadata` properties. If there is no match, the copy operation will be ignored.

The configuration of a transformation happens in two places:

1. the "setup config" in the `copy:` section of your main config that
defines which transformations for which contentType combinations are allowed and specifies the
location of the corresponding instruction config in `target.instructionPath`

2. the "instruction config" referenced above that holds the transformation instructions for a specific scenario


## Copy Config Example

#### Setup Config

```js
// copy config in the source channel
copy: [{
  source: {
    contentType: 'fantasy'
  },

  targets: [{
    contentType: 'regular',

    // Path to a config of instructions to be applied when transforming one component to another
    instructionPath: require.resolve('../conversions/basic-to-eternal-bliss.js')

    // Metadata config
    metadata: {
      map: [
        // copies source.title to target.catchline
        {'from': 'title', 'to': 'catchline'},

        // copies systemdata.id to target.copySourceId.
        {'from': 'systemdata.id', 'to': 'copySourceId'},

        // syntactic sugar for:
        // [
        //   {'from': 'title', 'to': 'title'},
        //   {'from': 'tasks', 'to': 'tasks'}
        // ]
        'title', 'tasks',

        // NOT IMPLEMENTED: computes the new value based on a passed function
        {from: 'title', to: function(d) {return d.toUpperCase()}}
      ]
    },
    // a document can be transformed
    allowTransform: true
  }]
}]
```

#### Instruction Config

```js
module.exports = {
  from: 'basic@x.x.x',
  to: 'eternal-bliss@1.6.0',

  // Instructions on which components/directives are transformed to which in the target design
  componentConversions: [{

    // Component with multiple directives
    match: 'header'
    result: [{
      component: 'subtitle',
      directives: {
        'title': {takeFrom: 'catchline'}
      }
    }, {
      component: 'headline'
      directives: {
        'title': {takeFrom: 'title'}
      }
    }]
  }, {

    // Example of a custom transformation using the framework API on the matched component
    match: 'image',
    process: ({matchedComponent, resultDoc}) => {
      component = resultDoc.createComponent('image')
      imageDirective = matchedComponent.directives.get('image')
      imageDirective.copyTo(component.directives.get('src'))
      component.setContent('text', matchedComponent.getContent('caption'))

      conversionLog.addImage({
        livingdoc: resultDoc,
        id: component.id,
        data: imageDirective.getContent()
      })

      return [component]
    }
  }, {

    // Excluded components are ignored during copying:
    match: 'responsive-image',
    exclude: true
  }, {

    // OPTIONAL: matches all components without instructions and copies or excludes them.
    // CAREFUL: if you copy all components, they have to be defined in both designs!
    match: '*',
    copy: true // OR exclude: true
  }],


  // Prefixes a component directive after a copy
  // This example adds the prefix 'Kopie von' to the directive 'title' in the component 'header'
  prefix: [{
    component: 'header',
    directive: 'title',
    text: 'Kopie von '
  }]

  // Allows for custom changes on the target document after the copy is done just before it is saved,
  // useful if the other options in the copy API are too limiting
  afterConversion: ({sourceMetadata, convertedDocument}) => {
    return doCustomStuff({sourceMetadata, convertedDocument})
  },

  // true = copy the component, even when the target contentType doesn't know the component
  // false = ignore a component when the target contentType doesn't know the component
  // NOT IMPLEMENTED: currently everything will be copied (is the same as `true`)
  copyUnknownComponents: false
}
```


## Copy Use Cases

### (1) Copy with an Instruction
#### (1.1) Design Copy
{{< img src="copy-design-to-design.png" alt="copy-design-to-design" >}}

If you want to copy an article from `channel 1` -> `channel 2`, you need a transformation between different components of different designs.

#### Example Config

```js
copy: [{
  source: {channelHandle: 'web', contentType: 'default'},
  targets: [{channelHandle: 'print', contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-to-eternal-bliss.js')
}]
```

#### (1.2) Layout Copy (Layout L1 to Layout L2)
{{< img src="copy-layout-l1-to-layout-l2-modified-components.png" alt="copy-layout-l1-to-layout-l2-modified-components" >}}

Usually a copy can be done **without** an instruction. If a design has several layouts and in the layouts there are the same type of component with a different name (e.g. in layout1 'title' and in layout2 'title-extended'), then this configuration approach is the correct one at the moment.

#### Example Config

```js
copy: [{
  source: {contentType: 'default'},
  targets: [{contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-default-to-basic-regular.js')
}]
```

### (2) Clone Copy
#### Layout L1 to Layout L2 - Ignore unknown components
{{< img src="copy-layout-l1-to-layout-l2-unknown-copy-false.png" alt="copy-layout-l1-to-layout-l2-unknown-copy-false" >}}

This scenario copies all components from one contentType to another contentType.

#### Example Config

```js
copy: [{
  source: {contentType: 'default'},
  targets: [{contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-default-to-basic-regular.js')
}]
```
