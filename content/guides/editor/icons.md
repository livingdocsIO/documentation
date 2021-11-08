- How to add an icon (upstream and downstream)?
  - add icon to the design? or embed it directly, how?
- When and how are icons changed?
- content-type icons (create article)
- when I have to register an icon in the upsteram?



- DOC: add doc to business doc - customIconNames - https://github.com/livingdocsIO/livingdocs-bluewin-editor/pull/450
- DOC - Add material design icon in iconUrl for a component - https://livingdocs.slack.com/archives/D583DEU7Q/p1622823074091700
	- overview - https://livingdocsio.github.io/material-design-icons-svg/
	- detail page - https://livingdocsio.github.io/material-design-icons-svg/svg/access-point-network-off.svg

marc info
https://livingdocs.slack.com/archives/D583DEU7Q/p1622823074091700


update cycle
------------
Hey Fuhrer Mathias, INI-DOS-EAS, sorry, didn't see your question. Yes, you can reuse our icons. It's indeed planned like that. We don't guarantee no changes and we also don't communicate changes. But changes are very rare and almost super small, e.g. making the background a little bit more bright.



ICONS - material design icons
-----------------------------

We use Material Design icons originally imported from http://livingdocsio.github.io/material-design-icons-svg.

Technically any icon is supported, it has to be placed in /assets/icons/ as an svg file.


styleguide - icons
- are used in upstream
- can also be used in downstream views e.g. <li-icon name="history" theme="default"></li-icon>
---> doc-include -> https://github.com/livingdocsIO/livingdocs-bluewin-editor/blob/80033d3526e221285c32e21773c3e9fc13090938/plugins/doc-includes/scheduled-list/list_template.html#L14


components
---------------------



metadata
---------------------
