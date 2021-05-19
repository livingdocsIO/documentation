---
title: Sitemaps & Feeds
tags: [sitemaps, feeds, sitemap, feed, guides]
menus:
  guides:
---

# Sitemaps

{{< added-in release-2021-06 >}}

The `livingdocs-server` ships with a set of APIs to automatically create Sitemaps. The full API specification can be found in our public API documentation at https://edit.livingdocs.io/public-api

This guide will focus on the setup of Sitemaps within a delivery and the downstream customizations that need to be done to set up Feeds.

## Robots.txt
**Minimal delivery setup example**
```
Sitemap: https://www.livingdocs.io/sitemap.xml
Sitemap: https://www.livingdocs.io/feed.xml
```

## **Sitemaps Index**


**Minimal delivery setup example**

```js
const fastify = require('fastify')({ logger: true })
const livingdocsAccessToken = process.env.ACCESS_TOKEN
const serverUrl = 'https://edit.livingdocs.io/proxy/api'

fastify.get('/sitemap.xml', async (req, rep) => {
  const res = await axios({
    method: 'get',
    headers: {Authorization: `Bearer ${livingdocsAccessToken}`},
    url: `${serverUrl}/sitemaps/index?baseUrl=https://livingdocs.io/`,
    responseType: 'stream'
  })

  return res.data
})
```

_Note: Several Sitemaps for various content types could be created if they are individually linked in the robots.txt file_

## **Sitemap entries**

**Minimal delivery setup example**

```js
const fastify = require('fastify')({ logger: true })
const livingdocsAccessToken = process.env.ACCESS_TOKEN
const serverUrl = 'https://edit.livingdocs.io/proxy/api'

fastify.get('/sitemap.:date(*)', async (req, rep) => {
  const res = await axios({
    method: 'get',
    headers: {Authorization: `Bearer ${livingdocsAccessToken}`},
    url: `${serverUrl}/sitemaps/entries?date=${req.params.date}&baseUrl=https://livingdocs.io/`,
    responseType: 'stream'
  })

  return res.data
})
```

## **Feeds**

Feeds are highly customizeable and no there is no 'one-fits-it-all' solution. We will still outline a way to integrate feeds using one of our helper methods for Feeds that builds up on the RSS 2.0 Specification

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
    // retrieve an article
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
      const res = await searchManager.searchPublications({
        projectId: projectId,
        channelId: channelId,
        contentTypes: ['article']
      })
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

**Minimal delivery setup example**


