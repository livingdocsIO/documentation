
# Document model 2.0

The general idea behind this model is better separation between the component and the tree structure.

Advantages of this approach are a much easier handling of diffs according to our editing model where each component is a separate entity. Changes in the tree structure will not result in large JSON patches. Also it will be very easy to identify and separate changes that change the structure of the document and changes that change content of individual components.

The individual components are also much easier to access this way. Getting a component by id could be done with very simple javascript methods in postgres for example.

The algorithms for conflict resolution would also become simpler. And so would extracting text, images or links and other info directly from the JSON. There are a lot of applications when we are not interested in the document structure.

For better readability this is in coffeescript instead of JSON:

```coffee
tree: [
    'doc-18fsfqsiq0',
    'doc-18fsfr5f50',
    'doc-18fsfra8r0'
  ]
components:
  'doc-18fsfqsiq0': 
    component: 'title'
    content:
      'title': 'Storytellers have more fun'
  'doc-18fsfr5f50':
    component: 'author'
    content:
      'author': 'Peter Bruckmann'
  'doc-18fsfra8r0':
    component: 'paragraph'
    content:
      'text': "Yet, if we look at the interesting people in our lives, I think we’ll find few of them have climbed Mount Everest or broken a wild mustang. Most have never wrestled an alligator or gotten embroiled in a covert operation. Most haven’t seen a whole lot of real excitement."
```

#### Nested Trees

This is how a nested tree could look like:

```coffee
tree: [
    { 
      id: 'doc-18fsfqsiq0'
      mainColumn: [
        'doc-18fsfra8r0',
        'doc-18rstua2a0'
      ]
      sidebar: [
        'doc-18faarafr0',
        'doc-18rsike3a0'
      ]
    },
    'doc-18fsfr5f50',
  ]
```

#### Track Changes Data

If we embed track change data with the component data. The complete change history will be embedded in the JSON patches.

The username could be stored to show the person who made the last change superfast.

The `jsonPatchId` could point to the JSON patch entry in the db. That way one could track down the whole history of an individual component pretty fast (without structural changes).

```coffee
components: [
  'doc-18fsfqsiq0': 
    component: 'title'
    content:
      'title': 'Storytellers have more fun'
    updated_at: '2012-06-01 19:45:37 GMT'
    updated_by:
      userId: '9372883939'
      username: 'Peter Bockheimer'
    jsonPatchId: '1aj9-49f1-18fs-xx0a'
]
```

#### Resources

Todo...

#### Embedded Documents

Here is an experiment with an embedded shared document.

```coffee
tree: [
    { 
      document: 'fi84-18fs-49f1-fiq0'
    },
    'doc-18fsfr5f50',
  ]
components: [
  'doc-18fsfqsiq0': 
    component: 'title'
    content:
      'title': 'Storytellers have more fun'
]
documents:
  'fi84-18fs-49f1-fiq0':
    linked: true
```

...or embedded:

```coffee
tree: [
    { 
      document: 'fi84-18fs-49f1-fiq0'
    },
    'doc-18fsfr5f50',
  ]
components: [
  'doc-18fsfqsiq0': 
    component: 'title'
    content:
      'title': 'Storytellers have more fun'
]
documents:
  'fi84-18fs-49f1-fiq0':
    embedded: { [here would be the whole document embedded] }
```
