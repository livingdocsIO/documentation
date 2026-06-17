---
name: write-trn-breaking-change
description: Write a Breaking Change entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a breaking change, mentions "write breaking change", "add breaking change to release notes", or provides PR URLs and asks to document a breaking change for a specific release (e.g. "write the breaking change for release-2026-05"). This skill handles the full workflow: gathering PR details, writing the entry with Detect/Fix sub-sections, and inserting it into the release file.
---

# Write TRN Breaking Change Entry

Breaking changes are the most upgrade-critical section of the TRN. Each entry must be detectable and fixable from its own text — an AI agent or operator should be able to walk through Breaking Changes and apply each fix without consulting other documentation.

This skill is the **workflow**. The entry's shape, tone, and rules live in `.claude/trn-format-reference.md`, which is the source of truth — read it before drafting and follow it rather than relying on memory.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalise it yourself.
2. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
3. **Notification code(s)** — the `LivingdocsBreakingChange` code(s) this change emits (e.g. `LIBREAKING000`). Collect all of them if there are several (e.g. one per affected property, like `LIBREAKING000-propertyOne`, `LIBREAKING000-propertyTwo`). Say "none" if the change emits no runtime warning (e.g. a static-only concern such as direct `lib/` imports).
4. **Notion requirement URL** — original requirement page (if available). Say "none" to skip.
5. **Additional context** — free-form notes from the developer about the breaking change. Optional.

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues, code diff. Pay attention to:
  - Which config properties, API endpoints, or source-level imports are affected.
  - The old shape vs. the new shape (verbatim — Detect and Fix lines must use the exact property names from the code).
  - Whether the change is mechanical (e.g. property rename, key move) or judgment-based (e.g. semantic conflict where the user must choose).
- If a Notion URL was provided, fetch it to understand the original motivation.
- **Check earlier releases for a matching deprecation.** Most breaking changes that remove a property, API, or behaviour were first announced as a deprecation in an earlier release — typically around three releases earlier, though this is not guaranteed. Look under `## Deprecations :warning:` in the earlier `content/operations/releases/release-YYYY-MM.md` files. If you find one, its prose, Detect, and Fix are a strong starting point — adapt them rather than writing from scratch. Still review it end to end: details may have changed between the deprecation announcement and the actual removal, and the deprecation entry may have surfaced edge cases worth carrying over.
- Read the existing `## Breaking Changes :fire:` section in `content/operations/releases/<release-identifier>.md` to calibrate tone and to confirm the change isn't already documented.

## Step 3: Write the breaking change entry

Write the entry following the **Breaking Change entry shape** and its **Rules** in `.claude/trn-format-reference.md` — the source of truth for the title, the `**Code:**` line, the exhaustive prose intro with before/after, the greppable `Detect`, and the `Fix`. Read it now rather than restating it here.

Skill-specific note: if you adapted an earlier deprecation entry (Step 2), carry over its still-accurate detail and update whatever changed between the deprecation and the removal.

## Step 4: Ask for feedback

Show the draft to the developer:

> _"Here's the draft. Does it look right? Anything to adjust — wording, missing edge cases, or the Detect/Fix specificity?"_

Apply any requested changes. If the developer flags the entry as a deprecation rather than a breaking change, switch to the `write-trn-deprecation` skill instead.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Breaking Changes :fire:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.

## Step 6: Sanity-check after insertion

Verify the finished entry against the **Rules** in `.claude/trn-format-reference.md` (icon-free `###` heading, `**Code:**` line with codes verbatim from the source, greppable Detect, both Detect and Fix present, no extra `####` sub-headings). Then confirm the insertion itself: the entry sits inside `## Breaking Changes :fire:`, before the next `##` heading.

If any check fails, surface it to the developer and propose a fix before closing.
