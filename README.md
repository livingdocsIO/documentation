
# Livingdocs Documentation

## Overview

Livingdocs is a component based CMS in javascript. A few cornerstones:
- It focuses on individual documents and a WYSIWYG editor to edit them.
- Components are HTML and CSS only. There is no need to updat templates in the backend.
- Every document is self contained and aware of its CSS and javascript dependencies
- The HTML is fully customizable and versioned

To use Livingdocs you can access our service via our REST API or the elastic search API and write your consumer apps in any language you like.
To develop within Livingdocs you have to be fluent in Javascript and understand a little Angular.JS and/or Node.JS. Of course, in order to understand Livingdocs you should also know a thing or two about how Livingdocs works.

## What is this?

You are currently on the documentation project of Livingdocs. Unfortunately, we can't offer complete documentation at this moment, but we are working on it. This means that you can skim through this documentation but chances are that you won't really find what you're looking for. If so, please drop us a note to documentation@upfront.io or fork this project and send us a pull-request if you want to write it yourself.

The following chapters will take you from novice Livingdocs consumer to Livingdocs core dev ninja. You can follow along or skip at will. The appendixes provide links to the various projects and structured API documentation. Note that most Livingdocs projects are closed-source and require access. Consuming the service can though be done without any special access, only a Livingdocs account and the things you'll learn in the subsequent chapters.

## Why should I bother?

Before you dig down into the tech details you might be curious why you should take the effort in the first place. How about this: you quickly read through our main concepts and then you can decide for yourself if Livingdocs is worth your effort.

[» Livingdocs Concepts](concepts/main_concepts.md)

## An intro to the Livingdocs architecture

In this blog article we introduce the Livigndocs architecture and its parts. If you want to get started quickly with Livingdocs you can skip directly to the "A Livingdocs consumer" chapter. A little bit of background knowledge can never be bad though:

[» The Livingdocs architecture](http://blog.livingdocs.io/articles/1739)

## Getting started

### Create a Livingdocs design

A design defines the components that can be used in your documents. As well as the CSS to style these components. Both HTML and CSS are fully customizable.

[» Learn how to create a Livingdocs design](design/create_designs.md)

### Upload your design

Uploading a design is still in beta. It can be done though and testing out Livingdocs with your very own design is just more fun. This description assumes that you are using the Livingdocs Beta service. For custom installations other workflows might apply.

[» Take the challenge to upload a design](./design/upload.md)

### Create a frontend app that features your documents

A frontend app takes your Livingdocs documents to the world. You can write your frontend apps in any technology you like and for whatever purpose you like (blog, newspaper, native app, you name it).

[» Read about the frontend app essentials](delivery/api_essentials.md)

[or use our boilerplate blog app](https://github.com/upfrontIO/livingdocs-delivery)

### An advanced frontend app with elastic search

coming soon.

### Migrating documents

coming soon.

## Becoming a Livingdocs ninja

### The Livingdocs user interface

### The Livingdocs server

- [The webhook system](server/webhook_system.md)

### Understanding the Livingdocs teaser management

The Livingdocs teaser management allows users to structure their documents within lists, assign those lists to containers that define a visual output of a list, and then layout those containers on pages that can be used in a site's navigation.

[» Learn more about Livingdocs teaser management](teaser-management/main.md)

## Going up and beyond: the framework and editable.js

### The Livingdocs Framework

The [`Livingdocs framework`](https://github.com/upfrontIO/livingdocs-framework is the central piece of Livingdocs and defines the APIs for manipulating, displaying and serializing your documents. The Livingdocs framework is an isomorphic app that runs in the browser and in node.js.

Here you can find detailed information about the most important objects in the Livingdocs framework and how to work with them:

- [livingdoc](livingdocs-framework/livingdoc.md)
- [component_tree](livingdocs-framework/component_tree.md)
- [component_model](livingdocs-framework/component_model.md)
- [browser_api](livingdocs-framework/browser_api.md)

### editable.js

editable.js is our wrapper around the contenteditable API of the browser. It enables the Livingdocs framework to talk to the browser in order to allow inline editing and keyboard interaction. editable.js is designed to be used on a single paragraph or heading element (or any other block level element for that matter).

The project is open-source and on Github. To learn more about Editable.JS it is best to use the [project's description](https://github.com/upfrontIO/editable.js).

## Appendix

### The Livingdocs projects

- [editable.js (open-source)](https://github.com/upfrontIO/editable.js)
- [Livingdocs framework (requires access)](https://github.com/upfrontIO/livingdocs-framework)
- [Livingdocs editor (requires access)](https://github.com/upfrontIO/livingdocs-editor)
- [Livingdocs server (requires access)](https://github.com/upfrontIO/livingdocs-server)
- [Livingdocs boilerplate design (open-source)](https://github.com/upfrontIO/livingdocs-design-boilerplate)
- [Livingdocs boilerplate blog (open-source)](https://github.com/upfrontIO/livingdocs-delivery)

### The server API

- [API documentation](https://github.com/upfrontIO/livingdocs-server/wiki)

### The development roadmap

[» read the rough plan](./roadmap/overview.md)


