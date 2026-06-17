---
{{ with .Params.title }}title: {{.}}{{ end }}
{{ with .Params.description }}description: {{.}}{{ end }}
{{ with .Params.keywords }}keywords: {{.}}{{ end }}
---

{{ .RenderShortcodes }}
{{- if (ne (.Param "renderSummaries") false) }}
{{ range where .Pages.ByWeight "Params.hidden" "!=" true -}}
{{- if (ne (.Param "hideSectionTeaser") true) }}
{{- $link := .RelPermalink }}{{ with .OutputFormats.Get "markdown" }}{{ $link = .RelPermalink }}{{ end }}
- [{{ .LinkTitle }}]({{ $link }}){{ with .Description }} — {{ . }}{{ end }}
{{- end }}
{{- end }}
{{ end -}}
