# Upload your design to livingdocs-beta

## Table of contents

- Uploading a design (this document)
- [Updating a design](./update_design.md)

## Overview

To be quite honest, this process is a bit bumpy and we lacks UI support. Please bear with us, we will make this super-easy for you in the future. For now though there are quite a lot of requirements.

### Livingdocs Beta account

 You currently need a Livingdocs Beta account with us to test out your designs.If you don't have one yet, go and sign up for one at [https://livingdocs.io/trial/](https://livingdocs.io/trial/)

### Upload manager

 In order to upload designs to Livingdocs you need the `livingdocs-manager` command line tool. In order to install it run:
 ```
 npm install -g livingdocs-manager
 ```

 With this out of the way you can now upload your design to the Livingdocs beta server. Make sure to use a unique name for your design. We currently don't reserve names so if your name is not unique enough it could be overwritten by somebody else.

 From a command line run:
 ```
 ldm design:publish folder-with-your-design/
 ```
 (if you use the `livingdocs-design-boilerplate` setup then "folder-with-your-design" is the dist/ folder that is created when you run `grunt build`)

The tool will ask you to provide a host (the default is fine) and enter your email and password for the Livingdocs Beta environment. If everything goes well you should get an output like this: `info publish Published the design boilerplate@0.3.0 to http://api.livingdocs.io/designs/boilerplate/0.3.0` (of course with your own design name and version).

Go ahead and fetch the URL by simply pasting it into a browser. You should see the JSON design configuration file.

### Using the design in your account

In your Livingdocs Beta account you will not yet see your design. You first need to update the configuration. 

Add the design to your configuration with a terminal command:

```bash
ldm project:design:add --name bootstrap --version 1.0.0
```

You will be asked to supply your username and password before the configuration can be updated. This will also set the new design as the default design that will be used when creating new documents.

Congrats, you've done it! Now reload the browser page within your Livingdocs Beta account and press "Create Document" and you should see a new document with your design.

