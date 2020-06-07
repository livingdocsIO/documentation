# Use Document Copy

## Introduction

If everything is set up correctly, one can open a document, click on "Copy" in the toolbar and a copy modal opens, e.g.

![image](https://user-images.githubusercontent.com/172394/45543556-158a2880-b815-11e8-9cb0-54db6ff6db08.png)

In the following sections you learn to know three different ways to copy a document.

### \(A\) Create a Simple Copy

If you want to make a simple 1:1 copy, e.g. from content-type `regular` to `regular`, you have to

* remove the copy config on the server \(if there is one\)
* enable the simple copy flag on the editor

```text
{
  app: {
    copy: {
      simpleCopyEnabled: true
    }
  }
}
```

### \(B\) Copy with a server copy configuration

For more advanced scenarios, it's possible to define a copy config on the server. The copy config supports a lot of scenarios, e.g.

* copy from content-type A to content-type B
* copy/convert a content-type into another content-type with another design
* convert livingdoc components
* map metadata

To get a rough understanding of the copy feature with a server configuration, read [Document Copy Basics](document_copy_feature.md#document-copy-basics) first. The [Copy Config Example](document_copy_feature.md#copy-config-example) section provides an overview of a basic copy config. To get a better feeling of what copy scenarios are supported, visit the [Copy Use Cases](document_copy_feature.md#copy-use-cases).

### \(C\) Transform a document \(use at own risk\)

With the `transform` operation, no new document is created. `transform` modifies the origin document and changes its content-type. This operation is only available with a copy config on the server and can be activated with `allowTransform: true`.

**Attention**, this feature can have consequences if you rely that
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

![copy-basics](https://cloud.githubusercontent.com/assets/172394/18782898/0beb0214-8189-11e6-98cc-e5e6728456de.png) \([original diagram ressource](https://www.draw.io/#G0B2rv2Pw26xPLT3hXQ3BsZU1lWlE)\)


The copy features can copy content into a new document of the same or a different `contentType`.
As `contentTypes` can use different components and have different metadata properties a config
configuration instructs the system how to deal with this differences. Also even if a copy is
used to create a new document of the same contentType some metadata properties may should not
be copied.


If you request a copy, the copy feature tries to find a config match in the channel config between the source\(channel/contentType\) and the target\(channel/contentType\). If there is a match, the copy feature makes a copy based on the configured `options` and `metadata` properties. If there is no match, the copy operation will be ignored.

The configuration of a transformation happens in two places:

1. the "setup config" in the `copy:` section of your main config that
defines which transformations for which contentType combinations are allowed and specifies the
location of the corresponding instruction config in `target.instructionPath`

2. the "instruction config" referenced above that holds the transformation instructions for a specific scenario


## Copy Config Example

#### Setup Config

```javascript
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

```javascript
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

### \(1\) Copy with an Instruction

#### \(1.1\) Design Copy

![copy-design-to-design](https://cloud.githubusercontent.com/assets/172394/18784379/000ff1e4-8192-11e6-9fa5-f837ed08d85d.png)

If you want to copy an article from `channel 1` -&gt; `channel 2`, you need a transformation between different components of different designs.

#### Example Config

```javascript
copy: [{
  source: {channelHandle: 'web', contentType: 'default'},
  targets: [{channelHandle: 'print', contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-to-eternal-bliss.js')
}]
```

#### \(1.2\) Layout Copy \(Layout L1 to Layout L2\)

![copy-layout-l1-to-layout-l2-modified-components](https://cloud.githubusercontent.com/assets/172394/18784528/043b54ec-8193-11e6-8b26-14322768fc27.png)

Usually a copy can be done **without** an instruction. If a design has several layouts and in the layouts there are the same type of component with a different name (e.g. in layout1 'title' and in layout2 'title-extended'), then this configuration approach is the correct one at the moment.

#### Example Config

```javascript
copy: [{
  source: {contentType: 'default'},
  targets: [{contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-default-to-basic-regular.js')
}]
```

### \(2\) Clone Copy

#### Layout L1 to Layout L2 - Ignore unknown components

![copy-layout-l1-to-layout-l2-unknown-copy-false](https://cloud.githubusercontent.com/assets/172394/18784494/b97da6bc-8192-11e6-9789-e02af83b5509.png)

This scenario copies all components from one contentType to another contentType.

#### Example Config

```javascript
copy: [{
  source: {contentType: 'default'},
  targets: [{contentType: 'regular'}],
  instructionPath: require.resolve('../conversions/basic-default-to-basic-regular.js')
}]
```
