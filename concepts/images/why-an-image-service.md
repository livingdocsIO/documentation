## Description

The goal of an image service is to provide optimized versions of an image. Optimizations can include the following things (and possibly more):

- Size/Quality optimizations
- Croppings
- Re-sizings, e.g., for responsive images

Typically, these images are stored in S3, either through the service itself or by setting up a hook. Nonetheless, this is not a requirement and the architecture is flexible enough to handle services independent of a specific storage. This is for example important when working with publishing industry solutions such as Keystone.

## Solution

The implementation of an image service is configurable.
The `config/environments` folder contains files for the different available environments as well as an `all.json` file that contains settings that should be applied over all environments. To configure an image service the `imageService` setting in the `app` group can be used. Legal values are 'none' and false to turn off the images service or 'resrc.it' to use the image service provided by http://resrc.it
If you want to implement another image service refer to the 'Extension' topic below.

The image service is stored with each image directive in the json format of livingdocs. The values 'none' or false are not stored, but the imageService member on the directive is simply empty (`undefined`). The setting of the image service happens when a user uploads an image and stays for the lifetime of this image (until another image is uploaded or the image is deleted). The image service that is used to set upon uploading an image is the one with which the editor is started. The image service is constant over the lifetime of a running editor and assigned through an Angular.JS provider at startup time (in `app.coffee`). If the editor 'sees' an imageService it doesn't know (e.g., the editor is started with the service 'resrc.it' and an image is marked to be handled through 'cloudinary') the editor will show an error message to the user and log it.

## Extension

To add a new image service, a developer should familiarize him/herself with the concepts described in the topic 'Solution' as well as the unit tests in `image_service_spec` and `image_service_base_spec` for the general functionality of an image service and `resrcit_image_service_spec` for details of a specific implementation.

The implementation of a specific image service should go into a subclass of `ImageServiceBase`. You can refer to the `ResrcitImageService` class as a concrete example of the methods that need to be developed. Also relevant is the `Image` class from where most of the calls to the image service originate.

In most cases it will also be necessary to extend the `livingdocs-framework` project since most image service require a specific URL format and the livingdocs-engine is responsible for creating the content of the `src` attribute on an image (or the `background-image` property). The entry point for image services in the livingdocs-engine is the `ImageManager` singleton. To support a new image service in the engine you need to create a new class, similar to the `DefaultImageManager` and `RescritImageManager` classes.
