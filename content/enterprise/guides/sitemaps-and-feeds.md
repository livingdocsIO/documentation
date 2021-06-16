---
title: Sitemaps & Feeds
tags: [sitemaps, feeds, sitemap, feed, guides]
menus:
  guides:
---

{{< added-in release-2021-06 >}}
# Sitemaps


The `livingdocs-server` ships with a set of APIs to automatically create sitemaps. The full (public) API specification can be found in our public API documentation at https://edit.livingdocs.io/public-api

This guide will focus on the setup of Sitemaps within a delivery and the downstream customizations that need to be done to set up Feeds.

__We provide a running minimal delivery, in the "Live Delivery Setup" section__
## **Robots.txt**
You will need to link the Sitemap and Feed in the robots.txt of your delivery
```
Sitemap: https://www.livingdocs.io/sitemap.xml
Sitemap: https://www.livingdocs.io/feed.xml
```

## **Sitemap index**
The Sitemap index points to individual months, that contain all the actual entries of a Sitemap.
Several Sitemaps for various content types could be created if they are individually linked in the robots.txt file.
## **Sitemap entries**

The Sitemap entries follow the schema `sitemap.YYYY-MM.xml` or if it has more than the suggested limit of entries it will be split into a separate file such as `sitemap.YYYY-MM.2.xml`. We suggest keeping the limits the livingdocs API provides.

## **Feeds**

Feeds are highly customizable and no there is no 'one-fits-it-all' solution. We will still outline a way to integrate Feeds using one of our helper methods for Feeds that builds upon the RSS 2.0 Specification

**Server Downstream**
You will need to add your own HTTP-API.

```js
// Register the feature
liServer.features.register('feeds', require('./feeds'))
```

```js
// Setup the Feature - ./feeds/index.js
module.exports = function (feature, server) {
  const searchManager = server.features.api('li-search').searchManager
  const sitemapsApi = server.features.api('li-sitemaps')

  const feedsApi = require('./feeds_api')({
    searchManager,
    sitemapsApi
  })

  const controller = require('./feeds_controller')({feedsApi})
  const routes = require('./feeds_routes')

  feature.registerResource({controller, routes})
}
```

```js
// Setup the Feature - ./feeds/feeds_routes.js
module.exports = {
  title: 'RSS Feeds',
  description: 'Feed endpoints',
  endpoints: [
    {
      path: 'custom/api/v1/feed',
      auth: 'public-api:read',
      method: 'get',
      action: 'getFeed'
    }
  ]
}
```

```js
// Setup the Feature - ./feeds/feeds_controller.js
module.exports = ({feedsApi}) => {
  return {
    async getFeed (req, res) {
      const {channelId, projectId} = req.verifiedToken
      const feed = await feedsApi.getFeed({channelId, projectId})
      return res.success(feed)
    }
  }
}
```

```js
// Setup the Feature - ./feeds/feeds_api.js
module.exports = ({searchManager, sitemapsApi}) => {
  return {
    async getFeed ({projectId, channelId}) {
      // gather the latest published documents with the 'article' contentType
      const res = await searchManager.searchPublications({
        projectId: projectId,
        channelId: channelId,
        contentTypes: ['article']
      })
      // render the XML
      const xml = sitemapsApi.renderFeedXml({
        title: 'Feed title',
        description: 'Feed description',
        language: 'de',
        copyright: 'Feed copyright',
        link: 'https://livingdocs.io/',
        pubDate: new Date(),
        lastBuildDate: new Date(),
        image: {
          url: 'https://example.com/foo',
          title: 'image title',
          description: 'image description',
          link: 'https://example.com/foo',
          width: '144',
          height: '400'
        },
        items: res.results.map((doc) => {
          return {
            title: 'document title',
            description: 'document description',
            pubDate: new Date(doc.createdAt),
            link: `https://livingdocs.io/article/${doc.documentId}`
          }
        })
      })
      return xml
    }
  }
}
```

**Result**
Note: This still result still needs to be consumed in the delivery, similar to the already implemented examples in the live delivery example in the next section.

```xml
<!-- example payload of the new downstream Feeds endpoint -->
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Feed title</title>
  <description>Alle Artikel von Livingdocs</description>
  <language>de</language>
  <copyright>copy-foo-right</copyright>
  <image>
    <url>https://example.com/foo-image</url>
    <title>foo-image-title</title>
    <description>some description for this image</description>
    <link>https://example.com/foo-image</link>
    <width>144</width>
    <height>400</height>
  </image>
  <pubDate>Wed, 19 May 2021 14:55:06 GMT</pubDate>
  <lastBuildDate>Wed, 19 May 2021 14:55:06 GMT</lastBuildDate>
  <link>https://livingdocs.io/</link>
  <item>
    <title>foo item title</title>
    <description>foo item description</description>
    <link>https://livingdocs.io/article/1</link>
    <pubDate>Tue, 01 Jan 2030 00:00:00 GMT</pubDate>
  </item>
