---
title: Indexing
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Sitemaps
---

{{< api-example
  title="Get a Sitemap's Index"
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