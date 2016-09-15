### Register includes in the Livingdocs Server

Introduced in `v28.9.0`


#### embed-teaser

The embed-teaser is a new component:
```html
<div doc-include="embed-teaser"></div>
```
It currently only exists in the [timeline design](https://github.com/upfrontIO/livingdocs-design-timeline/blob/master/source/components/Embeds/embed-teaser.html) version `0.6.0`, in order to use it, you should add this design repository in your configuration file:
```coffeescript
  designs:
    design_repository: 'https://api.livingdocs.io'
```
And finally choose this timeline design during the setup of the server.


#### Rendering

##### Description

The idea is to give the li-server access to a set of renderers. One renderer for each include.

So the li-server can transform this include:
```html
<ld-include data-include-service="embed-teaser" data-include-params="{"mediaId":2}"></ld-include>
```
into something like this:
```html
<a internal href="/articles/2.html">
  <div style="background-image: url(https://image.jpg)"></div>
  <div class="teaser__text">
      <h3><span>Mathieu Pavageau</span> <span> on Wed May 25 2016</span></h3>
    <h2>Rocket</h2>
  </div>
</a>
```
The rendering is needed in two locations:
- the includes preview in the editor
- the public API once the document is published

##### Registration of renderers

In the `nzz-api` or in `li-beta` you need to add a rendering method and its template (combination of those is a `service-renderer`) in the `plugins/includes` directory.
Examples of a `service-renderer`:
- https://github.com/upfrontIO/livingdocs-beta/pull/62
- https://github.com/nzzdev/livingdocs-api/pull/1134

Then you have to register your newly created `service-renderer` like this:
```coffeescript
  includesApi = liServer.features.api('li-includes')

  embedTeaserServiceRenderer =
    require('../../plugins/includes/embed-teaser/service-renderer')

  includesApi.registerServiceRenderer(
    'embed-teaser',
    embedTeaserServiceRenderer
  )
```
Finally, you have to set the channel configuration, in `app/channels/article_config.coffee`:
```coffeescript
module.exports =

  renditions:
    'web':
      output:
        'html':
          outputRenderer: new CheerioHtml()
          resolveIncludes: ['embed-teaser']
```
If you miss this final step, the rendering will only happen for the includes preview in the editor but NOT in the public API.

### Location in the `li-server`
![untitled diagram](https://cloud.githubusercontent.com/assets/1951875/16261316/5c6f2e98-386b-11e6-98ba-eb336e3c5984.png)


#### `li-beta`
This "replacing of includes" takes place int the `render-pipeline`. It's the box with the `after render` label in the diagram.
This feature was enabled in the `li-server` version `v28.6.0` by this PR: https://github.com/upfrontIO/livingdocs-server/pull/981

#### `nzz-api`
There is also a `before-render` labeled box which is the strategy chosen by NZZ here:
https://github.com/nzzdev/livingdocs-api/pull/1197
This feature was enabled by this PR: https://github.com/upfrontIO/livingdocs-server/pull/1034

####  `before render` vs `after render`
On the left-side of the diagram we are in a component world and in the right-side, after the rendering, we are in a HTML world.
As far as I understand in the multiple "pipes" (NZZ has 9): print channel pipe, web channel pipe etc... it is complicated to handle this unresolved `doc-include` component.
In the middle of the diagram NZZ wants to know exactly what are the structure and the content of all the components. They don't want to have a mystery component that passes through the `render-pipeline` without revealing itself.

So instead of parsing HTML and replacing `doc-include` by their rendition at the far end of the `render-pipeline` they crawl the component tree and replace `doc-include` component before hand.
