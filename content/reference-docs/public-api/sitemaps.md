---
title: Sitemaps
weight: 11
renderTOC: false
menus:
  reference-docs:
    parent: Public API
---

{{< api-example
  title="Get a Sitemap's Index (public-api:read)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/sitemaps/index?baseUrl=https://livingdocs.io" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/sitemaps/index
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:baseUrl|string|x|Base url of the delivery host. Example: `?baseUrl=https://livingdocs.io/`|
|:contentTypes|string||A comma-separated list of contentTypes to include in the sitemap. Example: `?contentTypes=regular,pages`|
|:entriesPerPage|string||Optional sitemap entry page size. Default 20000|

--description--

--response--
200
---
---
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

{{< /api-example >}}

{{< api-example
  title="Get a Sitemap's Entries (public-api:read)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/sitemaps/entries?baseUrl=https://livingdocs.io&date=2021-05" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/sitemaps/entries
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:baseUrl|string|x|Base url of the delivery host. Example: `?baseUrl=https://livingdocs.io/`|
|:date|string|x|Date for the specific month matching the schema from the sitemap index file. Example: `?date=2021-06` or `?date=2021-06.2`|
|:contentTypes|string||A comma-separated list of contentTypes to include in the sitemap. Example: `?contentTypes=regular,pages`|
|:entriesPerPage|string||Optional sitemap entry page size. Default 20000|

--description--

--response--
200
---
---
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

{{< /api-example >}}
