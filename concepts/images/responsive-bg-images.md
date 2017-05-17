# Responsive background images

## The problem

For any given image spot in a document a user will upload an image. When readers look at the document they will do so on different devices, e.g. a mobile phone or a desktop browser. Each of this devices will have different widths. Depending on the width you might want to show optimized versions of the image. An example: A user uploads a 5000px wide image (the original). When a reader looks at this image on a desktop browser of width 1000px then you would want to only load a 1000px variant of this image. If a reader looks at the image on a mobile phone with width 320px and a retina screen (2x) then you want to load a 640px variant of the image. The on-the-fly variants of an image are usually done with an image service such as resrc.it or imgIX.

For inline images (`img` tag) we have implemented a `srcset` approach (https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/). `srcset` is by now widely supported and it does not require us to write any additional Javascript. For background images the world is a bit more complicated

## Responsive background images

There are basically 3 ways to render responsive background images:
1. custom Javascript
2. `image-set`
3. media queries (regular CSS)

(1) is a good option but requires you to write and then maintain a custom Javascript that needs to be loaded with all your documents. Ideally, we don't want that maintenance burden. If you want to do this, this approach is pretty common and allows you to use the same definition markup as for `srcset` which is very nice: http://jsbin.com/garetikubu/edit?html,output

(2) is as of now pretty terrible. The support is bad (no IE, no Firefox). The best polyfill is https://www.npmjs.com/package/postcss-image-set-polyfill but also that doesn't help much because `image-set` only officially allows you the `x` syntax or dpi as a unit, it is thus not compatible with the `w` notation we use in `srcset`. The spec also mentions `pixel per cm` as a unit but I haven't seen it in use anywhere so I doubt the implementation.

(3) is currently the best option. Against common believe, when having multiple image variants in different media queries, not all of them are loaded but only the one for the active media query. We looked into the specs and did tests on Chrome and Safari.

Nevertheless, we did not implement (3) for now because media queries and CSS have their own shortcomings. Most notably: the Livingdocs framework generates the markup for each background image in a document. Since we don't know ahead of time what kind of CSS that would lead to, the framework normally adds the CSS at runtime in an inline style. This is not possible with media queries though (you can not add a media query inline). You can add a `style` tag to the document which works fine. Example:
```html
<style>
.bg-image {
  url("/foo.jpeg")
}
@media (max-width: 500px) {
  .bg-image {
    url("/foo.jpeg&w=500")
  }
}
</style>
<div class="bg-image"></div>
```

This would load a 500px wide image for devices up to 500px screen width and the original on all larger devices. Note that we hardcoded the url in the CSS. This is not nice since in that way we would need a separate `style` tag for each and every background image and we would need separate unique class names, e.g.:
```html
<style>
.bg-image-<unique-id> {
  url("/foo.jpeg")
}
@media (max-width: 500px) {
  .bg-image-<unique-id>{
    url("/foo.jpeg&w=500")
  }
}
</style>
<div class="bg-image-<unique-id>"></div>
```

We also looked into the `attr` method of CSS which could allow us to do it a bit nicer with only one `style` tag that is referenced from each background image. The idea:
```html
<style type="text/css">
.page-title {
  height: 700px;
  background: attr(data-bg url);
}
@media (max-width: 500px) {
  .page-title::before {
    content: attr(data-bg2x)
  }
  .page-title {
    height: 700px;
    background: attr(data-bg2x url);
  }
}
</style>

<div class="page-title" data-bg="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" data-bg2x="https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb">
```

Unfortunately, this does not work since `attr` currently only works to fill the `content` attribute of a pseudo element. Broader support is wished for for 2 years now, but there seems nothing on the horizon.

## Take away

From all this we decided not to do responsive background images, but simply provide a configuration on an image directive that allows a user to set a max-width for a background image.

```js
imageServiceConfig: {
  backgroundImage: {
    maxWidth: 2048
  }
}
```

This would advise the respective image service (e.g. ImgIX) to always add a `w=2048` URL parameter to all background images. If the original background image is larger it would downsize it. If it is smaller it would simply do nothing.

This is not ideal and certainly not responsive but it's an pragmatic solution given that background images in the designs we did so far are:
1. rare
2. if used, mostly full-width, i.e. large anyway

If this is not the case for your design you might need to find a different solution, e.g. a script-based solution such as resrc.it or the one outlined in the beginning of this aricle.
