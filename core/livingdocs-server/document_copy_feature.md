# Document Copy Feature

## Document Copy Basics
![copy-basics](https://cloud.githubusercontent.com/assets/172394/18782898/0beb0214-8189-11e6-98cc-e5e6728456de.png)
([original diagram ressource](https://www.draw.io/#G0B2rv2Pw26xPLT3hXQ3BsZU1lWlE))

If you want to setup and configure an article copy, you need a rough understanding of channels, designs, layouts and components.

Every `channel` has assigned a `livingdocs-design` (`D1, D2, ...`) and every design has one or more layouts (`L1, L2, ...`) with one ore more component (`C1, C2, ...`).
A copy can be configured in the source channel config, as you can see in the succeeding example.

If you request a copy, the copy feature tries to find a config match in the channel config between the source(design/layout) and the target(design/layout). If there is a match, the copy feature makes a copy based on the configured `options` and `metadata` properties. If there is no match, the copy operation will be ignored.

### Copy Config Example
```coffee
  # copy config in the source channel
  copy: [
    source:
      design: 'basic'
      layout: 'fantasy'
    target: [
      design: 'eternal-bliss'
      layout: 'regular'
    ]
    options:
      # Use an instruction if you want to transform
      # one component to another from one design to another
      instruction: require.resolve('../conversions/basic-to-eternal-bliss.coffee')
      # true = copy the component, even when the target layout doesn't know the component
      # false = ignore a component when the target layout doesn't know the component
      # NOT IMPLEMENTED: currently everything will be copied (is the same as `true`)
      copyUnknownComponents: false
      # Prefixes a component directive after a copy
      # This example adds the prefix 'Kopie von' to the directive 'title' in the component 'header'
      prefix: [
        component: 'header'
        directive: 'title'
        text: 'Kopie von '
      ]
    metadata:
      # copies source.title to target.catchline
      map: [{'from': 'title', 'to': 'catchline'}]
      # syntactic sugar for:
      # [
      #   {'from': 'title', 'to': 'title'},
      #   {'from': 'tasks', 'to': 'tasks'}
      # ]
      map: ['title', 'tasks']
      # NOT IMPLEMENTED: computes the new value based on a passed function
      map: [{'from': 'title', 'to': function(d) {return d.toUpperCase()}]
```


## Copy Use Cases

### (1) Copy with an Instruction
#### (1.1) Design Copy
![copy-design-to-design](https://cloud.githubusercontent.com/assets/172394/18784379/000ff1e4-8192-11e6-9fa5-f837ed08d85d.png)

If you want to copy an article from `channel 1` -> `channel 2`, you need a transformation between different components of different designs.

#### Example Config

```coffee
  copy: [
    source: {design: 'basic', layout: 'default'}
    target: [{design: 'eternal-bliss', layout: 'regular'}]
    options:
      instruction: require.resolve('../conversions/basic-to-eternal-bliss.coffee')
  ]
```

#### (1.2) Layout Copy (Layout L1 to Layout L2)
![copy-layout-l1-to-layout-l2-modified-components](https://cloud.githubusercontent.com/assets/172394/18784528/043b54ec-8193-11e6-8b26-14322768fc27.png)

Usually a copy in the same design can be done **without** an instruction. If a design has several layouts and in the layouts there are the same type of component with a different name (f.e. in layout1 'title' and in layout2 'title-extended'), then this configuration approach is the correct one at the moment.

#### Example Config

```coffee
  copy: [
    source: {design: 'basic', layout: 'default'}
    target: [{design: 'basic', layout: 'regular'}]
    options:
      instruction: require.resolve('../conversions/basic-default-to-basic-regular.coffee')
  ]
```

### (2) Clone Copy
#### (2.1) Layout L1 to Layout L2 - Ignore unknown components
![copy-layout-l1-to-layout-l2-unknown-copy-false](https://cloud.githubusercontent.com/assets/172394/18784494/b97da6bc-8192-11e6-9789-e02af83b5509.png)

This scenario copies all components from one layout to another layout in the same design, but ignores unknown components in the target design.

#### Example Config

```coffee
  copy: [
    source: {design: 'basic', layout: 'default'}
    target: [{design: 'basic', layout: 'regular'}]
    options:
      copyUnknownComponents: false
  ]
```

#### (2.2) Layout Layout L1 to Layout L2 - Copy unknown components => NOT IMPLEMENTED
![copy-layout-l1-to-layout-l2-unknown-copy-true](https://cloud.githubusercontent.com/assets/172394/18784520/f6b6308a-8192-11e6-82e5-0557dff706b8.png)

This scenario copies all components from one layout to another layout in the same design and keeps unknown components in the target design.

#### Example Config

```coffee
  copy: [
    source: {design: 'basic', layout: 'default'}
    target: [{design: 'basic', layout: 'regular'}]
    options:
      copyUnknownComponents: true
  ]
    ]
```


## Copy Algorithm
In this section I try to describe what copy config options result in which copy algorithm.

```
# pseudocode
if config matches source(design/layout) && target(design/layout)
  if config:copy:options:instruction
    return doCopyWithInstruction()
  if config:copy:options:copyUnknownComponents == true
    return doCopyEveryComponent()
  if config:copy:options:copyUnknownComponents == false
    # copyUnknownComponents == false is not implemented, therefore use the true mechanism
    return doCopyEveryComponent()
else
  doNothing()
```
