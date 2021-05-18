---
title: Sitemaps & Feeds
tags: [sitemaps, feeds, sitemap, feed, guides]
menus:
  guides:
---

# Sitemaps

{{< added-in release-2021-06 >}}

The `livingdocs-server` ships with a set of APIs to automatically create Sitemaps. 

In your delivery you will need to link the Sitemap in a `robots.txt` file and set up the routing to call our APIs.


## **Sitemaps Index**
**You need to make sure to set up routes in your delivery calling the HTTP Endpoint**

The Sitemap index file points to Sitemap entry files that will contain 20000 entries by default.

The Sitemaps contain up to 20000 entries per month and will be split if there are more.

```xml
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.livingdocs.io/sitemap.2020-01.xml</loc>
    <lastmod>2020-01-31T22:54:23.125Z</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.livingdocs.io/sitemap.2020-02.xml</loc>
    <lastmod>2020-02-29T21:07:31.544Z</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.livingdocs.io/sitemap.2020-02.2.xml</loc>
    <lastmod>2020-02-29T21:07:31.544Z</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.livingdocs.io/sitemap.2020-02.3.xml</loc>
    <lastmod>2020-02-29T21:07:31.544Z</lastmod>
  </sitemap>
</sitemapindex>
```

**Scope**

API-Scope: Public API token with `read-scope`

**HTTP-API (GET)**

`${serverUrl}/sitemaps/index?contentTypes=articles&baseUrl=https://livingdocs.io/entriesPerPage=20000&access_token=publicApiToken`

**Parameters**
- **contentTypes** - comma separated list of content types you want to include in the Sitemap. Defaults to all content types if none are passed explicity
  - `?contentTypes=regular,pages`
  
- **baseUrl** - base url of the delivery host
  - `?baseUrl=https://livingdocs.io/`

- **entriesPerPage** - Customize how many Sitemap entries there will be per page. We recommend to not set anything and our default of 20000 entries will be applied.
  - `?entriesPerPage=20000` 

**Return value**

Returns an encoded XML string, use `decodeURIComponent()` to get a response equal to this example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://livingdocs.io/sitemap.2021-05.xml</loc>
    <lastmod>2021-05-18T16:56:31.633Z</lastmod>
  </sitemap>
</sitemapindex>
```

**Note**

_Several Sitemaps for various content types could be created if they are individually linked in the robots.txt file_

## **Sitemap entries**
**You need to make sure to set up routes in your delivery passing the date query param to our HTTP Endpoint**

The Sitemap entry files are consist of the documents in a set of 20000 by default. 

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.livingdocs.io/category/title-li.1</loc>
    <lastmod>2021-05-01T04:56:50.276Z</lastmod>
  </url>
  <url>
    <loc>https://www.livingdocs.io/category/title-li.2</loc>
    <lastmod>2021-05-01T05:35:32.920Z</lastmod>
  </url>
</urlset>
```

**Scope**

API-Scope: Public API token with `read-scope`

**HTTP-API (GET)**

`${serverUrl}/sitemaps/entries?date=2021-05&contentTypes=articles&baseUrl=https://livingdocs.io/&entriesPerPage=20000&access_token=publicApiToken`

**Parameters**
- **date** - for the specific month matching the schema from the sitemap index file
  - `?date=2021-05`
  
- **contentTypes** - comma separated list of content types you want to include in the Sitemap. Defaults to all content types if none are passed explicity
  - `?contentTypes=regular,pages`
  
- **baseUrl** - base url of the delivery host
  - `?baseUrl=https://livingdocs.io/`

- **entriesPerPage** - Customize how many Sitemap entries there will be per page. We recommend to not set anything and our default of 20000 entries will be applied.
  - `?entriesPerPage=20000` 

**Return value**

Returns an encoded XML string, use `decodeURIComponent()` to get a response equal to this example:
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.livingdocs.io/category/title-li.1</loc>
    <lastmod>2021-05-01T04:56:50.276Z</lastmod>
  </url>
</urlset>
```
