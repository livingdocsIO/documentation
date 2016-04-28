# Upload your design to livingdocs-beta

[« back](../README.md)

## Overview

To be honest, this process is a bit bumpy and lacks UI support. Please bear with us, we will make this super-easy for you in the future. For now though there are quite a lot of requirements.

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

### Using the design

In your Livingdocs Beta account you will not yet see your design.

#### Your first design

As your design has probably a different name than the one attached to your current user, you need to create a new user:

```bash
grunt setup-admin-user
```

You will be asked to supply your username and password before the configuration can be updated. Then you will choose from a list your newly uploaded design. This will also set this design as the default design that will be used when creating new documents with this new user.

#### New design has the same name as the current design only version number changed

Add the design to your configuration with 2 terminal commands:

```bash
ldm channel:design-version:add --name bootstrap --version 1.0.0 --channel 1
ldm channel:design-version:current --name bootstrap --version 1.0.0 --channel 1
```

Congrats, you've done it! Now reload the browser page within your Livingdocs Beta account and press "Create Document" and you should see a new document with your design.

[« back](../README.md)
