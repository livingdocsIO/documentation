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

* An [Azure Storage Account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal). **Please note:** Configure desired `Storage account name`, `Region`, `Performance` and `Redundancy` to your needs.
* At least one [container](https://docs.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal) on your Azure Blob Storage.
* [SAS Token](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview#sas-token) in your Storage Account under `Security + Network/Shared Access Signature` blade. Configure the token to have write, read, delete permission in `Blob` service for `Object` resource types.

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

1. Generate a [SAS token](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview#sas-token) from the Storage Account settings in Azure Portal or use the same as Livingdocs Server in previous section.
2. Log into your imgIX account and go to the [Sources section](https://dashboard.imgix.com/sources).
3. Select "New Source"
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
