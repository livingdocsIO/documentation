---
title: Configure Multi-Language UI
bullets:
  - Configure Default UI Language
  - Translating Config Labels, Placeholders and Titles
  - Number Formatting
weight: 5
keywords:
  - locale
  - i18n
  - multi-language
  - language switcher
  - Italian
  - French
  - English
  - German
  - Norwegian
  - Translating Config
  - number format
  - thousands separator
---

This guide explains how to configure Livingdocs to show the UI in different languages. Starting with {{< release "release-2023-07" >}} the default UI language can be configured and labels from the config, e.g. metadata plugin label, can be declared in multiple languages.
A language switcher has been added to user profile menu with {{< release "release-2023-09" >}}.

{{< img src="language-switcher.png" alt="Language Switcher" >}}

## Configure Default UI Language

Set the default Editor UI language in the [Editor config]({{< ref "/reference/project-config/editor-settings#multi-language-ui" >}}):

```js
app: {
  locale: 'de', // optional, language to show UI in - defaults to 'en'
  availableLocales: ['de', 'en', 'fr', 'it', 'nb-NO', 'nn-NO'] // optional - languages available in UI language switcher
}
```

If `app.availableLocales: undefined | undefined` then the language switcher will be hidden.

As of {{< release "release-2023-07" >}}, the UI is available in English (`en`) and German (`de`).

As of {{< release "release-2023-09" >}}, the UI is additionally available in French (`fr`) and Italian (`it`).

As of {{< release "release-2026-05" >}}, the UI is additionally available in Norwegian Bokmål (`nb-NO`) and Norwegian Nynorsk (`nn-NO`).

## Translating Config Labels, Placeholders and Titles

Any configurable `label`, `title` or `placeholder` in the project config e.g. metadata plugin labels/placeholders, button labels like the document creation button flow label or the page title of a table dashboard, etc., can be declared in multiple languages. The label will be displayed in the language of the current UI language.

Example: Translating a metadata plugin label in the project config:

```js
metadata: [
  {
    handle: 'category',
    type: 'li-string-list',
    ui: {
      label: {
        en: 'Category',
        de: 'Kategorie',
        fr: 'Catégorie',
        it: 'Categoria',
        'nb-NO': 'Kategori',
        'nn-NO': 'Kategori'
      },
      config: {
        placeholder: {
          en: 'Select a category',
          de: 'Wählen Sie eine Kategorie aus',
          fr: 'Sélectionnez une catégorie',
          it: 'Seleziona una categoria',
          'nb-NO': 'Velg en kategori',
          'nn-NO': 'Vel ein kategori'
        }
      }
    },
    config: {
      dataProvider: {
        type: 'labelValuePair',
        items: [
          {
            label: {
              en: 'Politics',
              de: 'Politik',
              fr: 'Politique',
              it: 'Politica',
              'nb-NO': 'Politikk',
              'nn-NO': 'Politikk'
            },
            value: 'politics'
          },
          {
            label: {
              en: 'Economy',
              de: 'Wirtschaft',
              fr: 'Économie',
              it: 'Economia',
              'nb-NO': 'Økonomi',
              'nn-NO': 'Økonomi'
            },
            value: 'economy'
          }
        ]
      }
    }
  }
]
```

Metadata plugin displayed with German translations.

{{< img src="label-german.png" alt="label german" >}}

## Number Formatting

{{< added-in "release-2026-11" block >}}

Users can choose how the editor formats numbers, for example `1.234.567` in Germany or `1'234'567` in Switzerland. Number format is a separate setting from the UI language, because users with the same UI language often expect different formats depending on their region.

The setting is a personal preference. Each user picks a format in the **Preferences** card on their account page, next to the UI language and the high contrast mode. The choice applies to all projects and takes effect immediately, without a page reload.

Number formatting is off by default, so numbers are shown as raw digits until a user picks a format. The editor does not derive a format from the browser, because a wrong thousands separator can make a number read as a thousand times larger or smaller.

The dropdown shows each format as a sample instead of a country name, because one format covers many countries:

| Sample          | Locale    |
| --------------- | --------- |
| `1234567.89`    | (default) |
| `1,234,567.89`  | `en-US`   |
| `1.234.567,89`  | `de-DE`   |
| `1'234'567.89`  | `de-CH`   |
| `1 234 567,89`  | `fr-FR`   |
| `12,34,567.89`  | `en-IN`   |

The chosen format applies to the result totals in kanban boards and in the media library.

The preference is stored as a locale tag under the `numberFormat` key of the user config. No project or server configuration is required.
