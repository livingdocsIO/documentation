---
{{ with .Params.title }}title: {{.}}{{ end }}
{{ with .Params.description }}description: {{.}}{{ end }}
{{ with .Params.keywords }}keywords: {{.}}{{ end }}
---

{{ .RenderShortcodes }}
{{- $changelogs := where .RegularPagesRecursive "Type" "changelog-entry" -}}
{{- range (sort ($changelogs.GroupByParam "change.date") "Key" "desc") }}

## {{ time.Format "January 2006" (printf "%s-01" .Key | time) }}
{{ range .Pages.ByWeight }}
{{- $type := split .Params.change.type "," }}
### {{ range $type }}{{ if eq . "deprecation" }}⚠️ {{ else if eq . "breaking-change" }}🔥 {{ else if eq . "feature" }}🎁 {{ end }}{{ end }}{{ .Title }}

{{ .RenderShortcodes | strings.TrimSpace }}
{{ end -}}
{{- end }}
