# Digital Asset Management (DAM) Guide

The LI Asset Management (DAM) enables smart features around assets (at this time only images).

## Special Features / Restrictions

In this sections, special functions and restrictions that apply for the DAM are described.

### Filenames

When the DAM is not enabled, the filenames of the files which are uploaded do not have any impact on the URL. Uploaded files are saved as UUIDs on S3 image services wrap URLs around S3 paths.

When the DAM is enabled, the uploaded images get semantic filenames. This is a drastic improvement for SEO (see sub chapter [SEO impact for naming files](#seo-impact-for-naming-files)). This means that the files of the uploaded files are sanitized.

For reference, some examples: The filenames are being transformed along the following pattern, where the left hand is the naughty name and the right side is the sanitized and normalized name:

```javascript
const naughty_filenames = [
    ['false', 'false'],
    ['name#.png', 'name.png'],
    ['name.png#', 'name.png'],
    ['test', 'test'],
    ['test%20test', 'test-20-test'],
    ['test%test', 'test-test'],
    ['test-kebabCamelCase', 'test-kebab-camel-case'],
    ['test-with-kebab-case', 'test-with-kebab-case'],
    ['test....', 'test.'],
    ['test.filename.with-many.png', 'test-filename-with-many.png'],
    ['test.png', 'test.png'],
    ['test=test', 'test-test'],
    ['testWithoutFileExtension', 'test-without-file-extension'],
    ['test\\test', 'test'],
    ['testnil', 'testnil'],
    ['testwithoutfileextension', 'testwithoutfileextension'],
    ['test:snowman:test', 'test:snowman:test'],
    ['undefined', 'undefined'],
    ['åß', 'ass'],
    ['Ӑ', 'ӑ'],
    ['社會科學院語學研究所', '社會科學院語學研究所'],
    ['ld logo with whitespace.png', 'ld-logo-with-whitespace.png']
]
```

To do the transformation to Kebab-Case the lodash function `_.kebabCase([string=''])` is being used. The special characters like `#` are being filtered out manually.

To read more about the kebabCase, visit the documentation [_.kebabCase](https://lodash.com/docs/#kebabCase).

#### SEO impact for naming files

- Use Dashes to separate terms within a filename
  - See Matt Cutts video: https://youtu.be/AQcSFsQyct8
- Use 3-8 words and start with the most important ones
  - https://yoast.com/image-seo/
