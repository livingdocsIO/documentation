---
title: Maintenance Mode
weight: 1
---

# Why
With Livingdocs, we continuously improve our product with releases every other month instead of a big new version every couple of years. Through that, we sometimes have better answers to a specific problem over time and phase out some features.

# What
For some minor changes, the phase-out is more straightforward and we go straight into a 3-release deprecation phase. For other features, we understand that it takes more time to move to another solution, and there might not be a drop-in replacement available.

We keep these features in maintenance mode to make sure that everyone has plenty of time to move away from the feature before the deprecation phase starts.

When a feature is on maintenance, it doesn't receive any feature updates. Livingdocs will fix bugs and help you migrate to a more modern solution.

Features in maintenance mode cannot be newly introduced in a Livingdocs setup. Only existing usages are supported. Technically we ensure this by making these features only available for a defined set of `customerId`s as configured in the Livingdocs server config.
