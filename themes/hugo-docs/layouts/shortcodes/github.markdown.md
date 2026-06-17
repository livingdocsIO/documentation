{{- $repo := .Get 0 -}}
[{{ $repo }}](https://github.com/{{ $repo }}){{ with .Get 1 }} — {{ . }}{{ end }}
