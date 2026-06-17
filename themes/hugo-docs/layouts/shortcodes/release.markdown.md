{{- $release := .Get 0 -}}
[`{{ $release }}`](/operations/releases/{{ $release }}/)
{{- /* Kill the trailing newline so the link stays inline */ -}}
