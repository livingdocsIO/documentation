---
title: Table Dashboard Cells
weight: 302
---

## Motivation

The Table Dashboard introduced in March 2022 includes a set of upstream table dashboard cell components designed to cover the majority of customer use cases. These components are pre-built and configurable (where applicable), offering a robust and efficient solution out of the box.

We strongly recommend using these upstream components whenever possible for the following reasons:

- Minimal implementation effort: No need to write or maintain custom code.

- Full feature compatibility: These cells are deeply integrated with existing Livingdocs functionality, such as dashboard filters, metadata plugins, and indexing.

- Future-proof: Upstream components benefit from ongoing development, testing, and updates, ensuring continued compatibility and performance.

## List of Upstream Table Dashboard Cells

_Note:_ This list is not yet complete. Additional table dashboard cells are available beyond those documented here.

#### liTableDashboardCellTime

Displays the time and date in the table dashboard cell, using the value from `metadata.datetime`.

{{< img src="./liTableDashboardCellTime.png" width="80" alt="liTableDashboardCellTime"  >}}

**Configuration** to be used in a Table Dashboard in the Project Config in the editor settings in the server:

```js
{
    label: 'Example-Label',
    minWidth: 70,
    growFactor: 0,
    priority: 2,
    componentName: 'liTableDashboardCellTime'
}
```

#### liTableDashboardCellTitle

Displays a simple bold text in the table dashboard cell, using the value from `metadata.title`.

{{< img src="./liTableDashboardCellTitle.png" width="350" alt="liTableDashboardCellTitle"  >}}

**Configuration** to be used in a Table Dashboard in the Project Config in the editor settings in the server:

```js
{
    label: 'Example-Label',
    minWidth: 250,
    growFactor: 2,
    priority: 1,
    componentName: 'liTableDashboardCellTitle'
}
```
