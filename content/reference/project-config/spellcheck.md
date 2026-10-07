---
title: Spellcheck
description: Check spelling and grammar in the Livingdocs Editor with a LanguageTool server.
weight: 14
menus:
  reference:
    parent: Project Config
---

{{< added-in "release-2026-11" block >}}

The spellcheck checks spelling and grammar while writers work on a document in the Livingdocs Editor. It runs against a [LanguageTool](https://languagetool.org) server. The editor never calls LanguageTool directly. It sends the text to the Livingdocs Server, which forwards it to the LanguageTool server configured for the project.

Nothing the spellcheck produces is stored. Matches are derived from the current text, and rejected matches only live in the browser until the writer reloads or leaves the document.

{{< info >}}
Livingdocs operates the LanguageTool server for each customer. Reach out to your customer solutions contact to get one for your project.
{{< /info >}}

## Configuration

The configuration is located in the Project Config under the `spellcheck` property.

```js
spellcheck: {
  // Required. URL of the project's LanguageTool server.
  // The Livingdocs Server sends the checks to `<url>/v2/check`.
  url: 'https://languagetool.example.com',

  // Optional. Maps the document language to the language code LanguageTool
  // expects. LanguageTool treats region-specific codes such as `de-CH` or
  // `en-US` differently from `de` or `en`. Unmapped codes are passed through
  // unchanged.
  languageMapping: {
    de: 'de-CH',
    en: 'en-US'
  }
}
```

The `spellcheck` property enables the spellcheck for the project. There is no separate flag: remove the property to disable it.

The `url` points at internal infrastructure. Only project admins can read the `spellcheck` property back, and the editor only learns whether the spellcheck is enabled.

### Language

Each check is sent with one language, resolved in this order:

1. The language of the document.
2. The project's default language, `settings.languages.defaultLanguage.locale` (see [Settings]({{< ref "/reference/project-config/settings#languages--translations" >}})).
3. If neither is set, LanguageTool detects the language itself.

The resolved language is then translated with `languageMapping`.

### Legacy Spellcheck

The [legacy spellcheck]({{< ref "/customising/advanced/editor-configuration/text-editing#spellcheck" >}}) configured in the editor config is still supported. Only one of the two is active in a project:

- If the project config contains the `spellcheck` property, the LanguageTool spellcheck is used and the legacy spellcheck of the editor config is ignored for this project.
- If it does not, the project behaves exactly as before.

Switching between the two is a configuration change and needs no new release.

## Live Check

When a writer opens a document for editing, the whole document is checked. After that, each text directive is checked again shortly after the writer stops typing in it. The check does not flag a word while it is being typed.

- The check works on the text the writer sees. Formatting is ignored, and for a link only the link text is checked.
- Matches are highlighted in the text. Spellcheck highlights and comment highlights can sit on the same text.
- Clicking a highlight opens a flyout with the message, the category, and the replacement suggestions LanguageTool supplied. A match without a category or without suggestions is a normal state.
- The writer applies one of the suggestions or rejects the match. Text never changes without the writer picking a suggestion, even if there is only one.
- A rejected match stays hidden while the writer works on the document, even when edits earlier in the paragraph shift its position. The same word typed somewhere else is a new match. After a reload, rejected matches show again.

The spellcheck only runs in the edit mode of a document. Read-only views such as the history or a diff do not show it.

## Command Center

A button in the bottom right corner of the editor shows the number of open matches in the document. It opens the spellcheck panel, which lists every match of the document for a full proofreading pass.

- Opening the panel checks the whole document again. The panel lists the matches in document order, each with the text around it.
- Selecting a match in the list scrolls the document to it and marks it in the text. The row offers the same actions as the flyout: apply a suggestion or reject the match.
- While the panel is open, clicking a highlight in the text selects its row in the panel instead of opening the flyout.
- A decision on a match holds on both surfaces. A match applied or rejected in the panel is gone from the text, and the reverse.
- The panel and the floating panel (properties, insert, clipboard) share the right side of the editor. Only one of them is open at a time.

### Checks Only While the Panel Is Open

The panel holds one setting, "Checks only while the panel is open". It is off by default, so the spellcheck runs when the document opens and while the writer types, and the highlights are always visible.

When the setting is on, the spellcheck only runs while the panel is open. The highlights disappear when the panel closes and appear again when it opens.

The setting belongs to the writer, not to the document. It applies to all documents, is stored in the browser's local storage, and survives a reload.
