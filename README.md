
# Livingdocs Documentation

## Table of contents

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Livingdocs Documentation](#livingdocs-documentation)
	- [Table of contents](#table-of-contents)
	- [0. Overview](#0-overview)
		- [About this document](#about-this-document)
		- [Why should I bother?](#why-should-i-bother)
	- [1. An intro to the Livingdocs architecture](#1-an-intro-to-the-livingdocs-architecture)
	- [2. Getting started](#2-getting-started)
		- [Create a Livingdocs design](#create-a-livingdocs-design)
		- [Using the Livingdocs beta service](#using-the-livingdocs-beta-service)
		- [Using the boilerplate app](#using-the-boilerplate-app)
	- [3. Livingdocs core development](#3-livingdocs-core-development)
		- [The Livingdocs user interface](#the-livingdocs-user-interface)
		- [The Livingdocs server](#the-livingdocs-server)
	- [4. Going up and beyond: the framework and editable.js](#4-going-up-and-beyond-the-framework-and-editablejs)
		- [The Livingdocs Framework](#the-livingdocs-framework)
		- [editable.js](#editablejs)
	- [Appendix](#appendix)
		- [The Livingdocs projects](#the-livingdocs-projects)
		- [The server API](#the-server-api)
		- [Custom installations](#custom-installations)
		- [The development roadmap](#the-development-roadmap)

<!-- /TOC -->

## 0. Overview

Livingdocs is a component based no-CMS written in javascript. Why a no-CMS? Because we
believe that a CMS alone is not enough for today's multi-channel web landscape. Livingdocs is
not only a CMS but a tool to get a hold of online communication.
A few cornerstones:
- It focuses on individual documents and a WYSIWYG editor to edit them on a component level.
- Components are HTML and CSS only. There is no need to update templates in a database.
- Every document is self contained and aware of its CSS and javascript dependencies
- The HTML and CSS of the components are fully customizable and versioned
- The rendering of the HTML out of components can be fully customized to fit different channels and products

There are 2 ways two try out Livingdocs:
- via our [beta service](http://www.livingdocs-beta.io) which offers a hosted Livingdocs with a REST API
- via our customizing boilerplate app that allows you to create your own custom Livingdocs

The first option is free and you can start immediately. For the customizing boilerplate we complete an evaluation contract with the goal that you will license and use Livingdocs for your company.

To develop within Livingdocs you have to be fluent in Javascript and understand a little Angular.JS and/or Node.JS. Of course, in order to understand Livingdocs you should also know a thing or two about how Livingdocs works.

### About this document

Unfortunately, we can't offer complete documentation yet. If you require some documentation that is not yet present, please drop us a note to documentation@upfront.io or fork this project and send us a pull-request if you want to write it yourself.

The following chapters explain the basics about Livingdocs. There is no core documentation yet but it is unlikely that you will need to work in the core.

The appendixes provide links to the various projects and structured API documentation. Note that most Livingdocs projects are closed-source and require access, so not all links might work for you.

### Why should I bother?

Before you dig down into the tech details you might be curious why you should take the effort in the first place. How about this: you quickly read through our main concepts and then you can decide for yourself if Livingdocs is worth your effort.

[» Livingdocs Concepts](concepts/main_concepts.md)

## 1. An intro to the Livingdocs architecture

In this blog article we introduce the Livingdocs architecture and its parts. If you want to get started quickly with Livingdocs you can skip directly to the "A Livingdocs consumer" chapter. A little bit of background knowledge can never be bad though:

[» The Livingdocs architecture](http://blog.livingdocs.io/articles/1739)

## 2. Getting started

### Create a Livingdocs design

A design defines the components that can be used in your documents. As well as the CSS to style these components. Both HTML and CSS are fully customizable.

[» Learn how to create a Livingdocs design](./design/create_designs.md)

### Using the Livingdocs beta service

If your goal is to see your newly created design quickly in the editor or just to find out a little bit about how Livingdocs works then the service is your best option.

[» Upload a custom design to Livingdocs Beta](./design/upload.md)

[» Fetch documents from Livingdocs for your delivery app](delivery/api_essentials.md)

[or use our sample blog app](https://github.com/upfrontIO/livingdocs-delivery)

### Using the boilerplate app

The boilerplate app is a server-side customization project which fully integrates the Livingdocs core server. It allows customers to write their specific requirements like third-party system integrations or special rendering options.
The boilerplate app is not publicly available and you will need to conclude an evaluation contract with us to get access.

[» Process published documents](./boilerplate/publish_plugin.md)

[» Writing data migrations](./data-migrations/migrations.md)

<!-- [» Customize the document renderer]() -->

## 3. Livingdocs core development

### The Livingdocs user interface

### The Livingdocs server

## 4. Going up and beyond: the framework and editable.js

### The Livingdocs Framework

The [`Livingdocs framework`](https://github.com/upfrontIO/livingdocs-framework) is the central piece of Livingdocs and defines the APIs for manipulating, displaying and serializing your documents. The Livingdocs framework is an isomorphic app that runs in the browser and in node.js.

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
- [Livingdocs boilerplate server](https://github.com/upfrontIO/livingdocs-server-boilerplate)
- [Livingdocs sample blog (open-source)](https://github.com/upfrontIO/livingdocs-delivery)

### The server API

- [API documentation](./server/home.md)

### Custom installations

- [Installation requirements](./installation/requirements.md)

### The development roadmap

[» read the rough plan](./roadmap/overview.md)
