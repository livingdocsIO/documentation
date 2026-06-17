{{- $link := .Get "link" -}}
{{- if hasSuffix $link "/" }}{{ $link = print $link "index.md" }}{{ end -}}
- **[{{ .Get "flag" }}]({{ $link }})** — {{ .Get "title" }}
