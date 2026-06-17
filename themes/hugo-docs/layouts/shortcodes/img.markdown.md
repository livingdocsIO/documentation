{{- $raw := .Get "src" -}}
{{- $src := cond (hasPrefix $raw "https:") $raw (path.Join .Page.File.Dir $raw | relURL) -}}
{{- $alt := or (.Get "alt") (.Get "caption") "" -}}
![{{ $alt }}]({{ $src }}{{ with .Get "caption" }} "{{ . }}"{{ end }})
