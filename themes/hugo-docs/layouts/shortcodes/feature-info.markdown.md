{{- $description := .Get 0 -}}
{{- $repo := .Get 1 -}}
**{{ $description }}**{{ with $repo }} (`{{ . }}`){{ end }}
