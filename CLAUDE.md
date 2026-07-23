# CLAUDE.md

Guidance for Claude Code when working in the Livingdocs **documentation** repo.

## Source of truth

`content/reference/` and `content/guides/` are the source of truth for how
features work. When a feature changes, update the reference/guide docs first;
release notes then link to them rather than restating the detail.

## Release notes (TRN)

- **Files:** `content/operations/releases/release-YYYY-MM.md`, one per release.
- **Template:** `content/operations/releases/_release-template.md` — copy its
  scaffold for the fixed sections rather than re-deriving structure.
- **Format source of truth:** `.claude/trn-format-reference.md` — canonical
  section order, icon rules, and the Detect/Fix contract. Read it before
  editing TRN structure.

## Writing style

Documentation prose is user-facing: be clear and concise, match the tone of the
surrounding page, and prefer linking to reference docs over repeating them.
