---
title: Glossary
draft: true
menus:
  learn:
    weight: 7
---

### Content Type

This is a document configuration. The contentType specifies what metadata properties can be used in the [metadata](#metadata) and what components can be used in the [content](#content) of a [document](#document). And also further worflow and integration configurations.

### Content

The content specifies the flexible content of a [document](#document).

### Component

A component specifies a HTML template and a set of [directives](#directive).

### Directive

A directive is a field within a [component](#component). The available directive types are: text, image, video, audio, include, html and link.

### Document

A document consists of [content](#content) and [metadata](#metadata). Documents are versioned.

### Design

A list of [components](#component) and configurations how they can be used
in a [livingdoc](#livingdoc) and how users can interact with these [components](#components) in the
`Livingdocs Editor`. Designs are versioned.

##### Embedded Design

An "Embedded Design" lives inside of a project configuration, therefore every "Embedded Design" is unique per project.
Another design type is a [Referenced Design](#referenced-design).

##### Referenced Design

A "Referenced Design" can be used multiple times in different projects.
Another design type is an [Embedded Design](#embedded-design).

### List

A list is an ordered collection of [documents](#document).

### Livingdoc

A livingdoc is the [content](#content) of a [document](#document) in our content format. A livingdoc is a tree of [components](#components).

Every livingdoc references a specific [design](#design) version.

### Menu

This is a representation of a menu on a website or app. It's a tree with links to [documents](#document) or urls.

### Metadata

Every [document](#document) contains a set of metadata. Metadata are configurable and are a list of keys and values.

### Media Library

The media library manages images, videos, audio and other files used in your [documents](#document).

### Project

Represents an organisation and consists of users, [documents](#document), [menus](#menu), [lists](#list) and a [media library](#media-library).

### Project Configuration

The json configuration of a [project](#project). This determines the settings for a particular project and is versioned.

### Upstream / Downstream

The `livingdocs-editor` and `livingdocs-server` repositories are are referenced as upstream. And your
server and editor repositories are referenced as downstream.
