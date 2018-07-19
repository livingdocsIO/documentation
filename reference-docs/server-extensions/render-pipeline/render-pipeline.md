# Render pipeline
![untitled diagram](https://cloud.githubusercontent.com/assets/1951875/16261316/5c6f2e98-386b-11e6-98ba-eb336e3c5984.png)

### Includes

#### `li-beta`
This "replacing of includes" takes place int the `render-pipeline`. It's the box with the `after render` label in the diagram.
This feature was enabled in the `li-server` version `v28.6.0` by this PR: https://github.com/livingdocsIO/livingdocs-server/pull/981

#### `nzz-api`
There is also a `before-render` labeled box which is the strategy chosen by NZZ here:
https://github.com/nzzdev/livingdocs-api/pull/1197
This feature was enabled by this PR: https://github.com/livingdocsIO/livingdocs-server/pull/1034

####  `before render` vs `after render`
On the left-side of the diagram we are in a component world and in the right-side, after the rendering, we are in a HTML world.
As far as I understand in the multiple "pipes" (NZZ has 9): print channel pipe, web channel pipe etc... it is complicated to handle this unresolved `doc-include` component.
In the middle of the diagram NZZ wants to know exactly what are the structure and the content of all the components. They don't want to have a mystery component that passes through the `render-pipeline` without revealing itself.

So instead of parsing HTML and replacing `doc-include` by their rendition at the far end of the `render-pipeline` they crawl the component tree and replace `doc-include` component before hand.
