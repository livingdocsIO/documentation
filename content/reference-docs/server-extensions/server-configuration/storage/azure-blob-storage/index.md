---
title: Configuring Azure Blob Storage
linkTitle: Azure Blob Storage
menus:
  reference-docs:
    parent: Storage
---

For users who want to store their images, files and design assets in Azure Blob Storage container rather than on Amazon S3, we provide a separate storage strategy.

## Setting up Azure Blob Storage

In order to integrate Azure Blob with Livingdocs, you need to make sure you have the following things set up properly:

* An [Azure Storage Account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal).
* At least one [container](https://docs.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal) on your Azure Storage Account.
* [SAS Token](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview#sas-token).

### Create Storage Account

1. To create a new Storage Account go to your [Azure Portal](https://portal.azure.com) and search for `Storage Account` service.
{{< img src="0-goto-storageaccount.png" alt="Azure Storage Account in Azure Portal" >}}

2. Create a new Storage Account with `+ Create` button.
{{< img src="1-new-storageaccount.png" alt="Create an Storage Account in Azure Portal" >}}

3. Fill the configuration according to your needs (i.e. `renduncacy`, `region`) under basics tab.
{{< img src="2-fill-storageaccount-config.png" alt="Create an Storage Account in Azure Portal" >}}

4. In Advance tab, choose `enable public access from all networks`, to allow ImgIX access to the Storage Account.
{{< img src="3-fill-storageaccount-config.png" alt="Create an Storage Account in Azure Portal" >}}

5. In `Review + Create` tab, check the configuration matches your needs, then press `Create`. 

### Create Container

At least one container is needed to store your media documents. In the Storage Account left sidebar go to `Containers`, then create a new container using `+ Container` button. Define your preferred name, access level and press `Create`. 
{{< img src="4-new-container.png" alt="Create a container (Blob) in Azure Portal" >}}

### Generate SAS Token

- In the Storage Account menu, open `Shared Access Signature` (SAS) from the left sidebar. Then configure the settings as followed:
  * Allowed services: Blob.
  * Allowed resource type: Object.
  * Allowed permission: Read, Write, Delete, Add, Create.
  * Configure the start and expiry date according to your needs.

When the configuration is filled, press `Generate SAS and connection string`. 
{{< img src="5-SAS-storage-account.png" alt="Configure SAS Token in Azure Portal" >}}

- Scroll down in the `Shared Access Signature` menu to find the newly generated SAS token. Use this SAS token in the Livingdocs Server configuration under `sasToken`.

{{< img src="6-copy-SAS-Token.png" alt="Copy SAS Token in Azure Portal" >}}

## Configuring the Livingdocs Server to use Azure Blob Storage as storage

In your local configuration, set the storage strategy to `azure-blob-storage` and add the container name and the Blob Service SAS URL from the Azure Storage Account settings:

```js
{
  images: {
    publicUrl: 'https://my-storage-account.blob.core.windows.net/my-container-name/',
    storage: {
      strategy: 'azure-blob-storage',
      config: {
        storageAccountName: 'my-storage-account'
        sasToken: '?my-sas-token',
        containerName: 'my-container-name'
      }
    }
  },
  files: {
    publicUrl: 'https://my-storage-account.blob.core.windows.net/my-container-name/',
    storage: {
      strategy: 'azure-blob-storage',
      config: {
        storageAccountName: 'my-storage-account'
        sasToken: '?my-sas-token',
        containerName: 'my-container-name'
      }
    }
  },
  designs: {
    assets: {
      publicUrl: 'https://my-storage-account.blob.core.windows.net/my-container-name/',
      storage: {
        strategy: 'azure-blob-storage',
        config: {
          storageAccountName: 'my-storage-account'
          sasToken: '?my-sas-token',            
          containerName: 'my-container-name'
        }
      }
    }
  }
}
```


## Setting up ImgIX with Azure Blob and Livingdocs

1. Generate a [SAS token](https://docs.imgix.com/setup/creating-sources/microsoft-azure) from the Storage Account settings in Azure Portal.
2. Log into your imgIX account and go to the [Sources section](https://dashboard.imgix.com/sources).
3. Select "New Source".
4. Select "Microsoft Azure" from the Source Type dropdown.
5. Use the SAS Token from above to connect imgIX to your Storage Account.
5. Set the Storage Account and Container name with the same name used in the Livingdocs Server config. **This is mandatory**
6. Set the subdomain (`my-subdomain`) and path prefix (`my-path-prefix`) as you see fit.

In your local Livingdocs config, adjust the `documents` settings as follows:

```js
documents: {
  selectedImageService: 'imgix',
  imageServices: {
    imgix: {
      host: 'https://my-subdomain.imgix.net/my-path-prefix',
      preferWebp: true,
      backgroundImage: {
        maxWidth: 2048
      },
      srcSet: {
        defaultWidth: 1024,
        widths: [
          2048,
          1024,
          620,
          320
        ],
        sizes: ['100vw']
      }
    }
  }
}
```
