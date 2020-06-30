# Quick Start

Livingdocs is a modern Digital Content Creation and Publishing System that drives the efficiency of editorial staff using a unique building blocks technology and powerful collaboration tools.

It is also a configurable headless CMS as a service that enables developers to model pretty much every publishing use case imaginable. This documentation is here to help you master the complexities of Livingdocs' configuration and setup your specific use case.

Read on to learn about the most important concepts of Livingdocs.

## Project

A Livingdocs project is easiest understood as a publication. This can be a newspaper, blog, website or pretty much every imaginable digital publication. Upon [signing up](https://edit.livingdocs.io) for the Livingdocs service a Sandbox is created for you. This is a project. You can also create your own projects and invite teams to them. The number of projects you are allowed to create depends upon your chosen service plan.

{% embed url="https://vimeo.com/426279221" %}

## Project Setup

This is where you configure your publication. A publication might have different content-types like articles or image galleries. Those in turn have metadata and component sets out of which editors can create content. All those things can be configured in the "Project Setup" section of Livingdocs.

{% embed url="https://vimeo.com/426285528" %}

## Project-Config

The project-config is the source for the project setup. It's a huge JSON file that contains all settings you applied to your project. The UIs in the "Project Setup" section alter the project-config JSON and you can always see the complete JSON in the "History" screen of the "Project Setup" \(it's versioned as well\). You can also write to this JSON directly using our CLI, more on this later.

{% embed url="https://vimeo.com/426287530" %}

[» Reference Documentation](reference-docs/project-config/README.md)

(you might come across the term "channel-config", this is just the old name of the project config)

## Design

The Design is a part of the project-config \(subproperties `designSettings` and `components`\). It defines the assets used to render \(CSS, JS, etc.\) as well as the available components \(HTML templates\). Those components will then be visible in the sidebar of the Livingdocs editor and users can drag them in to create articles and documents.

{% embed url="https://vimeo.com/429647905" %}

[» Reference Documentation](reference-docs/project-config/design.md)

## CLI \(comand-line-interface\)

The [Livingdocs CLI](https://github.com/livingdocsIO/livingdocs-cli) allows you to download and re-upload the project-config of your project. This is very useful if you want to locally work on your configuration and collaborate on it with other developers, e.g. by pushing it to a Github repo.

{% embed url="https://vimeo.com/429648531" %}

[» Reference Documentation](cli/sync-configs.md)

## Users

Users can have many projects and projects can have many users. You are a user once you have signed up with Livingdocs. You can also invite users to your projects and assign them to groups. Groups can give different rights \(read-only, publish, etc.\) to your users so you can segment your team in e.g. admins, editors and editors in chief.

{% embed url="https://vimeo.com/429650395" %}

## Public API

This is where you can interact with Livingdocs over a REST interface. The API allows you to: get content out of Livingdocs \(publications, menus, etc.\), import content into Livingdocs and alter the configuration of your project \(project-config\) though for the latter you can also use the CLI. Read our [API documentation](https://edit.livingdocs.io/public-api) for more infos.

{% embed url="https://vimeo.com/429650615" %}

[» Reference Documentation](https://edit.livingdocs.io/public-api)