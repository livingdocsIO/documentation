---
name: write-trn-deprecation
description: Write a Deprecation entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a deprecation, mentions "write deprecation", "add deprecation to release notes", or provides PR URLs and asks to document a deprecation for a specific release (e.g. "write the deprecation for release-2026-05"). This skill handles the full workflow: gathering PR details, writing the entry with Detect/Fix sub-sections and a planned removal release, and inserting it into the release file.
---

# Write TRN Deprecation Entry

Deprecations announce future removals. They share the structure of Breaking Changes (`Detect` / `Fix` sub-sections) and differ in one way: deprecations name a **planned removal release** so the reader can schedule the migration.

This skill is the **workflow**. The entry's shape, tone, and rules — including the deprecation-specific and opt-in-default-behaviour cases — live in `.claude/trn-format-reference.md`, which is the source of truth. Read it before drafting and follow it rather than relying on memory.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format where the deprecation is being introduced. Accept plain year/month and normalise it yourself.
2. **Planned removal release** — when will the deprecated property / API / behaviour be removed? Accept `release-YYYY-MM` format, or "no fixed removal release" if the deprecation is open-ended (e.g. an opt-in API default-behaviour change).
3. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
4. **Notification code(s)** — the `LivingdocsDeprecation` code(s) this deprecation emits (e.g. `LIDEP000`). Collect all of them if there are several. Say "no" if it emits no runtime warning.
5. **Notion requirement URL** — original requirement page (if available). Say "no" to skip.
6. **Additional context** — free-form notes from the developer. Optional.

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues, code diff. Pay attention to:
  - Which config property, API endpoint, or behaviour is being deprecated.
  - What the replacement is (different shape, opt-in flag, alternative property, etc.).
  - Whether the migration is mechanical (a property rename or move) or discretionary (the user chooses how to map the old usage to the new model).
- If a Notion URL was provided, fetch it to understand the original motivation.
- Read the existing `## Deprecations :warning:` section in `content/operations/releases/<release-identifier>.md` to calibrate tone and to confirm the deprecation isn't already documented.

## Step 3: Write the deprecation entry

Write the entry following the **Deprecation entry shape** and its **Rules** in `.claude/trn-format-reference.md` — the source of truth for the title, the `**Code:**` line, the concise prose intro (which must name the planned removal release) with before/after, the greppable `Detect`, and the `Fix`. Read it now rather than restating it here.

## Step 4: Ask for feedback

Show the draft to the developer:

> _"Here's the draft. Does it look right? Anything to adjust — wording, the planned removal release, or the Detect/Fix specificity?"_

Apply any requested changes. If the developer flags the entry as a breaking change rather than a deprecation, switch to the `write-trn-breaking-change` skill instead.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Deprecations :warning:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.

## Step 6: Sanity-check after insertion

Verify the finished entry against the **Rules** in `.claude/trn-format-reference.md` (icon-free `###` heading, `**Code:**` line with codes verbatim from the source, prose names a planned removal release or states none, greppable Detect, both Detect and Fix present, no extra `####` sub-headings). Then confirm the insertion itself: the entry sits inside `## Deprecations :warning:`, before the next `##` heading.

If any check fails, surface it to the developer and propose a fix before closing.