</channel>
</rss>
```


## **Live Delivery Setup**
This live demo of a minimal delivery runs against a real livingdocs instance.

<h3 style="text-align: center;">Interactive minimal delivery example</h3>
<script src="https://embed.runkit.com"></script>
<div id="my-element"></div>
<script>var notebook = RunKit.createNotebook({
    // the parent element for the new notebook
    element: document.getElementById("my-element"),
    // (Read-only) access token is from a random livingdocs demo project running against development.
    environment: [{
      name: 'ACCESS_TOKEN', 
      value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InB1YmxpYy1hcGk6cmVhZCIsIm5hbWUiOiJBcGktdG9rZW4iLCJwcm9qZWN0SWQiOjEzMSwiY2hhbm5lbElkIjoxMzEsInR5cGUiOiJjbGllbnQiLCJqdGkiOiI2OTRlY2FmYi0wZGJlLTQ3MmQtOTk2ZC01ZjAwMTMwZTJiYWUiLCJjb2RlIjoiNjk0ZWNhZmItMGRiZS00NzJkLTk5NmQtNWYwMDEzMGUyYmFlIiwiaWF0IjoxNjIzNzYwMjAzfQ.X9IZpvThY-F7IWekGlDA1CX56ZdAMWwidx3QRZtTEPk'},
      {name: 'SERVER_URL', value: 'https://develop.livingdocs.io/proxy'}
    ],
    nodeVersion: '16',
    mode: 'endpoint',
    source: `const axios = require("axios");
const fastify = require("fastify")({ logger: true });
\ 
// redirect for demo purposes
fastify.get("/", async (req, rep) => rep.redirect("/sitemap.xml"));
\ 
// set up a robots.txt, linking to the Sitemap and Feed
fastify.get("/robots.txt", (req, rep) => {
    return \`
Sitemap: /feed.xml
Sitemap: /sitemap.xml
\`
})
\ 
// example route to retrieve the Sitemap index file
fastify.get("/sitemap.xml", async (req, rep) => {
  console.log({ token: process.env.ACCESS_TOKEN, url: process.env.SERVER_URL });
  const res = await axios({
    method: "get",
    headers: { Authorization: "Bearer " + process.env.ACCESS_TOKEN },
    url: process.env.SERVER_URL + "/api/v1/sitemaps/index?baseUrl=/",
    responseType: "text",
  });
  return res.data;
});
\ 
// example route to retrieve the Sitemap entries file
fastify.get("/sitemap.:date", async (req, rep) => {
  console.log(req.params);
  const res = await axios({
    method: "get",
    headers: { Authorization: "Bearer " + process.env.ACCESS_TOKEN },
    url:
      process.env.SERVER_URL +
      "/api/v1/sitemaps/entries?baseUrl=/&date=" +
      req.params.date.split(".")[0],
    responseType: "text",
  });
  return res.data;
});
\ 
// hardcoded mock output, as Feeds need to be implemented in the downstream server
fastify.get("/feed.xml", (req, rep) => {
  return \`<rss version="2.0">
<channel>
    <title>Livingdocs RSS Feeds Demo</title>
    <description>Livingdocs RSS Feeds Demo</description>
    <pubDate>Wed, 16 Jun 2021 11:05:53 GMT</pubDate>
    <lastBuildDate>Wed, 16 Jun 2021 11:11:53 GMT</lastBuildDate>
    <link>https://livingdocs.io/</link>
    <item>
        <title>Foo story title</title>
        <description>Foo story description</description>
        <link>https://ivingdocs.io/foo-article</link>
        <pubDate>Wed, 16 Jun 2021 11:05:53 GMT</pubDate>
    </item>
</channel>
</rss> 
\`;
});
await fastify.listen(3000);
`
})</script>
