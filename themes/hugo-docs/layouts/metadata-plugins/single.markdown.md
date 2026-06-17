---
{{ with .Params.title }}title: {{.}}{{ end }}
{{ with .Params.summary }}description: {{ $.RenderString (dict "display" "inline") . | plainify | chomp | jsonify }}{{ end }}
---
{{ $PAGE := . }}
{{- with .Params.history }}

## History

| Version | Change |
| ------- | ------ |
{{ range . -}}
| {{ .release }} | {{ partial "prose-md.txt" (dict "page" $PAGE "inline" true "text" .description) }} |
{{ end -}}
{{ end }}
{{- with .Params.addedIn }}
Added in: [`{{ . }}`](/operations/releases/{{ . }}/)
{{ end -}}
{{- with .Params.deprecatedIn }}
Deprecated in: [`{{ . }}`](/operations/releases/{{ . }}/)
{{ end -}}
{{- with .Params.removedIn }}
Removed in: [`{{ . }}`](/operations/releases/{{ . }}/)
{{ end -}}
{{- if .Params.support.planningSystem }}
**Notice**: The {{ .Title }} plugin is only available if the Planning System is enabled.
{{ end }}
## Supported Features

| Feature | Supported |
| ------- | :-------: |
| Document | {{ cond (.Params.support.document) "✔" "✗" }} |
| Media | {{ cond (.Params.support.media) "✔" "✗" }} |
| Include | {{ cond (.Params.support.include) "✔" "✗" }} |
| Document Creation Flow | {{ cond (.Params.support.creationFlow) "✔" "✗" }} |
| Push Message | {{ cond (.Params.support.pushMessage) "✔" "✗" }} |
| Usage Log | {{ cond (.Params.support.usageLog) "✔" "✗" }} |
| Table Dashboard | {{ cond (.Params.support.tableDashboard) "✔" "✗" }} |
| Display Filter | {{ cond (.Params.support.displayFilter) "✔" "✗" }} |
| Search Indexing | {{ cond (.Params.support.searchIndexing) "✔" "✗" }} |
| System Metadata | {{ cond (.Params.support.systemMetadata) "✔" "✗" }} |
| Planning System | {{ cond (.Params.support.planningSystem) "✔" "✗" }} |
| Webhook Conditions | {{ cond (.Params.support.webhookConditions) "✔" "✗" }} |
{{ if or .Params.description .Content }}
## Description

{{ with .Params.description }}{{ partial "prose-md.txt" (dict "page" $PAGE "text" .) }}{{ end }}
{{ .RenderShortcodes }}
{{ end -}}
{{- with .Params.defaultUI }}
## Default UI

{{ partial "prose-md.txt" (dict "page" $PAGE "text" .) }}
{{ end -}}
{{- with .Params.storageFormat }}
## Storage Format

```js
{{ partial "prose-md.txt" (dict "text" . "code" true) }}
```
{{ end -}}
{{- with .Params.contentTypeConfig }}
## Content Type Config

```js
{
  handle: 'myContentType',
  // ...
  metadata: [
    {
{{ partial "prose-md.txt" (dict "text" . "code" true) }}    }
    // ...
  ]
}
```
{{ end -}}
{{- with .Params.mediaTypeConfig }}
## Media Type Config

```js
{
  handle: 'myMediaType',
  // ...
  metadata: [
    {
{{ partial "prose-md.txt" (dict "text" . "code" true) }}    }
    // ...
  ]
}
```
{{ end -}}
{{- with .Params.includeConfig }}
## Include Config

```js
{
  name: 'myInclude',
  paramsSchema: [
    {
{{ partial "prose-md.txt" (dict "text" . "code" true) }}    }
  ]
}
```
{{ end -}}
{{- with .Params.tableDashboardConfig }}
## Table Dashboard Config

```js
{
  handle: 'myDashboard',
  // ...
{{ partial "prose-md.txt" (dict "text" . "code" true) }}}
```
{{ end -}}
{{- with .Params.additionalConfig }}
## Additional Config

{{ partial "prose-md.txt" (dict "page" $PAGE "text" .) }}
{{ end -}}
