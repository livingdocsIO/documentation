# Livingdocs architecture

_Architecture diagrams master files can be found [on google drive](https://docs.google.com/document/d/1TQhW3HtzurI78kinxUCqf5OxG3RSoiEURXEn4AIztP0/edit#heading=h.snjxmn1ywzn)_


![API Link](./architecture-stacks-apps.png)

## Stacks
On a high level, livingdocs can be divided in two different stacks. These stacks can be scaled independently from each other, depending on the requirements. 

- **Editing stack**: Services allowing the editorial user to write content in a web interface and persisting it. The content is made accessible to the delivery stack.
- **Delivery stack**: Services allowing the end user to read the content on the website or mobile application.


## Applications
- **Editor**: A single page application serving the editors web interface. It consists of static assets only. This is where the editorial user logs in and writes content.
- **Server**: A node.js application. It can be started in two different modes: 
  - In _editing mode_, it acts as the backend for the li-editor, storing content, handling file uploads, cropping, authentication and so on. It does expose a REST API for the li-editor to connect to.
  - In _delivery mode_, the purpose of it is to provide a REST API for the delivery to present the content to the user
- **Delivery**: A node.js application. Makes content written in livingdocs is available to end users. Its primary purpose is to render a website.

## Services
- **Postgres (PG)**: Primary data store for the server. For example pages, articles, menus, users are persisted here. Both servers in delivery, as well as servers in editing mode access the same data.
- **Elasticsearch (ES)**: The editor provides the user with a search, powered by an elasticsearch secondary index. Only servers in editing mode need access to this service.

## External services
For specific features, livingdocs uses external services.

![API Link](./architecture-external-services.png)

- **Image service (resrc.it)**: 
  - Used by the server in editing mode for cropping images.
  - Used by the editorial users browser to deliver responsive images.
- **Cloud storage (Amazon S3)**: Used by the server in editing mode to store uploaded images and to serve static assets for the livingdocs design to the end- and editorial users browser.
- **Iframely**:
  - Design components with automatic metadata fetching from a third-party source (such components are optional) in the editorial users browser.
  - Automatic validity checks of entered links. Used by the editorial users browser.
- **Websockets (Pusher, optional)**: To support real-time collaboration in the editor. The feature can be disabled, so this is optional. Used by the server in editing mode, as well as the editorial users browser.
- **Spellchecker (optional)**: Livingdocs supports the integration of third-party spellcheckers. The feature can be disabled, so this is optional. Used by the editorial users browser.
- **Metrics and Logging (optional)**: Newrelic, Mixpanel, Loggly. Used by the server in editing mode.

There are other external services, called from the editorial- and / or end users browser. They don’t have an impact on the infrastructure and are solely listed for the sake of completeness. 
- **Track.js**: for tracking javascript errors
- **Analytics**: for tracking users and behavior on the site
