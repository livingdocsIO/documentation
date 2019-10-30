# Using Google Cloud Storage

For users who want to store their images, files and design assets in a Google Cloud Storage (GCS) bucket rather than on Amazon, we provide a separate storage strategy.

## Setting up GCS

In order to integrate GCS with Livingdocs, you need to make sure you have the following things set up properly:

* A [Service Account](https://cloud.google.com/iam/docs/creating-managing-service-accounts). **Please note:** Make sure you download the credentials JSON file right after creating the Service Account and keep it somewhere safe, as there is no way to get it any time after you finalised the creation procedure.
* At least one [bucket](https://cloud.google.com/storage/docs/creating-buckets) on your Google Cloud Storage.
* [Granted Privileges](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts) to your Service Account to write and read to and from the bucket.

## Configuring the Livingdocs Server to use GCS as storage


In your local configuration, set the storage strategy to `google-cloud-storage` and add the bucket name and the credentials from the JSON file to the config key:

```
{
  images: {
    storage: {
      strategy: 'google-cloud-storage',
      config: {
        bucket: 'my-bucket-name',
        // The credentials should look similar to this
        credentials: {
          type: 'service_account',
          project_id: '******',
          private_key_id: '******',
          private_key: '******',
          client_email: '******',
          client_id: '******',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url: '******'
        }
      }
    }
  },
  files: {
    storage: {
      strategy: 'google-cloud-storage',
      config: {
        bucket: 'my-bucket-name',
        credentials: {
          // ...
        }
      }
    }
  },
  designs: {
    assets: {
      storage: {
        strategy: 'google-cloud-storage',
        config: {
          bucket: 'my-bucket-name',
          credentials: {
            // ...
          }
        }
      }
    }
  }
}
```


## Setting up ImgIX with GCS and Livingdocs

1. Get a set of [interoperability credentials](https://cloud.google.com/storage/docs/migrating#keys) from the settings page of GCS.
2. Log into your imgIX account and go to the [Sources section](https://dashboard.imgix.com/sources).
3. Select "New Source"
4. Select "Google Cloud Storage" from the Source Type dropdown
5. Use the credentials from above to connect imgIX to your GCS account.
5. Set the bucket name to the same name as you did in the Livingdocs config. **This is mandatory**
6. Set the subdomain and path prefix as you see fit.

In your local Livingdocs config, adjust the `documents` settings as follows:

```
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
