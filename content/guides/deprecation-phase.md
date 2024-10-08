---
title: Deprecation Phase
weight: 1
---

# Why
With Livingdocs, we continuously improve our product with releases every other month instead of a big new version every couple of years. Sometimes we built something that hurts while moving on and we need to deprecate some functionality to keep innovating.

# What
When deprecating features, we start a formal process:
- Release -2: 6 months ahead, we mention the deprecation in the technical release notes and start logging a deprecation message in the server and/or editor console when the feature is in use. We prefer to do it on server startup to not mess with your logs. The message clearly states in which release the feature will be removed.
- Release -2: (4 months ahead) logging continues
- Release -1: (2 months ahead) logging continues
- Release 0: Feature is removed, breaking change is mentioned in the release notes.
