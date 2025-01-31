---
title: Angular Migration
description: Angular Migration is for customers which have Angular code in their downstream.
icon: angular
weight: 4
menus:
  customising:
    weight: 4
---

## What is an Angular Migration?

The support for AngularJS has officially [ended](https://docs.angularjs.org/misc/version-support-status) as of January 2022. Livingdocs decided to switch to the Vue framework for core development and also for extension in downstreams. At the same time we provide simpler solutions so customers don't have to write so much extension than in the past and can cover their requirements with core plugins.

## Are we affected?

Angular Migration is for customers which have Angular code in their downstream. Angular will stil be around for a while. We properly announce the removal of Angular extensions via Release Notes or via browser console (when you open the editors browser console).

## Why should I switch to a Core plugin and do not write my Vue extension?

- less code
- less bugs
- less maintenance
- less time used from your side
- less money spent
- easier updates
- continuous improvement of the plugins

## Roadmap

Migrating away from AngularJS can be a complex process, especially if you have a lot of downstream custom plugins. That's why we want to leave you enough time to make the transition.

### release-2023-01

⏳ Deprecate Angular Extensions

### release-2023-09

- 🔥 Remove support for Angular Metadata
- 🔥 Remove support for Angular Dashboard Filters
- 🔥 Remove support for Legacy Dashboards

## Topics
