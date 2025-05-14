---
title: 'Removal of Menu Tool'
type: changelog-entry
weight: 1

change:
  date: 2025-05
  type: breaking-change
---

The Menu Tool has been removed, along with its [public API endpoint]({{< ref "/reference/public-api/menus/#get-menus-for-a-channel" >}}). As a result, the following endpoints no longer exist:

❌ `GET` `/api/v1/menus/:channelHandle?`  
❌ `GET` `/api/beta/menus/:channelHandle?`  
❌ `GET` `/api/2025-03/menus/:channelHandle?`  

We suggest migrating your menus to data records. For detailed instructions on setting them up, refer to our [guide]({{< ref "/guides/editor/menus" >}}).